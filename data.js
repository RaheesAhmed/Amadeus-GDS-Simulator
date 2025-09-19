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
        'OS': 'AUSTRIAN'
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

    // Sample flight schedules
    flights: {
        generateFlights: function(origin, destination, date) {
            const flights = [];
            const airlines = ['AI', 'BA', 'LH', 'AF', 'KL', 'EK', 'QR', 'TK'];
            const aircraft = ['B737', 'A320', 'B777', 'A330', 'B787'];
            
            for (let i = 0; i < 8; i++) {
                const airline = airlines[Math.floor(Math.random() * airlines.length)];
                const flightNum = Math.floor(Math.random() * 999) + 100;
                const aircraft_type = aircraft[Math.floor(Math.random() * aircraft.length)];
                const depTime = String(600 + (i * 150)).padStart(4, '0');
                const arrTime = String(parseInt(depTime) + 280 + (Math.floor(Math.random() * 200))).padStart(4, '0');
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

    // SSR codes (Special Service Requests)
    ssr_codes: {
        'VGML': 'VEGETARIAN MEAL',
        'NVML': 'NON-VEGETARIAN MEAL',
        'AVML': 'ASIAN VEGETARIAN MEAL',
        'HNML': 'HINDU MEAL',
        'JNML': 'JAIN MEAL',
        'MOML': 'MOSLEM MEAL',
        'WCHR': 'WHEELCHAIR REQUIRED',
        'WCHC': 'WHEELCHAIR - CABIN SEAT',
        'DEAF': 'DEAF PASSENGER',
        'BLIND': 'BLIND PASSENGER',
        'PETC': 'PET IN CABIN',
        'AVIH': 'ANIMAL IN HOLD',
        'UMNR': 'UNACCOMPANIED MINOR'
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
