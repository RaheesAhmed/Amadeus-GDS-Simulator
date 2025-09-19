// Amadeus GDS Simulator - Commands Module
// Handles all command processing and responses

const COMMANDS = {
    // Current system state
    state: {
        signedIn: true,
        userId: 'SIMULATOR',
        workArea: '>',
        currentPNR: null,
        lastAvailability: null,
        queueMode: false,
        currentQueue: null
    },

    // Command processor
    process: function(input) {
        const cmd = input.trim().toUpperCase();
        if (!cmd) return '';

        // Parse the command
        const parts = cmd.split(/[\s\/]+/);
        const mainCmd = parts[0];

        // Route to appropriate handler
        if (this.isSignInCommand(cmd)) {
            return this.handleSignIn(cmd);
        } else if (this.isWorkAreaCommand(cmd)) {
            return this.handleWorkArea(cmd);
        } else if (this.isPNRCommand(cmd)) {
            return this.handlePNR(cmd);
        } else if (this.isAvailabilityCommand(cmd)) {
            return this.handleAvailability(cmd);
        } else if (this.isSellCommand(cmd)) {
            return this.handleSell(cmd);
        } else if (this.isFareCommand(cmd)) {
            return this.handleFare(cmd);
        } else if (this.isTicketCommand(cmd)) {
            return this.handleTicket(cmd);
        } else if (this.isQueueCommand(cmd)) {
            return this.handleQueue(cmd);
        } else if (this.isHelpCommand(cmd)) {
            return this.handleHelp(cmd);
        } else if (this.isEncodingCommand(cmd)) {
            return this.handleEncoding(cmd);
        } else if (this.isHotelCommand(cmd)) {
            return this.handleHotel(cmd);
        } else if (this.isScrollCommand(cmd)) {
            return this.handleScroll(cmd);
        } else if (this.isGeneralCommand(cmd)) {
            return this.handleGeneral(cmd);
        } else {
            return this.handleUnrecognized(cmd);
        }
    },

    // Command type checkers
    isSignInCommand: function(cmd) {
        return /^JI/.test(cmd) || cmd === 'JO' || cmd === 'JB';
    },

    isWorkAreaCommand: function(cmd) {
        return /^J[MXCD]/.test(cmd) || cmd === 'JD' || cmd === 'JS';
    },

    isPNRCommand: function(cmd) {
        return /^RT/.test(cmd) || /^RF/.test(cmd) || cmd === 'IG' || cmd === 'ER' || cmd === 'ET' || /^RH/.test(cmd) || /^RR/.test(cmd) || /^LPC/.test(cmd) || /^IEP/.test(cmd) || /^RMZ/.test(cmd) || /^ES\//.test(cmd) || /^RP\//.test(cmd) || /^SP/.test(cmd) || /^RFA/.test(cmd) || cmd === 'EF' || /^RL/.test(cmd);
    },

    isAvailabilityCommand: function(cmd) {
        return /^AN/.test(cmd) || /^AD/.test(cmd) || /^AA/.test(cmd) || /^AW/.test(cmd);
    },

    isSellCommand: function(cmd) {
        return /^SS/.test(cmd) || /^0\d/.test(cmd) || /^XE/.test(cmd);
    },

    isFareCommand: function(cmd) {
        return /^FX/.test(cmd) || /^FP/.test(cmd) || /^FM/.test(cmd) || /^FE/.test(cmd) || cmd === 'TQT' || /^TTK/.test(cmd);
    },

    isTicketCommand: function(cmd) {
        return /^TTP/.test(cmd) || /^TRDC/.test(cmd) || /^EMD/.test(cmd);
    },

    isQueueCommand: function(cmd) {
        return /^Q[TSNDIFX]/.test(cmd);
    },

    isHelpCommand: function(cmd) {
        return /^HE/.test(cmd) || /^GG/.test(cmd);
    },

    isEncodingCommand: function(cmd) {
        return /^S\*/.test(cmd) || /^D[CNSA]/.test(cmd) || /^TC/.test(cmd) || /^DNS/.test(cmd) || /^DAN/.test(cmd) || /^DAC/.test(cmd) || /^DNA/.test(cmd) || /^GP/.test(cmd) || cmd === 'GGCODES';
    },

    isHotelCommand: function(cmd) {
        return /^H[FLAD]/.test(cmd);
    },

    isScrollCommand: function(cmd) {
        return /^M[DUBTP]/.test(cmd);
    },

    isGeneralCommand: function(cmd) {
        return /^NM/.test(cmd) || /^AP/.test(cmd) || /^SR/.test(cmd) || /^RM/.test(cmd) || /^OS/.test(cmd) || /^OSI/.test(cmd) || /^TK/.test(cmd) || /^FFN/.test(cmd) || /^TN/.test(cmd) || /^SN/.test(cmd) || /^SM/.test(cmd);
    },

    // Sign-in/out handlers
    handleSignIn: function(cmd) {
        if (cmd === 'JO') {
            this.state.signedIn = false;
            this.state.userId = '';
            this.state.currentPNR = null;
            return 'SIGNED OFF';
        }

        if (cmd === 'JB') {
            return this.getSignInMessage();
        }

        // JI command pattern: JI1234AA/AS or similar
        const match = cmd.match(/^JI([A-Z0-9]+)\/([A-Z]+)$/);
        if (match) {
            this.state.signedIn = true;
            this.state.userId = match[1] + '/' + match[2];
            return 'SIGN-IN ACCEPTED\n' + this.getCurrentDateTime() + '\nWORK AREA: ' + this.state.workArea;
        }

        return 'INVALID SIGN-IN FORMAT - USE JI1234AA/AS';
    },

    handleWorkArea: function(cmd) {
        if (cmd === 'JD') {
            return this.getWorkAreaStatus();
        }

        const areaMatch = cmd.match(/^J[MX]([A-F])$/);
        if (areaMatch) {
            this.state.workArea = areaMatch[1];
            return 'MOVED TO WORK AREA ' + areaMatch[1];
        }

        return 'INVALID WORK AREA COMMAND';
    },

    // PNR handlers
    handlePNR: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        if (cmd === 'IG') {
            this.state.currentPNR = null;
            return 'PNR IGNORED';
        }

        if (cmd === 'ER') {
            if (this.state.currentPNR) {
                return 'PNR END AND REDISPLAY\n' + this.displayPNR(this.state.currentPNR);
            }
            return 'NO PNR IN WORK AREA';
        }

        if (cmd === 'ET') {
            if (this.state.currentPNR) {
                const locator = this.state.currentPNR.locator;
                
                // Save PNR to DATA.pnrs for retrieval
                DATA.pnrs[locator] = JSON.parse(JSON.stringify(this.state.currentPNR));
                
                // Save to localStorage for persistence
                this.savePNRToStorage(this.state.currentPNR);
                
                const result = 'PNR END AND TRANSMIT\nLOCATOR: ' + locator;
                this.state.currentPNR = null;
                return result;
            }
            return 'NO PNR IN WORK AREA';
        }

        // RT commands
        if (cmd.startsWith('RT')) {
            if (cmd === 'RT' || cmd === 'RTPNR') {
                if (this.state.currentPNR) {
                    return this.displayPNR(this.state.currentPNR);
                }
                return 'NO PNR IN WORK AREA';
            }

            const locator = cmd.substring(2);
            if (DATA.pnrs[locator]) {
                this.state.currentPNR = DATA.pnrs[locator];
                return this.displayPNR(this.state.currentPNR);
            }
            return 'PNR NOT FOUND - ' + locator;
        }

        // RF commands - Received From
        if (cmd.startsWith('RF ') || cmd === 'RFS') {
            let receivedFrom;
            
            if (cmd === 'RFS') {
                receivedFrom = 'TRAVEL AGENT';
            } else {
                receivedFrom = cmd.substring(3);
            }
            
            if (!this.state.currentPNR) {
                return 'NO PNR IN WORK AREA';
            }

            this.state.currentPNR.received_from = receivedFrom;
            return 'RECEIVED FROM ELEMENT ADDED - ' + receivedFrom;
        }

        // RF* commands (retrieve by name)
        if (cmd.startsWith('RF*')) {
            const nameSearch = cmd.substring(3);
            // Simulate name search
            for (const [locator, pnr] of Object.entries(DATA.pnrs)) {
                if (pnr.passengers.some(p => p.name.includes(nameSearch))) {
                    this.state.currentPNR = pnr;
                    return this.displayPNR(pnr);
                }
            }
            return 'NO PNR FOUND FOR NAME - ' + nameSearch;
        }

        return 'INVALID PNR COMMAND';
    },

    // Availability handlers
    handleAvailability: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        // Parse availability command: AN20NOVDELBOM or similar
        const match = cmd.match(/^A[NDA](\d{1,2})(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)([A-Z]{3})([A-Z]{3})(\d{4})?/);
        
        if (match) {
            const [, day, month, origin, destination, time] = match;
            const date = day + month;
            const departureTime = time || '0000';

            // Check if cities exist
            if (!DATA.cities[origin] || !DATA.cities[destination]) {
                return 'INVALID CITY CODE';
            }

            const flights = DATA.flights.generateFlights(origin, destination, date);
            this.state.lastAvailability = { origin, destination, date, flights };

            let result = `${cmd}\n`;
            result += `${date} ${DATA.cities[origin]} TO ${DATA.cities[destination]}\n\n`;
            
            flights.forEach(flight => {
                result += `${flight.line.toString().padStart(2)} `;
                result += `${flight.airline}${flight.flight.toString().padStart(3)} `;
                result += `${flight.class} `;
                result += `${flight.date} `;
                result += `${flight.route} `;
                result += `${flight.dep.substring(0,2)}${flight.dep.substring(2)} `;
                result += `${flight.arr.substring(0,2)}${flight.arr.substring(2)} `;
                result += `${flight.aircraft} `;
                result += `${flight.avail}\n`;
            });

            return result;
        }

        return 'INVALID AVAILABILITY FORMAT';
    },

    // Sell handlers
    handleSell: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        // SS command: SS1Y1 (sell 1 seat in Y class on line 1)
        const ssMatch = cmd.match(/^SS(\d+)([A-Z])(\d+)$/);
        if (ssMatch) {
            const [, seats, classType, line] = ssMatch;
            
            if (!this.state.lastAvailability) {
                return 'NO AVAILABILITY DISPLAY';
            }

            const lineNum = parseInt(line);
            const flight = this.state.lastAvailability.flights[lineNum - 1];
            
            if (!flight) {
                return 'INVALID LINE NUMBER';
            }

            if (!this.state.currentPNR) {
                // Start new PNR
                this.state.currentPNR = {
                    locator: this.generateLocator(),
                    created: this.getCurrentDate(),
                    status: 'HK',
                    passengers: [],
                    segments: [],
                    contacts: [],
                    remarks: [],
                    received_from: '',
                    ticketing: ''
                };
            }

            // Add segment to PNR
            const segment = {
                line: this.state.currentPNR.segments.length + 1,
                airline: flight.airline,
                flight: flight.flight.toString(),
                class: classType,
                date: flight.date,
                route: flight.route,
                dep: flight.dep,
                arr: flight.arr,
                status: 'HK',
                pax: parseInt(seats)
            };

            this.state.currentPNR.segments.push(segment);

            return `SEGMENT SOLD\n${segment.line} ${segment.airline}${segment.flight} ${segment.class} ${segment.date} ${segment.route} ${segment.status}${segment.pax}`;
        }

        // Cancel segment: XE4
        const xeMatch = cmd.match(/^XE(\d+)$/);
        if (xeMatch) {
            const lineNum = parseInt(xeMatch[1]);
            if (this.state.currentPNR && this.state.currentPNR.segments[lineNum - 1]) {
                this.state.currentPNR.segments.splice(lineNum - 1, 1);
                // Renumber remaining segments
                this.state.currentPNR.segments.forEach((seg, index) => {
                    seg.line = index + 1;
                });
                return 'SEGMENT ' + lineNum + ' CANCELLED';
            }
            return 'INVALID SEGMENT NUMBER';
        }

        return 'INVALID SELL COMMAND';
    },

    // Name and contact handlers
    handleGeneral: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        // NM command: NM1SMITH/JOHN MR
        const nmMatch = cmd.match(/^NM(\d+)([A-Z\/\s\(\)]+)$/);
        if (nmMatch) {
            const [, count, nameString] = nmMatch;
            
            if (!this.state.currentPNR) {
                return 'NO PNR IN WORK AREA';
            }

            const passenger = {
                name: nameString.trim(),
                type: nameString.includes('(CHD') ? 'CHD' : nameString.includes('(INF') ? 'INF' : 'ADT'
            };

            this.state.currentPNR.passengers.push(passenger);
            return 'NAME ELEMENT ADDED - ' + passenger.name;
        }

        // AP command: AP 91-11-12345678-TRAVEL AGENCY
        if (cmd.startsWith('AP ')) {
            const contactInfo = cmd.substring(3);
            
            if (!this.state.currentPNR) {
                return 'NO PNR IN WORK AREA';
            }

            this.state.currentPNR.contacts.push({
                type: 'AP',
                value: contactInfo
            });

            return 'PHONE ELEMENT ADDED';
        }

        // APM command: APM-03**********/P1
        if (cmd.startsWith('APM-')) {
            const mobileInfo = cmd.substring(4);
            
            if (!this.state.currentPNR) {
                return 'NO PNR IN WORK AREA';
            }

            this.state.currentPNR.contacts.push({
                type: 'APM',
                value: mobileInfo
            });

            return 'MOBILE PHONE ELEMENT ADDED';
        }

        // APE command: APE-EMAIL@DOMAIN.COM
        if (cmd.startsWith('APE-')) {
            const email = cmd.substring(4);
            
            if (!this.state.currentPNR) {
                return 'NO PNR IN WORK AREA';
            }

            this.state.currentPNR.contacts.push({
                type: 'APE',
                value: email
            });

            return 'EMAIL ELEMENT ADDED';
        }

        // TN command: Timetable
        if (cmd.startsWith('TN')) {
            // TN10JULPEWDOH/AQR
            const match = cmd.match(/^TN(\d{1,2})(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)([A-Z]{3})([A-Z]{3})\/([A-Z0-9]+)$/);
            if (match) {
                const [, day, month, origin, destination, airline] = match;
                return `TIMETABLE ${day}${month} ${origin}${destination}/${airline}\n\nFLT  AIRCRAFT  DEP   ARR   DAYS\n${airline}123  B737     0800  1100  1234567\n${airline}456  A320     1400  1700  1234567\n${airline}789  B777     2000  2300  1234567`;
            }
            return 'TIMETABLE DISPLAYED';
        }

        // SN command: Schedule
        if (cmd.startsWith('SN')) {
            // SN10AUGPEWDOH/AQR
            const match = cmd.match(/^SN(\d{1,2})(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)([A-Z]{3})([A-Z]{3})\/([A-Z0-9]+)$/);
            if (match) {
                const [, day, month, origin, destination, airline] = match;
                return `SCHEDULE ${day}${month} ${origin}${destination}/${airline}\n\nFLT  EQT  DEP   ARR   FREQ  EFF    DISC\n${airline}123 737  0800  1100  1234567 01JAN  31DEC\n${airline}456 320  1400  1700  1234567 01JAN  31DEC`;
            }
            return 'SCHEDULE DISPLAYED';
        }

        // SM command: Seat Map
        if (cmd.startsWith('SM')) {
            const segmentMatch = cmd.match(/^SM(\d+)$/);
            if (segmentMatch) {
                const segment = segmentMatch[1];
                return `SEAT MAP SEGMENT ${segment}\n\n    A B C   D E F\n 1  X X X   O O O\n 2  O X O   X O O\n 3  O O X   O O X\n 4  O O O   O O O\n 5  X O O   O X O\n\nX = OCCUPIED  O = AVAILABLE`;
            }
            return 'SEAT MAP DISPLAYED';
        }

        // SR command: Special Service Requests (SSR)
        if (cmd.startsWith('SR ')) {
            const ssrCode = cmd.substring(3).split(' ')[0];
            
            if (!this.state.currentPNR) {
                return 'NO PNR IN WORK AREA';
            }

            const ssrDescription = DATA.ssr_codes[ssrCode] || 'SPECIAL SERVICE REQUEST';
            
            if (!this.state.currentPNR.remarks) {
                this.state.currentPNR.remarks = [];
            }
            
            this.state.currentPNR.remarks.push({
                type: 'SSR',
                code: ssrCode,
                value: ssrDescription,
                full_command: cmd
            });

            return `SSR ${ssrCode} ADDED - ${ssrDescription}`;
        }

        // OS command: Other Service Information (OSI)
        if (cmd.startsWith('OS ')) {
            const osiInfo = cmd.substring(3);
            
            if (!this.state.currentPNR) {
                return 'NO PNR IN WORK AREA';
            }

            if (!this.state.currentPNR.remarks) {
                this.state.currentPNR.remarks = [];
            }
            
            this.state.currentPNR.remarks.push({
                type: 'OSI',
                value: osiInfo
            });

            return 'OSI ELEMENT ADDED';
        }

        // RM command: General Remarks
        if (cmd.startsWith('RM ')) {
            const remarkText = cmd.substring(3);
            
            if (!this.state.currentPNR) {
                return 'NO PNR IN WORK AREA';
            }

            if (!this.state.currentPNR.remarks) {
                this.state.currentPNR.remarks = [];
            }
            
            this.state.currentPNR.remarks.push({
                type: 'RM',
                value: remarkText
            });

            return 'GENERAL REMARK ADDED';
        }

        // FFN command: Frequent Flyer Number
        if (cmd.startsWith('FFN')) {
            const ffnMatch = cmd.match(/^FFN([A-Z0-9]+)-([A-Z0-9]+)$/);
            if (ffnMatch) {
                const [, airline, number] = ffnMatch;
                
                if (!this.state.currentPNR) {
                    return 'NO PNR IN WORK AREA';
                }

                if (!this.state.currentPNR.remarks) {
                    this.state.currentPNR.remarks = [];
                }
                
                this.state.currentPNR.remarks.push({
                    type: 'FFN',
                    airline: airline,
                    number: number
                });

                return `FREQUENT FLYER NUMBER ADDED - ${airline} ${number}`;
            }
            return 'INVALID FFN FORMAT';
        }


        // TKTL/TKOK commands
        if (cmd.startsWith('TKTL')) {
            if (!this.state.currentPNR) {
                return 'NO PNR IN WORK AREA';
            }

            this.state.currentPNR.ticketing = cmd;
            return 'TICKETING TIME LIMIT SET';
        }

        if (cmd === 'TKOK') {
            if (!this.state.currentPNR) {
                return 'NO PNR IN WORK AREA';
            }

            this.state.currentPNR.ticketing = 'TKOK';
            return 'TICKETING OK ELEMENT ADDED';
        }

        return 'INVALID COMMAND';
    },

    // Fare handlers
    handleFare: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        if (cmd === 'FXP' || cmd === 'FXB' || cmd === 'FXA') {
            if (!this.state.currentPNR || this.state.currentPNR.segments.length === 0) {
                return 'NO SEGMENTS TO PRICE';
            }

            const segment = this.state.currentPNR.segments[0];
            const origin = segment.route.substring(0, 3);
            const destination = segment.route.substring(3, 6);
            
            const fare = DATA.fares.generateFare(origin, destination, segment.class);

            let result = `${cmd} - PRICING\n\n`;
            result += `PASSENGER TYPE: ADT\n`;
            result += `VALIDATING CARRIER: ${fare.validating_carrier}\n`;
            result += `FARE BASIS: ${fare.fare_basis}\n\n`;
            result += `BASE FARE:       ${fare.currency} ${fare.base_fare}\n`;
            result += `TAXES:          ${fare.currency} ${fare.taxes}\n`;
            result += `TOTAL:          ${fare.currency} ${fare.total}\n`;

            return result;
        }

        if (cmd === 'TQT') {
            return 'NO TST IN PNR';
        }

        if (cmd.startsWith('TTK')) {
            return 'TST CREATED AND STORED';
        }

        return 'INVALID FARE COMMAND';
    },

    // Ticket handlers
    handleTicket: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        if (cmd === 'TTP') {
            if (!this.state.currentPNR) {
                return 'NO PNR IN WORK AREA';
            }

            const ticketNumber = '555-' + Math.floor(Math.random() * 10000000000);
            return `E-TICKET ISSUED\nDOCUMENT NUMBER: ${ticketNumber}`;
        }

        if (cmd === 'TRDC') {
            return 'NO TICKETS TO DISPLAY';
        }

        if (cmd.startsWith('TRDC/TK-')) {
            const ticketNum = cmd.substring(9);
            return `TICKET ${ticketNum} VOIDED`;
        }

        return 'INVALID TICKET COMMAND';
    },

    // Queue handlers
    handleQueue: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        if (cmd === 'QT') {
            let result = 'QUEUE TOTALS\n\n';
            result += `QUEUE 50 GENERAL:        ${DATA.queues.general}\n`;
            result += `QUEUE 70 TICKETING:      ${DATA.queues.ticketing}\n`;
            result += `QUEUE 80 DEPARTURE:      ${DATA.queues.departure}\n`;
            result += `QUEUE 90 WAITLIST:       ${DATA.queues.waitlist}\n`;
            result += `QUEUE 97 SCHEDULE CHG:   ${DATA.queues.schedule_change}\n`;
            return result;
        }

        const qsMatch = cmd.match(/^QS(\d+)C(\d+)$/);
        if (qsMatch) {
            this.state.queueMode = true;
            this.state.currentQueue = qsMatch[1] + 'C' + qsMatch[2];
            return `ENTERING QUEUE ${this.state.currentQueue}\nQUEUE COUNT: 5\nNEXT ITEM...`;
        }

        if (cmd === 'QF') {
            this.state.queueMode = false;
            this.state.currentQueue = null;
            return 'EXITING QUEUE MODE';
        }

        return 'INVALID QUEUE COMMAND';
    },

    // Help handlers
    handleHelp: function(cmd) {
        if (cmd === 'HE' || cmd === 'HE SIGN') {
            return this.getHelpText();
        }

        if (cmd.startsWith('GG ')) {
            const topic = cmd.substring(3);
            return this.getGeneralInfo(topic);
        }

        return 'HELP TOPIC NOT FOUND';
    },

    // Encoding/Decoding handlers
    handleEncoding: function(cmd) {
        // Clean command - remove extra spaces and normalize
        const cleanCmd = cmd.replace(/\s+/g, ' ').trim();
        
        // TC command: TC FR or TCFR
        if (cleanCmd.startsWith('TC')) {
            const param = cleanCmd.substring(2).trim();
            if (!param) return 'MISSING PARAMETER';
            
            return DATA.countries[param] || DATA.cities[param] || DATA.airlines[param] || DATA.aircraft[param] || 'CODE NOT FOUND';
        }

        // GP commands: GP11, GP22, etc.
        if (cleanCmd.startsWith('GP')) {
            const pageNum = cleanCmd.substring(2);
            return `GENERAL PAGE ${pageNum}\nCOUNTRY CODES AND INFORMATION\n\nPK - PAKISTAN\nIN - INDIA\nUS - UNITED STATES\nGB - UNITED KINGDOM\nFR - FRANCE\nDE - GERMANY`;
        }

        // GGCODES command
        if (cleanCmd === 'GGCODES') {
            return `GENERAL CODES PAGE\n\nCOUNTRY CODES:\nPK - PAKISTAN\nIN - INDIA\nUS - UNITED STATES\n\nAIRLINE CODES:\nAI - AIR INDIA\nEK - EMIRATES\nQR - QATAR AIRWAYS\n\nCITY CODES:\nKHI - KARACHI\nLHE - LAHORE\nISB - ISLAMABAD`;
        }

        // DC commands - Handle with or without spaces
        if (cleanCmd.startsWith('DC')) {
            let param = cleanCmd.substring(2).trim();
            
            // If no space after DC, try to parse
            if (!param && cleanCmd.length > 2) {
                // Handle cases like DCEMIRATES, DCPAKISTAN
                param = cleanCmd.substring(2);
            }
            
            if (!param) return 'MISSING PARAMETER';
            
            // First try exact code match (for decoding)
            if (DATA.countries[param]) return `${param} - ${DATA.countries[param]}`;
            if (DATA.cities[param]) return `${param} - ${DATA.cities[param]}`;
            if (DATA.airlines[param]) return `${param} - ${DATA.airlines[param]}`;
            if (DATA.aircraft[param]) return `${param} - ${DATA.aircraft[param]}`;
            
            // Then try name matching (for encoding) - search all databases
            const searchTerm = param.toUpperCase();
            
            // Search countries
            for (const [code, name] of Object.entries(DATA.countries)) {
                if (name.toUpperCase().includes(searchTerm) || searchTerm.includes(name.toUpperCase().replace(/\s+/g, ''))) {
                    return `${code} - ${name}`;
                }
            }
            
            // Search cities
            for (const [code, name] of Object.entries(DATA.cities)) {
                const cleanName = name.split('/')[0].toUpperCase().replace(/\s+/g, '');
                if (cleanName.includes(searchTerm) || searchTerm.includes(cleanName)) {
                    return `${code} - ${name}`;
                }
            }
            
            // Search airlines
            for (const [code, name] of Object.entries(DATA.airlines)) {
                const cleanName = name.toUpperCase().replace(/\s+/g, '');
                if (cleanName.includes(searchTerm) || searchTerm.includes(cleanName)) {
                    return `${code} - ${name}`;
                }
            }
            
            // Search aircraft
            for (const [code, name] of Object.entries(DATA.aircraft)) {
                if (name.toUpperCase().includes(searchTerm)) {
                    return `${code} - ${name}`;
                }
            }
            
            return `CODE/NAME NOT FOUND: ${param}`;
        }

        // DNS commands - State encoding/decoding (with or without spaces)
        if (cleanCmd.startsWith('DNS')) {
            let param = cleanCmd.substring(3).trim();
            if (!param && cleanCmd.length > 3) {
                param = cleanCmd.substring(3);
            }
            
            const states = {
                'WASHINGTON': 'USWA - WASHINGTON STATE/US',
                'USWA': 'WASHINGTON STATE/US', 
                'CALIFORNIA': 'USCA - CALIFORNIA STATE/US',
                'USCA': 'CALIFORNIA STATE/US',
                'TEXAS': 'USTX - TEXAS STATE/US',
                'USTX': 'TEXAS STATE/US',
                'FLORIDA': 'USFL - FLORIDA STATE/US',
                'USFL': 'FLORIDA STATE/US',
                'NEWYORK': 'USNY - NEW YORK STATE/US',
                'USNY': 'NEW YORK STATE/US'
            };
            
            return states[param.toUpperCase()] || 'STATE NOT FOUND';
        }

        // DAN commands - City encoding (with or without spaces)
        if (cleanCmd.startsWith('DAN')) {
            let param = cleanCmd.substring(3).trim();
            if (!param && cleanCmd.length > 3) {
                param = cleanCmd.substring(3);
            }
            
            const searchTerm = param.toUpperCase();
            for (const [code, name] of Object.entries(DATA.cities)) {
                const cleanName = name.split('/')[0].toUpperCase().replace(/\s+/g, '');
                if (cleanName.includes(searchTerm) || searchTerm.includes(cleanName)) {
                    return `${code} - ${name}`;
                }
            }
            return 'CITY NOT FOUND';
        }

        // DAC commands - City decoding (with or without spaces)
        if (cleanCmd.startsWith('DAC')) {
            let param = cleanCmd.substring(3).trim();
            if (!param && cleanCmd.length > 3) {
                param = cleanCmd.substring(3);
            }
            
            return DATA.cities[param] ? `${param} - ${DATA.cities[param]}` : 'CITY CODE NOT FOUND';
        }

        // DNA commands - Airline encoding/decoding (with or without spaces)
        if (cleanCmd.startsWith('DNA')) {
            let param = cleanCmd.substring(3).trim();
            if (!param && cleanCmd.length > 3) {
                param = cleanCmd.substring(3);
            }
            
            // Try exact code first
            if (DATA.airlines[param]) {
                return `${param} - ${DATA.airlines[param]}`;
            }
            
            // Try name search
            const searchTerm = param.toUpperCase();
            for (const [code, name] of Object.entries(DATA.airlines)) {
                const cleanName = name.toUpperCase().replace(/\s+/g, '');
                if (cleanName.includes(searchTerm) || searchTerm.includes(cleanName)) {
                    return `${code} - ${name}`;
                }
            }
            
            return 'AIRLINE NOT FOUND';
        }

        // S*CTY command
        if (cleanCmd.startsWith('S*CTY/')) {
            const cityName = cleanCmd.substring(6).toUpperCase();
            for (const [code, name] of Object.entries(DATA.cities)) {
                if (name.toUpperCase().includes(cityName)) {
                    return `${code} - ${name}`;
                }
            }
            return 'CITY NOT FOUND';
        }

        // S*AIR command
        if (cleanCmd.startsWith('S*AIR/')) {
            const airlineName = cleanCmd.substring(6).toUpperCase();
            for (const [code, name] of Object.entries(DATA.airlines)) {
                if (name.toUpperCase().includes(airlineName)) {
                    return `${code} - ${name}`;
                }
            }
            return 'AIRLINE NOT FOUND';
        }

        return 'INVALID ENCODING COMMAND';
    },

    // Hotel handlers
    handleHotel: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        if (cmd.startsWith('HL')) {
            return 'HOTEL LIST DISPLAY\nHI PAR123 - HILTON PARIS\nMA PAR456 - MARRIOTT PARIS\nIC PAR789 - INTERCONTINENTAL PARIS';
        }

        if (cmd.startsWith('HA')) {
            return 'HOTEL AVAILABILITY\n1. HILTON PARIS - 250 EUR\n2. MARRIOTT PARIS - 280 EUR\n3. INTERCONTINENTAL - 320 EUR';
        }

        return 'INVALID HOTEL COMMAND';
    },

    // Scroll handlers
    handleScroll: function(cmd) {
        switch (cmd) {
            case 'MD': return 'SCROLLED DOWN';
            case 'MU': return 'SCROLLED UP';
            case 'MB': return 'MOVED TO BOTTOM';
            case 'MT': return 'MOVED TO TOP';
            case 'MP': return 'PREVIOUS PAGE';
            default: return 'INVALID SCROLL COMMAND';
        }
    },

    // Handle unrecognized commands
    handleUnrecognized: function(cmd) {
        return 'ENTRY NOT RECOGNIZED - ' + cmd;
    },

    // Utility functions
    displayPNR: function(pnr) {
        let result = `--- PNR DISPLAY ---\n`;
        result += `LOCATOR: ${pnr.locator}\n`;
        result += `CREATED: ${pnr.created}\n\n`;

        // Passengers
        if (pnr.passengers.length > 0) {
            result += 'PASSENGERS:\n';
            pnr.passengers.forEach((pax, i) => {
                result += `${i + 1}. ${pax.name}\n`;
            });
            result += '\n';
        }

        // Segments
        if (pnr.segments.length > 0) {
            result += 'SEGMENTS:\n';
            pnr.segments.forEach(seg => {
                result += `${seg.line}. ${seg.airline}${seg.flight} ${seg.class} ${seg.date} ${seg.route} `;
                result += `${seg.dep} ${seg.arr} ${seg.status}${seg.pax}\n`;
            });
            result += '\n';
        }

        // Contacts
        if (pnr.contacts.length > 0) {
            result += 'CONTACTS:\n';
            pnr.contacts.forEach(contact => {
                result += `${contact.type}: ${contact.value}\n`;
            });
            result += '\n';
        }

        // Ticketing
        if (pnr.ticketing) {
            result += `TICKETING: ${pnr.ticketing}\n`;
        }

        // Received from
        if (pnr.received_from) {
            result += `RECEIVED FROM: ${pnr.received_from}\n`;
        }

        return result;
    },

    getWorkAreaStatus: function() {
        return 'WORK AREA STATUS\nA  FREE  B  FREE  C  FREE  D  FREE  E  FREE  F  FREE';
    },

    getSignInMessage: function() {
        return 'AMADEUS SYSTEM\nPLEASE SIGN-IN: JI1234AA/AS';
    },

    getHelpText: function() {
        return `AMADEUS COMMAND HELP
        
SIGN IN/OUT:
JI1234AA/AS - Sign in
JO - Sign out
JD - Work area status

PNR COMMANDS:
RT - Retrieve PNR
ER - End and redisplay
ET - End and transmit
IG - Ignore changes

AVAILABILITY:
AN20NOVDELBOM - Availability display

SELL:
SS1Y1 - Sell 1 seat Y class line 1

NAMES:
NM1SMITH/JOHN MR - Add passenger name

CONTACTS:
AP 91-11-12345678 - Add phone
APE-EMAIL@DOMAIN.COM - Add email

FARES:
FXP - Price itinerary
TTP - Issue ticket

QUEUES:
QT - Queue totals
QS50C1 - Enter queue`;
    },

    getGeneralInfo: function(topic) {
        const topics = {
            'NEWS': 'AMADEUS SYSTEM NEWS\n- NO NEW ANNOUNCEMENTS',
            'AIS': 'AMADEUS INFORMATION SYSTEM\n- MAIN MENU AVAILABLE',
            'WEA LON': DATA.weather.LON || 'WEATHER DATA NOT AVAILABLE',
            'WEA NYC': DATA.weather.NYC || 'WEATHER DATA NOT AVAILABLE',
            'WEA PAR': DATA.weather.PAR || 'WEATHER DATA NOT AVAILABLE',
            'WEA DEL': DATA.weather.DEL || 'WEATHER DATA NOT AVAILABLE',
            'WEA BOM': DATA.weather.BOM || 'WEATHER DATA NOT AVAILABLE'
        };

        return topics[topic] || 'INFORMATION NOT AVAILABLE FOR: ' + topic;
    },

    generateLocator: function() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },

    getCurrentDateTime: function() {
        const now = new Date();
        const date = now.getDate().toString().padStart(2, '0');
        const month = now.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
        const year = now.getFullYear().toString().substr(-2);
        const time = now.toTimeString().substr(0, 5);
        return `${date}${month}${year} ${time}`;
    },

    getCurrentDate: function() {
        const now = new Date();
        const date = now.getDate().toString().padStart(2, '0');
        const month = now.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
        const year = now.getFullYear().toString().substr(-2);
        return `${date}${month}${year}`;
    },

    // PNR Storage functions
    savePNRToStorage: function(pnr) {
        try {
            let storedPNRs = JSON.parse(localStorage.getItem('amadeus_pnrs') || '{}');
            storedPNRs[pnr.locator] = pnr;
            localStorage.setItem('amadeus_pnrs', JSON.stringify(storedPNRs));
        } catch (e) {
            console.log('localStorage not available');
        }
    },

    loadPNRsFromStorage: function() {
        try {
            const storedPNRs = JSON.parse(localStorage.getItem('amadeus_pnrs') || '{}');
            // Merge stored PNRs with existing DATA.pnrs
            Object.assign(DATA.pnrs, storedPNRs);
        } catch (e) {
            console.log('localStorage not available');
        }
    },

    clearStoredPNRs: function() {
        try {
            localStorage.removeItem('amadeus_pnrs');
        } catch (e) {
            console.log('localStorage not available');
        }
    },

    // Initialize system - load stored PNRs
    init: function() {
        this.loadPNRsFromStorage();
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COMMANDS;
}
