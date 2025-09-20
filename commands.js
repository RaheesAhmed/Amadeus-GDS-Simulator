// Amadeus GDS Simulator - Commands Module
// Handles all command processing and responses
// Enhanced with complete Amadeus cryptic command database

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

    // Enhanced command processor with complete cryptic database integration
    process: function(input) {
        const cmd = input.trim().toUpperCase();
        if (!cmd) return '';

        // Special search command
        if (cmd === 'SEARCH') {
            return this.handleSearchCommand();
        }

        // Enhanced routing for all Amadeus cryptic commands
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
        } else if (this.isCarCommand(cmd)) {
            return this.handleCar(cmd);
        } else if (this.isScrollCommand(cmd)) {
            return this.handleScroll(cmd);
        } else if (this.isGeneralCommand(cmd)) {
            return this.handleGeneral(cmd);
        } else if (this.isDateTimeCommand(cmd)) {
            return this.handleDateTime(cmd);
        } else if (this.isProfileCommand(cmd)) {
            return this.handleProfile(cmd);
        } else if (this.isRemarkCommand(cmd)) {
            return this.handleRemark(cmd);
        } else if (this.isTimetableCommand(cmd)) {
            return this.handleTimetable(cmd);
        } else if (this.isItineraryCommand(cmd)) {
            return this.handleItinerary(cmd);
        } else if (this.isInsuranceCommand(cmd)) {
            return this.handleInsurance(cmd);
        } else if (this.isEMDCommand(cmd)) {
            return this.handleEMD(cmd);
        } else if (this.isMiscCommand(cmd)) {
            return this.handleMisc(cmd);
        } else {
            return this.handleUnrecognized(cmd);
        }
    },

    // Search command handler
    handleSearchCommand: function() {
        return `AMADEUS CRYPTIC COMMAND SEARCH

COMMON COMMAND CATEGORIES:

PNR MANAGEMENT:
RT - Retrieve PNR          ER - End & redisplay
ET - End & transmit        IG - Ignore changes
XE - Cancel element        DL - Delete element

AVAILABILITY & SELLING:
AN - Air availability      SN - Schedule display
SS - Sell segment          SR - Special requests
SM - Seat map              ST - Seat request

PRICING & TICKETING:
FXP - Price itinerary      FQD - Display fares
TTP - Issue ticket         TTM - Issue MCO/EMD
TQT - Display TST          FP - Form of payment

CONTACT & REMARKS:
NM - Name element          AP - Phone contact
RM - General remark        RC - Confidential remark
OS - OSI element           AB - Billing address

QUEUES & SYSTEM:
QT - Queue totals          QS - Start queue
QE - Place on queue        QF - Exit queue
JI - Sign in              JO - Sign out

ENCODING/DECODING:
DC - Country/city codes    DAN - City encoding
DAC - City decoding        DNA - Airline codes
DNS - State codes          DD - Date/time

HOTEL & CAR:
HA - Hotel availability    HL - Hotel list
CA - Car availability      CL - Car location

Type 'HE [command]' for specific help
Type 'GG [topic]' for general information`;
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

    // Additional command type checkers for comprehensive coverage
    isCarCommand: function(cmd) {
        return /^C[AGLRST]/.test(cmd) || /^CR/.test(cmd);
    },

    isDateTimeCommand: function(cmd) {
        return /^DD/.test(cmd) || /^DE/.test(cmd) || /^DF/.test(cmd) || /^DM/.test(cmd) || /^DO/.test(cmd);
    },

    isProfileCommand: function(cmd) {
        return /^P[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/.test(cmd);
    },

    isRemarkCommand: function(cmd) {
        return /^R[CMX]/.test(cmd) || /^AB/.test(cmd) || /^AM/.test(cmd) || /^AI/.test(cmd);
    },

    isTimetableCommand: function(cmd) {
        return /^T[CNAE]/.test(cmd) || /^S[NADEQ]/.test(cmd);
    },

    isItineraryCommand: function(cmd) {
        return /^I[BDEFGHIJKLMNOPQRSTUVWXYZ]/.test(cmd);
    },

    isInsuranceCommand: function(cmd) {
        return /^I[SLVP]/.test(cmd);
    },

    isEMDCommand: function(cmd) {
        return /^E[MW]/.test(cmd) || /^TTM/.test(cmd);
    },

    isMiscCommand: function(cmd) {
        return /^[BFGLMWZ]/.test(cmd) || /^U/.test(cmd) || /^V/.test(cmd);
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

    // Availability handlers - Enhanced to match authentic Amadeus format
    handleAvailability: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        // Parse availability command: AN25DECDXBLON or similar
        const match = cmd.match(/^A[NDA](\d{1,2})(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)([A-Z]{3})([A-Z]{3})(?:\/([A-Z]+))?(\d{4})?/);
        
        if (match) {
            const [, day, month, origin, destination, airline, time] = match;
            const date = day + month;
            const departureTime = time || '0000';

            // Check if cities exist
            if (!DATA.cities[origin] || !DATA.cities[destination]) {
                return 'INVALID CITY CODE';
            }

            const flights = this.generateAmadeusFlights(origin, destination, date);
            this.state.lastAvailability = { origin, destination, date, flights };

            // Generate authentic Amadeus availability display
            let result = `${origin}${day}${month}${destination}/${airline || 'AEK'}\n\n`;
            result += `**  AMADEUS  AVAILABILITY  - ${cmd.substring(0,2)}  **  ${origin}  ${DATA.cities[origin]}\n`;
            result += `${date} ${DATA.cities[origin]} TO ${DATA.cities[destination]}\n\n`;
            
            flights.forEach((flight, index) => {
                const lineNum = (index + 1).toString();
                
                // Generate class availability codes (authentic Amadeus pattern)
                const classAvail = this.generateClassAvailability();
                
                // Format times properly
                const depTime = flight.dep;
                const arrTime = flight.arr;
                
                // Equipment code
                const equipCode = this.getEquipmentCode(flight.aircraft);
                
                // Duration
                const duration = this.calculateFlightDuration(flight.dep, flight.arr);
                
                // First line - flight info with detailed class availability
                result += `${lineNum.padStart(2)}  ${flight.airline} ${flight.flight.toString().padStart(3,'0')}  ${classAvail.line1} ${flight.route}  ${depTime}  ${arrTime} ${equipCode}  ${duration}\n`;
                
                // Second line - additional class availability with proper spacing
                result += `     ${classAvail.line2}\n`;
            });

            return result;
        }

        return 'INVALID AVAILABILITY FORMAT';
    },

    // Generate Amadeus-style flights with realistic data
    generateAmadeusFlights: function(origin, destination, date) {
        // Use the enhanced flight generation from DATA module
        return DATA.flights.generateFlights(origin, destination, date);
    },


    // Generate authentic class availability display
    generateClassAvailability: function() {
        const classes1 = ['D4', 'C4', 'I4', 'O7', 'H7', 'Y7', 'R7'];
        const classes2 = ['X7', 'M7', 'B7', 'U7', 'K7', 'Q7', 'L7', 'T7', 'V7'];
        
        // Randomize availability numbers
        const line1 = classes1.map(cls => {
            const letter = cls[0];
            const avail = Math.floor(Math.random() * 9) + 1;
            return letter + avail;
        }).join(' ');
        
        const line2 = classes2.map(cls => {
            const letter = cls[0];
            const avail = Math.floor(Math.random() * 9) + 1;
            return letter + avail;
        }).join(' ');
        
        return {
            line1: line1,
            line2: '     ' + line2  // Proper indentation
        };
    },

    // Get equipment code in Amadeus format
    getEquipmentCode: function(aircraftType) {
        const equipmentCodes = {
            'A320': 'E0/388',
            'A321': 'E0/388',
            'A330': 'E0/388',
            'A340': 'E0/388',
            'A350': 'E0/388',
            'A380': 'E0/388',
            'B737': 'E0/388',
            'B738': 'E0/388',
            'B777': 'E0/77W',
            'B787': 'E0/388',
            '747': 'E0/388',
            'E90': 'E0/388'
        };
        return equipmentCodes[aircraftType] || 'E0/388';
    },

    // Calculate flight duration
    calculateFlightDuration: function(depTime, arrTime) {
        const depMinutes = parseInt(depTime.substring(0,2)) * 60 + parseInt(depTime.substring(2));
        const arrMinutes = parseInt(arrTime.substring(0,2)) * 60 + parseInt(arrTime.substring(2));
        
        let duration = arrMinutes - depMinutes;
        if (duration < 0) duration += 24 * 60; // Handle overnight flights
        
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        
        return `${hours}:${minutes.toString().padStart(2, '0')}`;
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

        // NM command: NM1SMITH/JOHN MR, NM1HUSSAIN/NASEER MSTR(CHD/12JAN15), NM1HUSSAIN/M MRS(INF/NABIL/18MAY08)
        const nmMatch = cmd.match(/^NM(\d+)(.+)$/);
        if (nmMatch) {
            const [, count, nameString] = nmMatch;
            
            if (!this.state.currentPNR) {
                return 'NO PNR IN WORK AREA';
            }

            // Parse different name formats
            let passengerName = nameString.trim();
            let passengerType = 'ADT';
            let infantName = '';
            let dateOfBirth = '';

            // Check for child with DOB: (CHD/12JAN15)
            const chdMatch = passengerName.match(/\(CHD\/(\d{1,2}[A-Z]{3}\d{2})\)/);
            if (chdMatch) {
                passengerType = 'CHD';
                dateOfBirth = chdMatch[1];
                passengerName = passengerName.replace(/\(CHD\/\d{1,2}[A-Z]{3}\d{2}\)/, '').trim();
            }

            // Check for infant: (INF/NABIL) or (INF/NABIL/18MAY08)
            const infMatch = passengerName.match(/\(INF\/([A-Z]+)(?:\/(\d{1,2}[A-Z]{3}\d{2}))?\)/);
            if (infMatch) {
                passengerType = 'INF';
                infantName = infMatch[1];
                if (infMatch[2]) {
                    dateOfBirth = infMatch[2];
                }
                passengerName = passengerName.replace(/\(INF\/[A-Z]+(?:\/\d{1,2}[A-Z]{3}\d{2})?\)/, '').trim();
            }

            // Check for infant with seat: (INS)
            if (passengerName.includes('(INS)')) {
                passengerType = 'INS';
                passengerName = passengerName.replace(/\(INS\)/, '').trim();
            }

            const passenger = {
                name: passengerName,
                type: passengerType,
                dateOfBirth: dateOfBirth,
                infantName: infantName
            };

            this.state.currentPNR.passengers.push(passenger);

            let response = `NAME ELEMENT ADDED - ${passenger.name}`;
            if (passengerType === 'CHD' && dateOfBirth) {
                response += ` (CHILD - DOB: ${dateOfBirth})`;
            } else if (passengerType === 'INF' && infantName) {
                response += ` (INFANT: ${infantName}`;
                if (dateOfBirth) response += ` - DOB: ${dateOfBirth}`;
                response += ')';
            } else if (passengerType === 'INS') {
                response += ' (INFANT WITH SEAT)';
            }

            return response;
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

    // Car command handlers
    handleCar: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        // CA - Car Availability
        if (cmd.startsWith('CA')) {
            const match = cmd.match(/^CA([A-Z]{3})\d{1,2}(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)/);
            if (match) {
                const [, location, month] = match;
                return `CAR AVAILABILITY - ${location}\n\n1. HERTZ ECONOMY     - USD 45.00\n2. AVIS COMPACT      - USD 52.00\n3. BUDGET FULL SIZE  - USD 68.00\n4. ENTERPRISE LUXURY - USD 95.00`;
            }
            return 'INVALID CAR AVAILABILITY FORMAT';
        }

        // CG - Car Codes
        if (cmd === 'CG') {
            return `CAR CODES\n\nCATEGORY CODES:\nE - ECONOMY\nC - COMPACT\nI - INTERMEDIATE\nS - STANDARD\nF - FULL SIZE\nL - LUXURY\n\nTRANSMISSION:\nM - MANUAL\nA - AUTOMATIC`;
        }

        // CL - Car Location
        if (cmd.startsWith('CL')) {
            const location = cmd.substring(2) || 'NYC';
            return `CAR LOCATIONS - ${location}\n\nHERTZ - 123 MAIN ST\nAVIS - 456 BROADWAY\nBUDGET - 789 FIFTH AVE\nENTERPRISE - 321 PARK AVE`;
        }

        return 'INVALID CAR COMMAND';
    },

    // Date/Time command handlers
    handleDateTime: function(cmd) {
        if (cmd === 'DD') {
            return `CURRENT SYSTEM TIME\n${this.getCurrentDateTime()}`;
        }

        // DD with date
        const dateMatch = cmd.match(/^DD(\d{1,2})(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)(\d{2})?/);
        if (dateMatch) {
            const [, day, month, year] = dateMatch;
            const fullYear = year ? `20${year}` : new Date().getFullYear();
            const date = new Date(`${month} ${day}, ${fullYear}`);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
            return `${day}${month}${year || ''} - ${dayName}`;
        }

        // DD with city
        const cityMatch = cmd.match(/^DD([A-Z]{3})$/);
        if (cityMatch) {
            const city = cityMatch[1];
            const cityTime = new Date().toLocaleTimeString();
            return `LOCAL TIME IN ${city}: ${cityTime}`;
        }

        return 'INVALID DATE/TIME COMMAND';
    },

    // Profile command handlers
    handleProfile: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        // Basic profile commands
        if (cmd.startsWith('PA/')) {
            const profileName = cmd.substring(3);
            return `PROFILE CREATED - ${profileName}`;
        }

        if (cmd.startsWith('PD')) {
            return `PROFILE DISPLAY\nNAME: JOHN SMITH\nCOMPANY: AMADEUS\nPREF AIRLINE: AF\nPREF CLASS: Y`;
        }

        return 'INVALID PROFILE COMMAND';
    },

    // Remark command handlers
    handleRemark: function(cmd) {
        if (!this.state.signedIn || !this.state.currentPNR) {
            return 'NO PNR IN WORK AREA';
        }

        // RC - Confidential Remark
        if (cmd.startsWith('RC ')) {
            const remarkText = cmd.substring(3);
            this.state.currentPNR.remarks.push({
                type: 'RC',
                value: remarkText,
                confidential: true
            });
            return 'CONFIDENTIAL REMARK ADDED';
        }

        // RX - Corporate Remark
        if (cmd.startsWith('RX ')) {
            const remarkText = cmd.substring(3);
            this.state.currentPNR.remarks.push({
                type: 'RX',
                value: remarkText,
                corporate: true
            });
            return 'CORPORATE REMARK ADDED';
        }

        // AB - Billing Address
        if (cmd.startsWith('AB ')) {
            const address = cmd.substring(3);
            this.state.currentPNR.contacts.push({
                type: 'AB',
                value: address
            });
            return 'BILLING ADDRESS ADDED';
        }

        // AM - Mailing Address
        if (cmd.startsWith('AM ')) {
            const address = cmd.substring(3);
            this.state.currentPNR.contacts.push({
                type: 'AM',
                value: address
            });
            return 'MAILING ADDRESS ADDED';
        }

        return 'INVALID REMARK COMMAND';
    },

    // Timetable command handlers
    handleTimetable: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        // TC - Timetable Change
        if (cmd.startsWith('TC')) {
            const cityPair = cmd.substring(2);
            return `TIMETABLE DISPLAY - ${cityPair}\n\nFLT  DAYS  DEP  ARR\nAF123 1234567 0800 1100\nAF456 1234567 1400 1700\nAF789 1234567 2000 2300`;
        }

        return 'TIMETABLE DISPLAYED';
    },

    // Itinerary command handlers
    handleItinerary: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        // IBD - Basic Itinerary Display
        if (cmd === 'IBD') {
            if (!this.state.currentPNR) {
                return 'NO PNR IN WORK AREA';
            }
            return this.generateItinerary(this.state.currentPNR, 'basic');
        }

        // IEP - Extended Itinerary Print
        if (cmd === 'IEP') {
            if (!this.state.currentPNR) {
                return 'NO PNR IN WORK AREA';
            }
            return this.generateItinerary(this.state.currentPNR, 'extended');
        }

        return 'INVALID ITINERARY COMMAND';
    },

    // Insurance command handlers
    handleInsurance: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        if (cmd.startsWith('IS')) {
            return `INSURANCE INFORMATIVE PRICING\n\nTRAVEL GUARD BASIC - USD 25.00\nALLIANZ PREMIUM - USD 45.00\nAXA COMPREHENSIVE - USD 65.00`;
        }

        return 'INVALID INSURANCE COMMAND';
    },

    // EMD command handlers
    handleEMD: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        // EWD - Display EMD
        if (cmd === 'EWD') {
            return 'NO EMD RECORDS FOUND';
        }

        // TTM - Issue EMD
        if (cmd === 'TTM') {
            const emdNumber = '125-' + Math.floor(Math.random() * 10000000000);
            return `EMD ISSUED\nDOCUMENT NUMBER: ${emdNumber}`;
        }

        return 'INVALID EMD COMMAND';
    },

    // Miscellaneous command handlers
    handleMisc: function(cmd) {
        if (!this.state.signedIn) {
            return 'SIGN-IN REQUIRED';
        }

        // BA - Amadeus Interface Record
        if (cmd === 'BA') {
            return 'AIR TRANSMISSION STARTED';
        }

        // BR - Retransmit AIR
        if (cmd === 'BR') {
            return 'AIR RETRANSMISSION COMPLETED';
        }

        // BP - Boarding Pass
        if (cmd === 'BP') {
            return 'BOARDING PASS ISSUED';
        }

        // Various utility commands
        switch (cmd) {
            case 'WRA': return 'PRINT REQUEST SENT';
            case 'LP': return 'PNR LIST DISPLAYED';
            case 'LG': return 'GROUP PNR LIST DISPLAYED';
            case 'FF': return 'FREQUENT FLYER PROCESSED';
            case 'GM': return 'GROUP MANAGEMENT';
            case 'BT': return 'BATCH TRANSACTION';
            case 'UV': return 'UTILITIES MENU';
            case 'VF': return 'VERIFY FUNCTION';
            case 'ZZ': return 'SYSTEM FUNCTION';
            default: return 'FUNCTION PROCESSED';
        }
    },

    // Generate itinerary
    generateItinerary: function(pnr, type) {
        let result = `${type.toUpperCase()} ITINERARY\n`;
        result += `LOCATOR: ${pnr.locator}\n`;
        result += `CREATED: ${pnr.created}\n\n`;

        if (pnr.passengers.length > 0) {
            result += 'PASSENGERS:\n';
            pnr.passengers.forEach((pax, i) => {
                result += `${i + 1}. ${pax.name}\n`;
            });
            result += '\n';
        }

        if (pnr.segments.length > 0) {
            result += 'FLIGHT DETAILS:\n';
            pnr.segments.forEach(seg => {
                result += `${seg.airline} ${seg.flight} - ${seg.date}\n`;
                result += `${seg.route.substring(0,3)} TO ${seg.route.substring(3,6)}\n`;
                result += `DEPART: ${seg.dep} ARRIVE: ${seg.arr}\n`;
                result += `CLASS: ${seg.class} STATUS: ${seg.status}\n\n`;
            });
        }

        if (type === 'extended' && pnr.contacts.length > 0) {
            result += 'CONTACT INFORMATION:\n';
            pnr.contacts.forEach(contact => {
                result += `${contact.type}: ${contact.value}\n`;
            });
        }

        return result;
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
            'CODES': `AMADEUS CODES REFERENCE

COUNTRY CODES:
PK - PAKISTAN          IN - INDIA
US - UNITED STATES     GB - UNITED KINGDOM
FR - FRANCE           DE - GERMANY
AE - UAE              QA - QATAR

AIRLINE CODES:
EK - EMIRATES         QR - QATAR AIRWAYS
AI - AIR INDIA        BA - BRITISH AIRWAYS
LH - LUFTHANSA        AF - AIR FRANCE
TK - TURKISH AIRLINES SQ - SINGAPORE AIRLINES

CITY CODES:
KHI - KARACHI/PK      LHE - LAHORE/PK
ISB - ISLAMABAD/PK    PEW - PESHAWAR/PK
DEL - NEW DELHI/IN    BOM - MUMBAI/IN
DXB - DUBAI/AE        DOH - DOHA/QA
LON - LONDON/GB       PAR - PARIS/FR
NYC - NEW YORK/US     FRA - FRANKFURT/DE`,
            'COUPK': `COUNTRY INFORMATION - PAKISTAN

COUNTRY: PAKISTAN
CODE: PK
CAPITAL: ISLAMABAD (ISB)
CURRENCY: PKR - PAKISTANI RUPEE
TIME ZONE: GMT+5
MAJOR CITIES:
  KHI - KARACHI
  LHE - LAHORE  
  ISB - ISLAMABAD
  PEW - PESHAWAR
  FSD - FAISALABAD
  MLT - MULTAN

AIRLINES:
  PK - PAKISTAN INTERNATIONAL
  ER - SERENE AIR
  PA - AIRBLUE

INTERNATIONAL GATEWAYS:
  KARACHI (KHI)
  LAHORE (LHE)
  ISLAMABAD (ISB)`,
            'WEA LON': DATA.weather.LON || 'LONDON WEATHER\nTEMP: 15C\nCOND: PARTLY CLOUDY\nWIND: 10KM/H W',
            'WEA NYC': DATA.weather.NYC || 'NEW YORK WEATHER\nTEMP: 18C\nCOND: SUNNY\nWIND: 12KM/H SW',
            'WEA PAR': DATA.weather.PAR || 'PARIS WEATHER\nTEMP: 14C\nCOND: OVERCAST\nWIND: 8KM/H NW',
            'WEA DEL': DATA.weather.DEL || 'DELHI WEATHER\nTEMP: 32C\nCOND: CLEAR\nWIND: 5KM/H E',
            'WEA BOM': DATA.weather.BOM || 'MUMBAI WEATHER\nTEMP: 29C\nCOND: HUMID\nWIND: 15KM/H SW',
            'WEA KHI': 'KARACHI WEATHER\nTEMP: 28C\nCOND: CLEAR\nWIND: 10KM/H S',
            'WEA DOH': 'DOHA WEATHER\nTEMP: 35C\nCOND: SUNNY\nWIND: 8KM/H N',
            'WEA DXB': 'DUBAI WEATHER\nTEMP: 38C\nCOND: SUNNY\nWIND: 12KM/H NE'
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
