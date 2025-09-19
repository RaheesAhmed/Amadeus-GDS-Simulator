// Amadeus GDS Simulator - Main Application
// Handles UI interactions and system initialization

class AmadeusSimulator {
    constructor() {
        this.terminal = null;
        this.output = null;
        this.input = null;
        this.prompt = null;
        this.statusElements = {};
        
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeTerminal());
        } else {
            this.initializeTerminal();
        }
    }

    initializeTerminal() {
        // Get DOM elements
        this.terminal = document.getElementById('terminal');
        this.output = document.getElementById('output');
        this.input = document.getElementById('command-input');
        this.prompt = document.getElementById('prompt');

        // Initialize COMMANDS system (loads stored PNRs)
        COMMANDS.init();

        // Initialize display
        this.displayWelcomeMessage();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Focus input
        this.input.focus();
    }

    setupEventListeners() {
        // Handle command input
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.processCommand(e.target.value);
                e.target.value = '';
            }
        });

        // Handle special key combinations
        this.input.addEventListener('keydown', (e) => {
            // Ctrl+C - Clear current input
            if (e.ctrlKey && e.key === 'c') {
                e.preventDefault();
                e.target.value = '';
                this.appendOutput('');
            }
            
            // Ctrl+L - Clear screen
            if (e.ctrlKey && e.key === 'l') {
                e.preventDefault();
                this.clearScreen();
            }
        });

        // Keep input focused
        document.addEventListener('click', () => {
            if (!window.getSelection().toString()) {
                this.input.focus();
            }
        });

        // Handle window focus
        window.addEventListener('focus', () => {
            this.input.focus();
        });

        // Prevent context menu on right click
        this.terminal.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }

    displayWelcomeMessage() {
        const welcome = `
`; //DO NOT ADD ANY MESSAGE HERE WE WANT CLEAN UI
        this.appendOutput(welcome);
    }

    processCommand(commandText) {
        if (!commandText.trim()) return;
        
        // Echo command with prompt
        this.appendOutput(`${this.prompt.textContent}${commandText}`);
        
        // Process command through COMMANDS module
        try {
            const result = COMMANDS.process(commandText);
            
            // Special handling for IG command (should clear screen)
            if (commandText.trim().toUpperCase() === 'IG') {
                this.clearScreen();
                return;
            }
            
            if (result) {
                this.appendOutput(result);
            }
            
            // Update status after command
            this.updateStatusBar();
            this.updateWorkArea();
            
        } catch (error) {
            console.error('Command processing error:', error);
            this.appendOutput('SYSTEM ERROR - COMMAND PROCESSING FAILED', 'error');
        }
        
        // Scroll to bottom
        this.scrollToBottom();
    }

    appendOutput(text, className = '') {
        if (!text && text !== '') return;
        
        const lines = text.toString().split('\n');
        
        lines.forEach(line => {
            const div = document.createElement('div');
            div.textContent = line || ' '; // Empty line if line is empty
            
            if (className) {
                div.className = className;
            }
            
            // Apply styling based on content
            this.applyContentStyling(div, line);
            
            this.output.appendChild(div);
        });
    }

    applyContentStyling(element, content) {
        const text = content.toUpperCase();
        
        // Error messages
        if (text.includes('ERROR') || text.includes('INVALID') || 
            text.includes('NOT FOUND') || text.includes('NOT RECOGNIZED')) {
            element.classList.add('error');
        }
        
        // Success messages
        else if (text.includes('ACCEPTED') || text.includes('SOLD') || 
                 text.includes('ADDED') || text.includes('ISSUED') || 
                 text.includes('CREATED')) {
            element.classList.add('success');
        }
        
        // Warning messages
        else if (text.includes('REQUIRED') || text.includes('WARNING')) {
            element.classList.add('warning');
        }
        
        // Flight information
        else if (/\d+\s+[A-Z]{2}\d+\s+[YJF]\s+\d+[A-Z]{3}/.test(text)) {
            element.classList.add('flight-info');
        }
        
        // Price information
        else if (text.includes('TOTAL') || text.includes('FARE') || 
                 text.includes('TAXES') || /[A-Z]{3}\s+\d+/.test(text)) {
            element.classList.add('price-info');
        }
        
        // PNR elements
        else if (text.includes('LOCATOR') || text.includes('PASSENGER') || 
                 text.includes('SEGMENT') || text.includes('CONTACT')) {
            element.classList.add('pnr-element');
        }
        
        // Headers and important info
        else if (text.startsWith('---') || text.includes('DISPLAY') || 
                 text.includes('AVAILABILITY') || text.includes('QUEUE TOTALS')) {
            element.classList.add('header-text');
        }
    }

    clearScreen() {
        this.output.innerHTML = '';
    }

    scrollToBottom() {
        this.output.scrollTop = this.output.scrollHeight;
    }

    updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        const dateString = now.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }).toUpperCase();
        
        if (this.statusElements.time) {
            this.statusElements.time.textContent = `${dateString} ${timeString}`;
        }
    }

    updateWorkArea() {
        const workArea = COMMANDS.state.workArea || 'A';
        if (this.statusElements.workArea) {
            this.statusElements.workArea.textContent = `WORK AREA: ${workArea}`;
        }
        
        // Update prompt
        if (this.prompt) {
            this.prompt.textContent = `${workArea}:`;
        }
    }

    updateStatusBar() {
        // User status
        if (this.statusElements.userStatus) {
            if (COMMANDS.state.signedIn) {
                this.statusElements.userStatus.textContent = `SIGNED IN: ${COMMANDS.state.userId}`;
                this.statusElements.userStatus.className = 'success';
            } else {
                this.statusElements.userStatus.textContent = 'NOT SIGNED IN';
                this.statusElements.userStatus.className = '';
            }
        }
        
        // PNR status
        if (this.statusElements.pnrStatus) {
            if (COMMANDS.state.currentPNR) {
                this.statusElements.pnrStatus.textContent = `PNR: ${COMMANDS.state.currentPNR.locator}`;
                this.statusElements.pnrStatus.className = 'pnr-element';
            } else {
                this.statusElements.pnrStatus.textContent = 'NO PNR';
                this.statusElements.pnrStatus.className = '';
            }
        }
        
        // Queue status
        if (this.statusElements.queueStatus) {
            if (COMMANDS.state.queueMode) {
                this.statusElements.queueStatus.textContent = `QUEUE: ${COMMANDS.state.currentQueue}`;
                this.statusElements.queueStatus.className = 'queue-display';
            } else {
                this.statusElements.queueStatus.textContent = 'NO QUEUE';
                this.statusElements.queueStatus.className = '';
            }
        }
    }

    // Public methods for external access
    executeCommand(command) {
        this.input.value = command;
        this.processCommand(command);
        this.input.value = '';
    }

    focusInput() {
        if (this.input) {
            this.input.focus();
        }
    }
}

// Utility functions for enhanced functionality
class AmadeusUtils {
    static formatFlightTime(time) {
        if (time.length === 4) {
            return time.substring(0, 2) + ':' + time.substring(2);
        }
        return time;
    }

    static formatDate(date) {
        // Convert DDMMMYY to DD-MMM-YYYY
        if (date.length >= 5) {
            const day = date.substring(0, 2);
            const month = date.substring(2, 5);
            const year = date.length > 5 ? date.substring(5) : new Date().getFullYear().toString().substr(-2);
            return `${day}-${month}-20${year}`;
        }
        return date;
    }

    static validateCityCode(code) {
        return DATA.cities.hasOwnProperty(code.toUpperCase());
    }

    static validateAirlineCode(code) {
        return DATA.airlines.hasOwnProperty(code.toUpperCase());
    }

    static generateRandomFlight() {
        const cities = Object.keys(DATA.cities);
        const airlines = Object.keys(DATA.airlines);
        const origin = cities[Math.floor(Math.random() * cities.length)];
        let destination = cities[Math.floor(Math.random() * cities.length)];
        
        // Ensure origin and destination are different
        while (destination === origin) {
            destination = cities[Math.floor(Math.random() * cities.length)];
        }
        
        const airline = airlines[Math.floor(Math.random() * airlines.length)];
        const flightNum = Math.floor(Math.random() * 999) + 100;
        
        return {
            airline: airline,
            flightNumber: flightNum,
            origin: origin,
            destination: destination,
            route: origin + destination
        };
    }
}

// Initialize the application when DOM is ready
let amadeusApp;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        amadeusApp = new AmadeusSimulator();
    });
} else {
    amadeusApp = new AmadeusSimulator();
}

// Global functions for console access (useful for testing)
window.AmadeusSimulator = AmadeusSimulator;
window.AmadeusUtils = AmadeusUtils;
window.executeCommand = (cmd) => {
    if (amadeusApp) {
        amadeusApp.executeCommand(cmd);
    }
};

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && amadeusApp) {
        amadeusApp.focusInput();
    }
});

// Prevent accidental page navigation
window.addEventListener('beforeunload', (e) => {
    if (COMMANDS.state.currentPNR) {
        e.preventDefault();
        e.returnValue = 'You have an active PNR. Are you sure you want to leave?';
        return e.returnValue;
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Alt + H for help
    if (e.altKey && e.key === 'h') {
        e.preventDefault();
        if (amadeusApp) {
            amadeusApp.executeCommand('HE');
        }
    }
    
    // Alt + S for sign in
    if (e.altKey && e.key === 's') {
        e.preventDefault();
        if (amadeusApp) {
            amadeusApp.input.value = 'JI1234AA/AS';
            amadeusApp.input.focus();
        }
    }
    
    // Alt + Q for queue totals
    if (e.altKey && e.key === 'q') {
        e.preventDefault();
        if (amadeusApp) {
            amadeusApp.executeCommand('QT');
        }
    }
});

console.log('Amadeus GDS Simulator loaded successfully!');
console.log('Available global functions: executeCommand(cmd), AmadeusSimulator, AmadeusUtils');
console.log('Keyboard shortcuts: Alt+H (Help), Alt+S (Sign in), Alt+Q (Queue totals), Ctrl+L (Clear screen)');
