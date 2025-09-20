// Amadeus GDS Simulator - Data Module
// Comprehensive data for realistic simulation including Pakistan and India

const DATA = {

    // Airlines with real codes
    airlines: {
        'AA': 'AMERICAN AIRLINES',
        'AF': 'AIR FRANCE',
        'AI': 'AIR INDIA',
        'BA': 'BRITISH AIRWAYS',
        'EK': 'EMIRATES',
        'LH': 'LUFTHANSA',
        'QR': 'QATAR AIRWAYS',
        'SQ': 'SINGAPORE',
        'TK': 'TURKISH',
        'UA': 'UNITED',
        'DL': 'DELTA',
        'KL': 'KLM',
        '9W': 'JET AIRWAYS',
        '6E': 'INDIGO',
        'UK': 'VISTARA',
        'SG': 'SPICEJET',
        'G8': 'GO AIR',
        'IB': 'IBERIA',
        'LX': 'SWISS',
        'OS': 'AUSTRIAN',
        'PIA': 'PAK INTERNATIONAL'
    },

    // Countries - comprehensive list
    countries: {
        'US': 'UNITED STATES',
        'GB': 'UNITED KINGDOM',
        'FR': 'FRANCE',
        'DE': 'GERMANY',
        'IT': 'ITALY',
        'ES': 'SPAIN',
        'NL': 'NETHERLANDS',
        'BE': 'BELGIUM',
        'AT': 'AUSTRIA',
        'CH': 'SWITZERLAND',
        'SE': 'SWEDEN',
        'NO': 'NORWAY',
        'DK': 'DENMARK',
        'FI': 'FINLAND',
        'IE': 'IRELAND',
        'IN': 'INDIA',
        'SG': 'SINGAPORE',
        'TH': 'THAILAND',
        'MY': 'MALAYSIA',
        'JP': 'JAPAN',
        'KR': 'SOUTH KOREA',
        'AU': 'AUSTRALIA',
        'CA': 'CANADA',
        'AE': 'U.A.E.',
        'QA': 'QATAR',
        'HK': 'HONG KONG',
        'PK': 'PAKISTAN',
        'SA': 'SAUDI ARABIA',
        'OM': 'OMAN',
        'KW': 'KUWAIT',
        'BH': 'BAHRAIN',
        'EG': 'EGYPT',
        'TR': 'TURKEY',
        'RU': 'RUSSIA',
        'CN': 'CHINA',
        'ID': 'INDONESIA',
        'BD': 'BANGLADESH',
        'LK': 'SRI LANKA',
        'NP': 'NEPAL',
        'AF': 'AFGHANISTAN',
        'IR': 'IRAN',
        'IQ': 'IRAQ',
        'SY': 'SYRIA',
        'JO': 'JORDAN',
        'LB': 'LEBANON',
        'IL': 'ISRAEL',
        'KE': 'KENYA',
        'ET': 'ETHIOPIA',
        'ZA': 'SOUTH AFRICA',
        'NG': 'NIGERIA',
        'GH': 'GHANA',
        'MA': 'MOROCCO',
        'TN': 'TUNISIA',
        'DZ': 'ALGERIA',
        'LY': 'LIBYA',
        'SD': 'SUDAN',
        'MX': 'MEXICO',
        'BR': 'BRAZIL',
        'AR': 'ARGENTINA',
        'CL': 'CHILE',
        'CO': 'COLOMBIA',
        'PE': 'PERU',
        'VE': 'VENEZUELA',
        'UY': 'URUGUAY',
        'PY': 'PARAGUAY',
        'BO': 'BOLIVIA',
        'EC': 'ECUADOR'
    },

    // Cities with comprehensive Pakistan and India coverage
    cities: {
        // Major world cities
        'NYC': 'NEW YORK/US',
        'LON': 'LONDON/GB',
        'PAR': 'PARIS/FR',
        'FRA': 'FRANKFURT/DE',
        'AMS': 'AMSTERDAM/NL',
        'MAD': 'MADRID/ES',
        'BCN': 'BARCELONA/ES',
        'ROM': 'ROME/IT',
        'MIL': 'MILAN/IT',
        'MUN': 'MUNICH/DE',
        'VIE': 'VIENNA/AT',
        'ZUR': 'ZURICH/CH',
        'BRU': 'BRUSSELS/BE',
        'DUB': 'DUBLIN/IE',
        'STO': 'STOCKHOLM/SE',
        'HEL': 'HELSINKI/FI',
        'OSL': 'OSLO/NO',
        'CPH': 'COPENHAGEN/DK',

        // Indian sub-continent - comprehensive coverage
        'DEL': 'NEW DELHI/IN',
        'BOM': 'MUMBAI/IN',
        'BLR': 'BENGALURU/IN',
        'MAA': 'CHENNAI/IN',
        'CCU': 'KOLKATA/IN',
        'HYD': 'HYDERABAD/IN',
        'GOI': 'GOA/IN',
        'COK': 'KOCHI/IN',
        'TRV': 'TRIVANDRUM/IN',
        'AMD': 'AHMEDABAD/IN',
        'PNQ': 'PUNE/IN',
        'JAI': 'JAIPUR/IN',
        'IXC': 'CHANDIGARH/IN',
        'LHE': 'LAHORE/PK',
        'KHI': 'KARACHI/PK',
        'ISB': 'ISLAMABAD/PK',
        'PEW': 'PESHAWAR/PK',
        'FSD': 'FAISALABAD/PK',
        'MLT': 'MULTAN/PK',
        'GWD': 'GWADAR/PK',
        'SKZ': 'SUKKUR/PK',
        'DAC': 'DHAKA/BD',
        'CMB': 'COLOMBO/LK',
        'KTM': 'KATHMANDU/NP',

        // Asia-Pacific
        'SIN': 'SINGAPORE/SG',
        'BKK': 'BANGKOK/TH',
        'KUL': 'KUALA LUMPUR/MY',
        'HKG': 'HONG KONG/HK',
        'NRT': 'TOKYO-NARITA/JP',
        'ICN': 'SEOUL-KOREA/KR',
        'SYD': 'SYDNEY/AU',
        'MEL': 'MELBOURNE/AU',
        'PER': 'PERTH/AU',
        'AKL': 'AUCKLAND/NZ',
        'MNL': 'MANILA/PH',
        'CGK': 'JAKARTA/ID',
        'DXB': 'DUBAI/AE',
        'DOH': 'DOHA/QA',
        'AUH': 'ABU DHABI/AE',

        // Americas
        'JFK': 'NEW YORK JFK/US',
        'LAX': 'LOS ANGELES/US',
        'ORD': 'CHICAGO/US',
        'MIA': 'MIAMI/US',
        'DFW': 'DALLAS/US',
        'ATL': 'ATLANTA/US',
        'SEA': 'SEATTLE/US',
        'SFO': 'SAN FRANCISCO/US',
        'YVR': 'VANCOUVER/CA',
        'YYZ': 'TORONTO/CA',
        'YUL': 'MONTREAL/CA',
        'GRU': 'SAO PAULO/BR',
        'EZE': 'BUENOS AIRES/AR',
        'LIM': 'LIMA/PE',
        'BOG': 'BOGOTA/CO',
        'MEX': 'MEXICO CITY/MX',
        'JNB': 'JOHANNESBURG/ZA',
        'CAI': 'CAIRO/EG',

        // Middle-East / Central Asia
        'TLV': 'TEL AVIV/IL',
        'AMM': 'AMMAN/JO',
        'BEY': 'BEIRUT/LB',
        'RUH': 'RIYADH/SA',
        'JED': 'JEDDAH/SA',
        'DMM': 'DAMMAM/SA',
        'KWI': 'KUWAIT/KW',
        'BAH': 'BAHRAIN/BH',
        'MCT': 'MUSCAT/OM',
        'THR': 'TEHRAN/IR',
        'IKA': 'TEHRAN-IKA/IR'
    },

    // Aircraft types
    aircraft: {
        'B737': 'BOEING 737-800/189 PAX',
        'B738': 'BOEING 737-800/189 PAX',
        'B777': 'BOEING 777-300ER/396 PAX',
        'B787': 'BOEING 787-9/290 PAX',
        'A320': 'AIRBUS A320/180 PAX',
        'A321': 'AIRBUS A321/220 PAX',
        'A330': 'AIRBUS A330-300/295 PAX',
        'A340': 'AIRBUS A340-600/380 PAX',
        'A350': 'AIRBUS A350-900/325 PAX',
        'A380': 'AIRBUS A380-800/525 PAX',
        '747': 'BOEING 747-400/416 PAX',
        'ATR': 'ATR 72-600/78 PAX',
        'E90': 'EMBRAER 190/100 PAX',
        'DH4': 'DASH 8-400/78 PAX'
    },

    // Currency rates (base USD)
    currencies: {
        'USD': 1.00,
        'EUR': 0.92,
        'GBP': 0.79,
        'INR': 83.50,
        'CAD': 1.35,
        'AUD': 1.52,
        'JPY': 149.80,
        'SGD': 1.34,
        'AED': 3.67,
        'QAR': 3.64,
        'CHF': 0.88,
        'SEK': 10.85,
        'NOK': 10.92,
        'DKK': 6.85,
        'CNY': 7.24,
        'KRW': 1340,
        'BRL': 5.15,
        'ZAR': 18.90
    },

    // Hotel chains
    hotels: {
        'HI': 'HILTON',
        'MA': 'MARRIOTT',
        'IC': 'INTERCONTINENTAL',
        'SH': 'SHERATON',
        'RD': 'RADISSON',
        'HY': 'HYATT',
        'AC': 'ACCOR',
        'BW': 'BEST WESTERN',
        'IH': 'HOLIDAY INN',
        'CN': 'CARLSON'
    },

    // Car companies
    cars: {
        'ZE': 'HERTZ',
        'ZI': 'AVIS',
        'ZL': 'ALAMO',
        'ZR': 'BUDGET',
        'ET': 'ENTERPRISE',
        'ZD': 'DOLLAR',
        'ZT': 'THRIFTY',
        'EP': 'EUROPCAR',
        'SX': 'SIXT'
    },

    // Enhanced flight schedules for authentic Amadeus display
    flights: {
        generateFlights: function(origin, destination, date) {
            const flights = [];
            const airlines = this.getRouteAirlines(origin, destination);
            const aircraft = ['A320', 'A321', 'A330', 'B737', 'B738', 'B777', 'B787', 'E90', 'ATR'];
            
            // Generate realistic flight times based on route
            const baseTimes = this.getRealisticFlightTimes(origin, destination);
            
            for (let i = 0; i < Math.min(10, baseTimes.length); i++) {
                const airline = airlines[Math.floor(Math.random() * airlines.length)];
                const flightNum = this.generateRealisticFlightNumber(airline);
                const aircraft_type = aircraft[Math.floor(Math.random() * aircraft.length)];
                const depTime = baseTimes[i];
                const arrTime = this.calculateRealisticArrival(depTime, origin, destination);
                const avail = Math.floor(Math.random() * 9) + 1;
                
                flights.push({
                    line: i + 1,
                    airline: airline,
                    flight: flightNum,
                    class: 'Y',
                    date: date,
                    route: origin + destination,
                    dep: depTime,
                    arr: arrTime,
                    aircraft: aircraft_type,
                    avail: avail
                });
            }
            return flights;
        },

        // Get realistic airlines for specific routes
        getRouteAirlines: function(origin, destination) {
            const routeAirlines = {
                'DXBLON': ['EK', 'BA', 'VS'],
                'LONDXB': ['EK', 'BA', 'VS'],
                'DELLON': ['AI', 'BA', 'VS', '6E'],
                'LONDEL': ['AI', 'BA', 'VS', '6E'],
                'BOMLON': ['AI', 'BA', 'VS', '9W'],
                'LONBOM': ['AI', 'BA', 'VS', '9W'],
                'KHIDXB': ['EK', 'PK', 'G9'],
                'DXBKHI': ['EK', 'PK', 'G9'],
                'LHEKHI': ['PK', 'AI', 'EK'],
                'KHILHE': ['PK', 'AI', 'EK'],
                'ISBKHI': ['PK', 'AI'],
                'KHIISB': ['PK', 'AI'],
                'DELBOM': ['AI', '6E', 'UK', 'SG', 'G8'],
                'BOMDEL': ['AI', '6E', 'UK', 'SG', 'G8']
            };
            
            const route = origin + destination;
            return routeAirlines[route] || ['AI', 'EK', 'BA', 'LH', 'AF', 'KL', 'TK', 'QR'];
        },

        // Generate realistic flight times for routes
        getRealisticFlightTimes: function(origin, destination) {
            const routeTimes = {
                'DXBLON': ['0200', '0310', '0740', '0745', '0815', '0840', '1210', '1425', '1430', '1820'],
                'LONDXB': ['0640', '1140', '1350', '1610', '1825', '2130'],
                'DELLON': ['0130', '0230', '0930', '1345', '1545', '2015'],
                'BOMLON': ['0145', '0315', '0945', '1400', '1600', '2030'],
                'KHIDXB': ['0130', '0300', '0545', '0930', '1215', '1500', '1745', '2030'],
                'LHEKHI': ['0200', '0430', '0700', '1030', '1300', '1530', '1800', '2130'],
                'DELBOM': ['0600', '0800', '1000', '1200', '1400', '1600', '1800', '2000', '2200'],
                'DEFAULT': ['0600', '0900', '1200', '1500', '1800', '2100']
            };
            
            const route = origin + destination;
            return routeTimes[route] || routeTimes['DEFAULT'];
        },

        // Generate realistic flight numbers by airline
        generateRealisticFlightNumber: function(airline) {
            const ranges = {
                'EK': [1, 999],
                'AI': [100, 999],
                'BA': [1, 999],
                'VS': [1, 99],
                '6E': [1000, 6999],
                'UK': [900, 999],
                'SG': [1, 999],
                'G8': [100, 399],
                '9W': [100, 799],
                'PK': [200, 899],
                'QR': [1, 999],
                'TK': [1, 999],
                'LH': [400, 799],
                'AF': [1, 999],
                'KL': [1, 999]
            };
            
            const range = ranges[airline] || [100, 999];
            return Math.floor(Math.random() * (range[1] - range[0])) + range[0];
        },

        // Calculate realistic arrival times based on route
        calculateRealisticArrival: function(depTime, origin, destination) {
            const flightDurations = {
                'DXBLON': 7 * 60 + 30,  // 7.5 hours
                'LONDXB': 7 * 60 + 45,  // 7.75 hours
                'DELLON': 8 * 60 + 45,  // 8.75 hours
                'LONDEL': 8 * 60 + 30,  // 8.5 hours
                'BOMLON': 9 * 60 + 15,  // 9.25 hours
                'LONBOM': 8 * 60 + 45,  // 8.75 hours
                'KHIDXB': 2 * 60 + 30,  // 2.5 hours
                'DXBKHI': 2 * 60 + 15,  // 2.25 hours
                'LHEKHI': 1 * 60 + 30,  // 1.5 hours
                'KHILHE': 1 * 60 + 30,  // 1.5 hours
                'ISBKHI': 1 * 60 + 45,  // 1.75 hours
                'KHIISB': 1 * 60 + 45,  // 1.75 hours
                'DELBOM': 2 * 60 + 15,  // 2.25 hours
                'BOMDEL': 2 * 60 + 15,  // 2.25 hours
                'DEFAULT': 5 * 60       // 5 hours default
            };
            
            const route = origin + destination;
            const duration = flightDurations[route] || flightDurations['DEFAULT'];
            
            const depHour = parseInt(depTime.substring(0, 2));
            const depMin = parseInt(depTime.substring(2));
            const depTotalMin = depHour * 60 + depMin;
            
            let arrTotalMin = depTotalMin + duration;
            
            // Handle day rollover
            if (arrTotalMin >= 24 * 60) {
                arrTotalMin -= 24 * 60;
            }
            
            const arrHour = Math.floor(arrTotalMin / 60);
            const arrMin = arrTotalMin % 60;
            
            return arrHour.toString().padStart(2, '0') + arrMin.toString().padStart(2, '0');
        }
    },

    // Sample PNRs
    pnrs: {
        'TESTPNR': {
            locator: 'TESTPNR',
            created: '15NOV24',
            status: 'HK',
            passengers: [
                { name: 'SMITH/JOHN MR', type: 'ADT' }
            ],
            segments: [
                {
                    line: 1,
                    airline: 'AI',
                    flight: '131',
                    class: 'Y',
                    date: '20NOV',
                    route: 'DELBOM',
                    dep: '1430',
                    arr: '1645',
                    status: 'HK',
                    pax: 1
                }
            ],
            contacts: [
                { type: 'AP', value: '91-11-12345678-TRAVEL AGENCY' }
            ],
            remarks: [],
            received_from: 'MR SMITH',
            ticketing: 'TKTL25NOV/1800'
        },
        
        'ABC123': {
            locator: 'ABC123',
            created: '16NOV24',
            status: 'HK',
            passengers: [
                { name: 'JONES/MARY MRS', type: 'ADT' },
                { name: 'JONES/PETER MR', type: 'ADT' }
            ],
            segments: [
                {
                    line: 1,
                    airline: 'BA',
                    flight: '142',
                    class: 'J',
                    date: '25NOV',
                    route: 'LHRJFK',
                    dep: '1030',
                    arr: '1345',
                    status: 'HK',
                    pax: 2
                }
            ],
            contacts: [
                { type: 'AP', value: '44-20-12345678-LONDON TRAVEL' },
                { type: 'APE', value: 'MARY.JONES@EMAIL.COM' }
            ],
            remarks: [],
            received_from: 'MRS JONES',
            ticketing: 'TKOK'
        }
    },

    // Sample fares with Pakistan routes
    fares: {
        generateFare: function(origin, destination, class_type = 'Y') {
            const base_fares = {
                'DELBOM': { Y: 8500, J: 25000, F: 45000 },
                'DELLON': { Y: 45000, J: 125000, F: 225000 },
                'BOMLON': { Y: 48000, J: 130000, F: 235000 },
                'LHRJFK': { Y: 55000, J: 185000, F: 350000 },
                'FRALOM': { Y: 25000, J: 75000, F: 135000 },
                'KHILHE': { Y: 12000, J: 35000, F: 65000 },
                'DEWPEW': { Y: 15000, J: 42000, F: 78000 },
                'ISBKHI': { Y: 18000, J: 48000, F: 85000 }
            };
            
            const route = origin + destination;
            const fare_data = base_fares[route] || { Y: 35000, J: 95000, F: 175000 };
            const base_fare = fare_data[class_type] || fare_data.Y;
            
            const taxes = Math.floor(base_fare * 0.15);
            const total = base_fare + taxes;
            
            return {
                base_fare: base_fare,
                taxes: taxes,
                total: total,
                currency: 'INR',
                validating_carrier: 'AI',
                fare_basis: class_type + 'OWRT'
            };
        }
    },

    // Weather data including Pakistan
    weather: {
        'LON': 'LONDON: 15C PARTLY CLOUDY, WIND 12KM/H NW, VISIBILITY 10KM',
        'NYC': 'NEW YORK: 18C CLEAR SKIES, WIND 8KM/H SW, VISIBILITY 15KM',
        'PAR': 'PARIS: 12C OVERCAST, WIND 15KM/H W, VISIBILITY 8KM',
        'DEL': 'NEW DELHI: 28C HAZY, WIND 5KM/H E, VISIBILITY 4KM',
        'BOM': 'MUMBAI: 32C PARTLY CLOUDY, WIND 18KM/H SW, VISIBILITY 12KM',
        'DXB': 'DUBAI: 35C CLEAR, WIND 12KM/H NE, VISIBILITY 15KM',
        'KHI': 'KARACHI: 30C HOT, WIND 8KM/H S, VISIBILITY 12KM',
        'LHE': 'LAHORE: 25C CLEAR, WIND 6KM/H W, VISIBILITY 15KM',
        'ISB': 'ISLAMABAD: 22C PLEASANT, WIND 4KM/H N, VISIBILITY 18KM'
    },

    // Queue counts simulation
    queues: {
        general: 15,
        ticketing: 8,
        departure: 3,
        waitlist: 12,
        schedule_change: 5
    },

    // SSR codes (Special Service Requests) - Complete Amadeus List
    ssr_codes: {
        // Meal Codes
        'AVML': 'VEGETARIAN HINDU MEAL',
        'BBML': 'BABY MEAL',
        'BLML': 'BLAND MEAL',
        'CHML': 'CHILD MEAL',
        'DBML': 'DIABETIC MEAL',
        'FPML': 'FRUIT PLATTER MEAL',
        'GFML': 'GLUTEN FREE MEAL',
        'HNML': 'HINDU NON-VEGETARIAN MEAL',
        'JPML': 'JAPANESE MEAL',
        'KSML': 'KOSHER MEAL',
        'LCML': 'LOW CALORIE MEAL',
        'LFML': 'LOW FAT MEAL',
        'LSML': 'LOW SALT MEAL',
        'MOML': 'MUSLIM MEAL',
        'NLML': 'NO LACTOSE MEAL',
        'ORML': 'ORIENTAL MEAL',
        'PRML': 'LOW PROTEIN MEAL',
        'RVML': 'VEGETARIAN RAW MEAL',
        'SFML': 'SEAFOOD MEAL',
        'SPML': 'SPECIAL MEAL (SPECIFY)',
        'VGML': 'VEGETARIAN VEGAN MEAL',
        'VJML': 'VEGETARIAN JAIN MEAL',
        'VLML': 'VEGETARIAN LACTO-OVO MEAL',
        'VOML': 'VEGETARIAN ORIENTAL MEAL',
        
        // Wheelchair Assistance
        'WCHR': 'WHEELCHAIR FOR RAMP',
        'WCHC': 'WHEELCHAIR ALL WAY TO SEAT',
        'WCHS': 'WHEELCHAIR UP/DOWN STEPS',
        'WCBW': 'WHEELCHAIR WET CELL BATTERY',
        'WCBD': 'WHEELCHAIR DRY CELL BATTERY',
        'WCMP': 'WHEELCHAIR MANUAL POWER',
        'WCOB': 'WHEELCHAIR ON BOARD',
        
        // Passenger Assistance
        'BLND': 'BLIND PASSENGER',
        'DEAF': 'DEAF PASSENGER',
        'DPNA': 'DISABLED PASSENGER ASSISTANCE',
        'MEDA': 'MEDICAL CASE',
        'STCR': 'STRETCHER PASSENGER',
        'UMNR': 'UNACCOMPANIED MINOR',
        
        // Special Equipment/Services
        'AVIH': 'ANIMAL IN HOLD',
        'PETC': 'PET IN CABIN',
        'BSCT': 'BASSINET/CARRY COT',
        'CBBG': 'CABIN BAGGAGE',
        'EXST': 'EXTRA SEAT',
        'BULK': 'BULKY BAGGAGE',
        'BIKE': 'BICYCLE',
        'SPEQ': 'SPORTS EQUIPMENT',
        'XBAG': 'EXCESS BAGGAGE',
        
        // Travel Document/Special Handling
        'DOCS': 'TRAVEL DOCUMENTS',
        'DOCO': 'TRAVEL DOCUMENT OTHER',
        'DOCA': 'DESTINATION ADDRESS',
        'CTCM': 'CONTACT MOBILE',
        'CTCE': 'CONTACT EMAIL',
        'CTCH': 'CONTACT HOME',
        'CTCR': 'CONTACT RESIDENCE',
        
        // Frequent Flyer
        'FQTV': 'FREQUENT FLYER ACCRUAL',
        'FQTR': 'FREQUENT FLYER REDEMPTION',
        'FQTU': 'FREQUENT FLYER UPGRADE',
        'FQTS': 'FREQUENT FLYER SERVICE',
        
        // Special Categories
        'CHLD': 'CHILD',
        'INFT': 'INFANT',
        'GRPF': 'GROUP FARE',
        'GRPS': 'GROUP PASSENGERS',
        'TWOV': 'TRANSIT WITHOUT VISA',
        'DEPU': 'DEPORTEE UNACCOMPANIED',
        'DEPA': 'DEPORTEE ACCOMPANIED',
        'COUR': 'COMMERCIAL COURIER',
        'LANG': 'LANGUAGE SPOKEN'
    },

    // Fare rules
    fare_rules: {
        'YOWRT': {
            'AP': 'ADVANCE PURCHASE: 7 DAYS BEFORE DEPARTURE',
            'PE': 'PENALTIES: CHANGE 2500 INR, CANCEL 5000 INR',
            'CO': 'COMBINATIONS: PERMITTED WITH SAME FARE TYPE ONLY',
            'MX': 'MAXIMUM STAY: 1 MONTH',
            'MN': 'MINIMUM STAY: NONE',
            'SU': 'SURCHARGES: WEEKEND 500 INR'
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
}
