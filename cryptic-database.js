// Amadeus Cryptic Commands Database
// Complete reference for all Amadeus cryptic entries

const CRYPTIC_DATABASE = {
    // Comprehensive command patterns and descriptions
    commands: {
        // Search commands
        'search': 'Display search options and help',
        
        // Billing Address (AB commands)
        'AB': {
            pattern: /^AB$/,
            description: 'Add billing address',
            handler: 'handleBillingAddress'
        },
        'AB_WITH_INFO': {
            pattern: /^AB\s+.+/,
            description: 'Add billing address with details',
            handler: 'handleBillingAddress'
        },

        // Air Display Change (AC commands)
        'ACAA': {
            pattern: /^ACAA$/,
            description: 'Availability by arrival time',
            handler: 'handleDisplayChange'
        },
        'ACAD': {
            pattern: /^ACAD$/,
            description: 'Availability by departure time',
            handler: 'handleDisplayChange'
        },
        'ACAE': {
            pattern: /^ACAE$/,
            description: 'Availability by elapsed time',
            handler: 'handleDisplayChange'
        },
        'ACAN': {
            pattern: /^ACAN$/,
            description: 'Availability by neutral order',
            handler: 'handleDisplayChange'
        },

        // Accounting Information (AI commands)
        'AI': {
            pattern: /^AI/,
            description: 'Add accounting information (Amadeus Invoice)',
            handler: 'handleAccountingInfo'
        },

        // Mailing Address (AM commands)
        'AM': {
            pattern: /^AM/,
            description: 'Add mailing address',
            handler: 'handleMailingAddress'
        },

        // Air Availability (AN commands)
        'AN_BASIC': {
            pattern: /^AN\d{1,2}(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[A-Z]{3}[A-Z]{3}/,
            description: 'Display air availability',
            handler: 'handleAvailability'
        },
        'AN_WITH_OPTIONS': {
            pattern: /^AN\d{1,2}(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[A-Z]{3}[A-Z]{3}.+/,
            description: 'Display air availability with options',
            handler: 'handleAvailability'
        },

        // Contact Information (AP commands)
        'AP_PHONE': {
            pattern: /^AP\s+.+/,
            description: 'Add/modify PNR contact element',
            handler: 'handleContact'
        },
        'APA': {
            pattern: /^APA-.+/,
            description: 'Agency phone number',
            handler: 'handleContact'
        },
        'APB': {
            pattern: /^APB-.+/,
            description: 'Business phone number',
            handler: 'handleContact'
        },
        'APH': {
            pattern: /^APH-.+/,
            description: 'Home phone number',
            handler: 'handleContact'
        },
        'APE': {
            pattern: /^APE-.+/,
            description: 'Email address',
            handler: 'handleContact'
        },
        'APF': {
            pattern: /^APF-.+/,
            description: 'Fax number',
            handler: 'handleContact'
        },
        'APM': {
            pattern: /^APM-.+/,
            description: 'Mobile phone number',
            handler: 'handleContact'
        },

        // Auxiliary Segments (AU, CU, HU, etc.)
        'AU': {
            pattern: /^AU.+/,
            description: 'Add air-taxi auxiliary segment',
            handler: 'handleAuxiliarySegment'
        },
        'CU': {
            pattern: /^CU.+/,
            description: 'Add car auxiliary segment',
            handler: 'handleAuxiliarySegment'
        },
        'HU': {
            pattern: /^HU.+/,
            description: 'Add hotel auxiliary segment',
            handler: 'handleAuxiliarySegment'
        },
        'TU': {
            pattern: /^TU.+/,
            description: 'Add tour auxiliary segment',
            handler: 'handleAuxiliarySegment'
        },
        'RU': {
            pattern: /^RU.+/,
            description: 'Add memo auxiliary segment',
            handler: 'handleAuxiliarySegment'
        },

        // Amadeus Interface Record (BA, BR commands)
        'BA': {
            pattern: /^BA/,
            description: 'Transmit Amadeus Interface Record (AIR)',
            handler: 'handleAIR'
        },
        'BR': {
            pattern: /^BR/,
            description: 'Retransmit Amadeus Interface Records',
            handler: 'handleAIR'
        },

        // Boarding Pass (BP, BPA commands)
        'BP': {
            pattern: /^BP/,
            description: 'Issue boarding pass',
            handler: 'handleBoardingPass'
        },
        'BPA': {
            pattern: /^BPA/,
            description: 'Issue ATB boarding pass only',
            handler: 'handleBoardingPass'
        },

        // Car Availability (CA commands)
        'CA': {
            pattern: /^CA[A-Z]{3}\d{1,2}(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)/,
            description: 'Display car availability',
            handler: 'handleCarAvailability'
        },

        // Car Codes (CG commands)
        'CG': {
            pattern: /^CG/,
            description: 'Display car codes',
            handler: 'handleCarCodes'
        },

        // Car Location (CL commands)
        'CL': {
            pattern: /^CL/,
            description: 'Display car location list',
            handler: 'handleCarLocation'
        },

        // Encode/Decode commands
        'DAN': {
            pattern: /^DAN\s*.+/,
            description: 'Find code for a location name',
            handler: 'handleEncoding'
        },
        'DAC': {
            pattern: /^DAC\s*.+/,
            description: 'Decode a location code',
            handler: 'handleEncoding'
        },
        'DC': {
            pattern: /^DC\s*.+/,
            description: 'Find country code, currency, citizen codes',
            handler: 'handleEncoding'
        },
        'DNS': {
            pattern: /^DNS\s*.+/,
            description: 'Decode a state',
            handler: 'handleEncoding'
        },
        'DNA': {
            pattern: /^DNA\s*.+/,
            description: 'Encode/decode airline',
            handler: 'handleEncoding'
        },

        // Date/Time Display (DD commands)
        'DD': {
            pattern: /^DD/,
            description: 'Display dates, days, times',
            handler: 'handleDateTime'
        },

        // Credit Card Check (DE commands)
        'DE': {
            pattern: /^DE/,
            description: 'Check credit card',
            handler: 'handleCreditCard'
        },

        // Delete PNR Element (DL commands)
        'DL': {
            pattern: /^DL\d+/,
            description: 'Delete PNR element',
            handler: 'handleDeleteElement'
        },

        // Minimum Connection Time (DM commands)
        'DM': {
            pattern: /^DM/,
            description: 'Display flight Minimum Connection Time (MCT)',
            handler: 'handleMCT'
        },

        // Flight Information (DO commands)
        'DO': {
            pattern: /^DO/,
            description: 'Display flight information',
            handler: 'handleFlightInfo'
        },

        // EMD Commands (EWD, EWA, etc.)
        'EWD': {
            pattern: /^EWD/,
            description: 'Display EMD record',
            handler: 'handleEMD'
        },
        'EWA': {
            pattern: /^EWA/,
            description: 'EMD management entries for Airline Offices',
            handler: 'handleEMD'
        },

        // End Transaction (ER, ET, EF commands)
        'ER': {
            pattern: /^ER$/,
            description: 'End the transaction and redisplay the PNR',
            handler: 'handleEndTransaction'
        },
        'ET': {
            pattern: /^ET$/,
            description: 'End the transaction',
            handler: 'handleEndTransaction'
        },
        'EF': {
            pattern: /^EF$/,
            description: 'File the PNR after splitting a party',
            handler: 'handleEndTransaction'
        },

        // Fare Commands (FD, FXP, FQD, etc.)
        'FD': {
            pattern: /^FD/,
            description: 'Add fare discount',
            handler: 'handleFareDiscount'
        },
        'FXP': {
            pattern: /^FXP/,
            description: 'Price itinerary',
            handler: 'handleFarePricing'
        },
        'FXB': {
            pattern: /^FXB/,
            description: 'Display/apply low fares (Amadeus Best Pricer)',
            handler: 'handleFarePricing'
        },
        'FXA': {
            pattern: /^FXA/,
            description: 'Display available lower fares',
            handler: 'handleFarePricing'
        },
        'FQD': {
            pattern: /^FQD/,
            description: 'Display fare',
            handler: 'handleFareDisplay'
        },

        // Form of Payment (FP commands)
        'FP': {
            pattern: /^FP/,
            description: 'Specify form of payment',
            handler: 'handleFormOfPayment'
        },

        // General Information (GG commands)
        'GG': {
            pattern: /^GG/,
            description: 'Display Amadeus Information Pages',
            handler: 'handleGeneralInfo'
        },

        // Hotel Commands (HA, HF, HI, etc.)
        'HA': {
            pattern: /^HA/,
            description: 'Display hotel availability',
            handler: 'handleHotelAvailability'
        },
        'HF': {
            pattern: /^HF/,
            description: 'Display hotel features',
            handler: 'handleHotelFeatures'
        },
        'HI': {
            pattern: /^HI/,
            description: 'Display room availability',
            handler: 'handleHotelInventory'
        },
        'HL': {
            pattern: /^HL/,
            description: 'Display hotel location list',
            handler: 'handleHotelLocation'
        },
        'HR': {
            pattern: /^HR/,
            description: 'Display hotel rates',
            handler: 'handleHotelRates'
        },
        'HS': {
            pattern: /^HS/,
            description: 'Book hotel segment',
            handler: 'handleHotelSell'
        },

        // Itinerary (IBD, IEP commands)
        'IBD': {
            pattern: /^IBD/,
            description: 'Display a plain-text itinerary',
            handler: 'handleItinerary'
        },
        'IEP': {
            pattern: /^IEP/,
            description: 'Print a graphical itinerary',
            handler: 'handleItinerary'
        },

        // Ignore (IG command)
        'IG': {
            pattern: /^IG$/,
            description: 'Ignore',
            handler: 'handleIgnore'
        },

        // Insurance (IS, IL commands)
        'IS': {
            pattern: /^IS/,
            description: 'Display insurance informative pricing for PNR',
            handler: 'handleInsurance'
        },

        // Sign In/Out (JI, JO, JB commands)
        'JI': {
            pattern: /^JI[A-Z0-9]+\/[A-Z]+$/,
            description: 'Sign in',
            handler: 'handleSignIn'
        },
        'JO': {
            pattern: /^JO$/,
            description: 'Sign out',
            handler: 'handleSignIn'
        },
        'JB': {
            pattern: /^JB$/,
            description: 'Redisplay sign-in screen',
            handler: 'handleSignIn'
        },

        // List PNRs (LP commands)
        'LP': {
            pattern: /^LP/,
            description: 'List PNRs by flight',
            handler: 'handleListPNRs'
        },

        // Name Element (NM commands)
        'NM': {
            pattern: /^NM\d+/,
            description: 'Create name element',
            handler: 'handleNameElement'
        },

        // Option Elements (OP commands)
        'OP': {
            pattern: /^OP/,
            description: 'Create PNR queue option',
            handler: 'handleOptionElement'
        },

        // OSI Elements (OS commands)
        'OS': {
            pattern: /^OS/,
            description: 'Create OSI element',
            handler: 'handleOSIElement'
        },

        // Profile Commands (PA, PC, PD, etc.)
        'PA': {
            pattern: /^PA/,
            description: 'Create profile',
            handler: 'handleProfile'
        },

        // Queue Commands (QA, QC, QS, etc.)
        'QA': {
            pattern: /^QA/,
            description: 'Add/modify a queue',
            handler: 'handleQueueManagement'
        },
        'QC': {
            pattern: /^QC/,
            description: 'Display/reset queue counts',
            handler: 'handleQueueCount'
        },
        'QS': {
            pattern: /^QS/,
            description: 'Start/browse queue',
            handler: 'handleQueueStart'
        },
        'QT': {
            pattern: /^QT$/,
            description: 'Display queue count total',
            handler: 'handleQueueTotal'
        },
        'QE': {
            pattern: /^QE/,
            description: 'Place PNR/message on queue',
            handler: 'handleQueuePlace'
        },
        'QF': {
            pattern: /^QF$/,
            description: 'Exit queue',
            handler: 'handleQueueExit'
        },

        // Remarks (RC, RM, RX commands)
        'RC': {
            pattern: /^RC/,
            description: 'Add confidential remark to PNR',
            handler: 'handleConfidentialRemark'
        },
        'RM': {
            pattern: /^RM/,
            description: 'Add general remark to PNR',
            handler: 'handleGeneralRemark'
        },
        'RX': {
            pattern: /^RX/,
            description: 'Add corporate remark to PNR',
            handler: 'handleCorporateRemark'
        },

        // PNR Retrieval (RT commands)
        'RT': {
            pattern: /^RT/,
            description: 'Display partial PNR / Retrieve PNR',
            handler: 'handleRetrievePNR'
        },

        // Schedule Commands (SN, SA, SD, SE)
        'SN': {
            pattern: /^SN/,
            description: 'Display air schedules (neutral)',
            handler: 'handleScheduleDisplay'
        },
        'SA': {
            pattern: /^SA/,
            description: 'Schedule by arrival time',
            handler: 'handleScheduleDisplay'
        },
        'SD': {
            pattern: /^SD/,
            description: 'Schedule by departure time',
            handler: 'handleScheduleDisplay'
        },
        'SE': {
            pattern: /^SE/,
            description: 'Schedule by elapsed time',
            handler: 'handleScheduleDisplay'
        },

        // Sell Commands (SS commands)
        'SS_SHORT': {
            pattern: /^SS\d+[A-Z]\d+$/,
            description: 'Sell air segment (short sell)',
            handler: 'handleSellSegment'
        },
        'SS_LONG': {
            pattern: /^SS[A-Z]{2}\d+[A-Z]\d{1,2}(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[A-Z]{6}/,
            description: 'Sell air segment (long sell)',
            handler: 'handleSellSegment'
        },

        // Seat Requests (ST commands)
        'ST': {
            pattern: /^ST/,
            description: 'Request seat',
            handler: 'handleSeatRequest'
        },

        // Seat Map (SM commands)
        'SM': {
            pattern: /^SM/,
            description: 'Display seat map',
            handler: 'handleSeatMap'
        },

        // Special Service Requests (SR commands)
        'SR': {
            pattern: /^SR/,
            description: 'Create SSR element',
            handler: 'handleSSRElement'
        },

        // Timetable (TN, TC commands)
        'TN': {
            pattern: /^TN/,
            description: 'Display timetable',
            handler: 'handleTimetable'
        },

        // Ticketing (TTP, TTM commands)
        'TTP': {
            pattern: /^TTP/,
            description: 'Issue paper ticket / Issue e-ticket',
            handler: 'handleTicketing'
        },
        'TTM': {
            pattern: /^TTM/,
            description: 'Issue an MCO / Issue an EMD',
            handler: 'handleMiscDoc'
        },

        // TST Commands (TQT, TTC, etc.)
        'TQT': {
            pattern: /^TQT/,
            description: 'Display TST',
            handler: 'handleTST'
        },

        // Cancel Commands (XE, XI)
        'XE': {
            pattern: /^XE/,
            description: 'Cancel PNR element',
            handler: 'handleCancelElement'
        },
        'XI': {
            pattern: /^XI$/,
            description: 'Cancel whole itinerary',
            handler: 'handleCancelItinerary'
        }
    },

    // Quick reference lookup
    quickLookup: {
        // Common command prefixes
        'A': ['AN (availability)', 'AP (phone)', 'AI (accounting)', 'AB (billing)', 'AM (mailing)'],
        'B': ['BA (AIR transmit)', 'BR (AIR retransmit)', 'BP (boarding pass)'],
        'C': ['CA (car avail)', 'CG (car codes)', 'CL (car location)'],
        'D': ['DAN (encode)', 'DAC (decode)', 'DC (country)', 'DD (date/time)', 'DL (delete)'],
        'E': ['ER (end/redisplay)', 'ET (end transmit)', 'EF (file PNR)'],
        'F': ['FXP (price)', 'FQD (fare display)', 'FP (form payment)'],
        'G': ['GG (general info)'],
        'H': ['HA (hotel avail)', 'HF (hotel features)', 'HL (hotel list)', 'HR (hotel rates)'],
        'I': ['IBD (itinerary)', 'IG (ignore)', 'IS (insurance)'],
        'J': ['JI (sign in)', 'JO (sign out)', 'JB (sign-in screen)'],
        'L': ['LP (list PNRs)'],
        'N': ['NM (name element)'],
        'O': ['OP (option)', 'OS (OSI)'],
        'P': ['PA (profile)'],
        'Q': ['QT (queue totals)', 'QS (start queue)', 'QC (queue count)', 'QE (place queue)'],
        'R': ['RT (retrieve)', 'RM (remark)', 'RC (confidential)', 'RX (corporate)'],
        'S': ['SS (sell)', 'SR (SSR)', 'SM (seat map)', 'SN (schedule)', 'ST (seat request)'],
        'T': ['TTP (ticket)', 'TTM (MCO/EMD)', 'TQT (TST)', 'TN (timetable)'],
        'X': ['XE (cancel element)', 'XI (cancel itinerary)']
    },

    // Command categories
    categories: {
        'PNR_MANAGEMENT': ['RT', 'ER', 'ET', 'IG', 'EF', 'XE', 'XI', 'DL'],
        'AVAILABILITY': ['AN', 'SN', 'SA', 'SD', 'SE'],
        'SELLING': ['SS', 'ST', 'SR'],
        'PRICING': ['FXP', 'FXB', 'FXA', 'FQD', 'TQT'],
        'TICKETING': ['TTP', 'TTM'],
        'QUEUES': ['QT', 'QS', 'QC', 'QE', 'QF', 'QA'],
        'PROFILES': ['PA', 'PC', 'PD'],
        'ENCODING': ['DAN', 'DAC', 'DC', 'DNS', 'DNA'],
        'HOTEL': ['HA', 'HF', 'HL', 'HR', 'HS', 'HI'],
        'CAR': ['CA', 'CG', 'CL'],
        'CONTACT': ['AP', 'AB', 'AM'],
        'REMARKS': ['RM', 'RC', 'RX', 'OS'],
        'SYSTEM': ['JI', 'JO', 'JB', 'GG', 'DD']
    },

    // Help text for major command groups
    helpText: {
        'PNR': `PNR MANAGEMENT COMMANDS:
RT - Retrieve PNR by locator
RT/NAME - Retrieve by name  
ER - End and redisplay PNR
ET - End and transmit PNR
IG - Ignore PNR changes
XE# - Cancel element number #
DL# - Delete element number #`,

        'AVAILABILITY': `AVAILABILITY COMMANDS:
AN20NOVDELBOM - Air availability
SN20NOVDELBOM - Schedule display
AA - Availability by arrival time
AD - Availability by departure time
AE - Availability by elapsed time`,

        'SELLING': `SELLING COMMANDS:
SS1Y2 - Sell 1 seat Y class line 2
NM1SMITH/JOHN MR - Name element
AP phone number - Add phone
SR VGML - Special service request`,

        'PRICING': `PRICING COMMANDS:
FXP - Price itinerary
FQD - Fare display
TQT - Display TST
FP - Form of payment`,

        'TICKETING': `TICKETING COMMANDS:
TTP - Issue ticket
TTM - Issue MCO/EMD
TK - Ticketing arrangements`,

        'QUEUES': `QUEUE COMMANDS:
QT - Queue totals
QS50C1 - Start queue 50 category 1
QE50C1 - Place on queue
QF - Exit queue`,

        'HELP': `HELP COMMANDS:
HE - Main help
HE command - Help on specific command
GG topic - General information
search - Search cryptic codes`
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CRYPTIC_DATABASE;
}
