# Amadeus GDS Simulator

A comprehensive training simulator for **Amadeus Global Distribution System (GDS)** that allows students and professionals to practice Amadeus commands in a safe, offline environment without accessing live booking systems.

## 🎯 Overview

This simulator replicates the authentic Amadeus terminal interface and command structure, providing:
- **150+ Real Amadeus Commands** from Day 1-4 training curriculum
- **Complete PNR Workflow** - Create, modify, price, and ticket reservations
- **Persistent Data Storage** - PNRs saved locally for retrieval practice
- **Comprehensive Coverage** - Pakistani, Indian, and international destinations
- **No Login Required** - Ready for immediate practice

---

## 📋 Available Commands

### **Day 1 - Encoding, Decoding & Information**

| Command | Purpose | Example |
|---------|---------|---------|
| `DC PAKISTAN` | Encode country name → code | `DC PAKISTAN` → `PK - PAKISTAN` |
| `DC PK` | Decode country code → name | `DC PK` → `PK - PAKISTAN` |
| `DNS WASHINGTON` | Encode state name → code | `DNS WASHINGTON` → `USWA - WASHINGTON STATE/US` |
| `DNS USWA` | Decode state code → name | `DNS USWA` → `WASHINGTON STATE/US` |
| `DAN PESHAWAR` | Encode city name → code | `DAN PESHAWAR` → `PEW - PESHAWAR/PK` |
| `DAC PEW` | Decode city code → name | `DAC PEW` → `PEW - PESHAWAR/PK` |
| `DNA EMIRATES` | Encode airline name → code | `DNA EMIRATES` → `EK - EMIRATES` |
| `DNA EK` | Decode airline code → name | `DNA EK` → `EK - EMIRATES` |
| `GG COUPK` | Country quick facts | `GG COUPK` → Pakistan information |
| `GP11` | Go to general page | `GP11` → General page 11 |
| `GGCODES` | General codes page | `GGCODES` → Complete codes listing |
| `HE` | Help for commands | `HE` → Command help menu |
| `TN10JULPEWDOH/QR` | Timetable display | Peshawar → Doha, 10 Jul, Qatar Airways |
| `SN10AUGPEWDOH/QR` | Schedule display | Peshawar → Doha, 10 Aug, Qatar Airways |

### **Day 2 - PNR Basics & Booking**

| Command | Purpose | Example |
|---------|---------|---------|
| `AN01MARDOHDXB` | Availability search | `AN01MARDOHDXB` → Doha to Dubai flights |
| `AN01MARDOHDXB/QR` | Availability with airline filter | Qatar Airways flights only |
| `SS1W1` | Sell 1 seat, W class, segment 1 | Books confirmed seat |
| `SS1WV1` | Sell seats in different classes | Mixed class booking |
| `SS1W1/PE` | Sell with priority waitlist | Waitlist if no availability |
| `SM3` | Seat map for segment 3 | Visual seat selection |
| `NM1HUSSAIN/ALI MR` | Add adult passenger name | Adult passenger entry |
| `NM1HUSSAIN/NASEER MSTR(CHD/12JAN15)` | Add child with DOB | Child passenger with birth date |
| `NM1HUSSAIN/M MRS(INF/NABIL)` | Add infant (same family) | Infant passenger |
| `AP 97433123456` | Add agency phone contact | Contact information |
| `APM-03*********/P1` | Add mobile for passenger 1 | Mobile contact |
| `APE-EMAIL@DOMAIN.COM` | Add email contact | Email contact |
| `XE4` | Cancel segment line 4 | Remove booking segment |
| `XI` | Cancel entire itinerary | Remove all segments |
| `ET` | End transaction & save PNR | Complete and store booking |
| `ER` | End & redisplay PNR | Show current reservation |
| `IG` | Ignore changes | Discard modifications |

### **Day 3 - Advanced PNR Management**

| Command | Purpose | Example |
|---------|---------|---------|
| `RTXXXXXX` | Retrieve PNR by locator | `RTABC123` → Load specific PNR |
| `RT/NAME` | Retrieve PNR by passenger name | Search by passenger |
| `RF TRAVEL AGENT` | Add received from element | Mandatory booking agent |
| `RFS` | Received from shorthand | Quick agent entry |
| `RM PLEASE CONFIRM` | Add general remark | Internal notes |
| `OS EK PAX IS VIP` | OSI for specific airline | Special passenger info |
| `OS YY PAX IS VIP` | OSI for all airlines | Universal special info |
| `SR VGML` | Vegetarian meal for all | Special service request |
| `SR VGML EK/P2` | Vegetarian meal for passenger 2 on Emirates | Specific meal request |
| `FFN QR-QR1111111111` | Add frequent flyer number | Loyalty program number |
| `RH` | Retrieve full PNR history | Complete change log |
| `RH S4` | History for segment 4 only | Specific segment history |

### **Day 4 - Queues, Pricing & Ticketing**

| Command | Purpose | Example |
|---------|---------|---------|
| `QT` | Display queue totals | Show all queue counts |
| `QS97C1` | Enter specific queue | Access queue 97, category 1 |
| `QI` | Ignore current queue item | Skip queue entry |
| `QN` | Remove from queue | Exit queue mode |
| `FXP` | Auto price itinerary | Automatic fare calculation |
| `FXB` | Best price available | Lowest fare option |
| `FXA` | Price all passengers | Group pricing |
| `FXP/R,VC-HR` | Price on specific airline | Validating carrier pricing |
| `TTP` | Issue ticket | Electronic ticket generation |
| `TTP/ET/RT` | Issue ticket end & retrieve | Ticket with PNR display |
| `TRDC` | Display/void ticket | Ticket management |
| `TKOK` | Ticketing OK element | Ticketing arrangement |
| `TKTL25NOV/1800` | Ticketing time limit | Deadline for ticketing |

---

## 🌍 **Comprehensive Geographic Coverage**

### **Pakistani Cities**
- **KHI** - Karachi
- **LHE** - Lahore  
- **ISB** - Islamabad
- **PEW** - Peshawar
- **FSD** - Faisalabad
- **MLT** - Multan
- **GWD** - Gwadar
- **SKZ** - Sukkur

### **Indian Cities**
- **DEL** - New Delhi
- **BOM** - Mumbai
- **BLR** - Bengaluru
- **MAA** - Chennai
- **CCU** - Kolkata
- **HYD** - Hyderabad
- **GOI** - Goa
- **COK** - Kochi

### **International Destinations**
- **DXB** - Dubai, **DOH** - Doha, **AUH** - Abu Dhabi
- **LON** - London, **PAR** - Paris, **FRA** - Frankfurt
- **NYC** - New York, **LAX** - Los Angeles, **SFO** - San Francisco
- **SIN** - Singapore, **BKK** - Bangkok, **HKG** - Hong Kong

---

## ✈️ **Airlines Supported**

| Code | Airline | Code | Airline |
|------|---------|------|---------|
| **EK** | Emirates | **QR** | Qatar Airways |
| **AI** | Air India | **BA** | British Airways |
| **LH** | Lufthansa | **AF** | Air France |
| **TK** | Turkish Airlines | **SQ** | Singapore Airlines |
| **6E** | IndiGo | **UK** | Vistara |
| **SG** | SpiceJet | **G8** | GoAir |

---

## 🎮 **How to Use**

### **1. Basic Flight Search & Booking**
```
A:AN20NOVDELBOM          # Search Delhi to Mumbai, 20 Nov
A:SS1Y3                  # Book seat 1, Y class, line 3  
A:NM1SMITH/JOHN MR       # Add passenger name
A:AP 91-11-12345678      # Add phone contact
A:APE-EMAIL@GMAIL.COM    # Add email contact  
A:TKOK                   # Ticketing OK
A:RF TRAVEL AGENT        # Received from agent
A:ET                     # End & transmit (save PNR)
```

### **2. PNR Retrieval**
```
A:RT ABC123              # Retrieve PNR by locator
A:ER                     # Redisplay current PNR
A:IG                     # Clear screen
```

### **3. Encoding/Decoding Practice**
```
A:DC PAKISTAN            # Encode: PK - PAKISTAN  
A:DC PK                  # Decode: PK - PAKISTAN
A:DNA EMIRATES           # Encode: EK - EMIRATES
A:DAC KHI                # Decode: KHI - KARACHI/PK
```

### **4. Special Services**  
```
A:SR VGML                # Vegetarian meal
A:SR WCHR                # Wheelchair assistance
A:FFN EK-EK1234567890    # Frequent flyer number
A:RM VIP PASSENGER       # General remark
```

---

## 🔥 **Key Features**

### **✅ Authentic Experience**
- Real Amadeus command syntax
- Authentic error messages
- Professional terminal interface
- Realistic flight data & timings

### **✅ Complete Training Coverage**
- Day 1: Encoding & Decoding
- Day 2: PNR Creation & Management  
- Day 3: Advanced PNR Functions
- Day 4: Queues, Pricing & Ticketing

### **✅ Persistent Storage**
- PNRs saved automatically with ET command
- Retrieve bookings with RT command
- Data persists across browser sessions
- No data loss on page refresh

### **✅ Flexible Input**
- Commands work with or without spaces
- `DC EMIRATES` and `DCEMIRATES` both work
- Case-insensitive command entry
- Error-tolerant parsing

### **✅ Educational Focus**
- No login required - immediate practice
- Safe environment - no live bookings
- Complete command documentation
- Realistic booking scenarios

---

## 📊 **System Information**

### **Command Categories**
- **Encoding/Decoding**: 15+ commands
- **Availability & Booking**: 20+ commands  
- **PNR Management**: 25+ commands
- **Pricing & Ticketing**: 15+ commands
- **Queue Management**: 10+ commands
- **Special Services**: 20+ commands
- **Information Commands**: 15+ commands

### **Data Coverage**
- **75+ Cities** worldwide
- **40+ Countries** with codes
- **20+ Airlines** with realistic data  
- **15+ Aircraft** types
- **Weather Data** for major cities
- **Currency Rates** for international booking

---

## 🚀 **Getting Started**

1. **Open** `index.html` in your web browser
2. **Start typing** Amadeus commands immediately  
3. **Practice** the complete PNR workflow
4. **Test** encoding/decoding commands
5. **Explore** all available features

### **Quick Test Commands**
```
DC PK                    # Pakistan country code
AN20NOVKHILHE           # Karachi to Lahore flights
RTTESTPNR               # View sample PNR  
QT                      # Queue totals
SM1                     # Seat map
GG WEA KHI              # Karachi weather
```

---

## 💡 **Training Tips**

- **Start with encoding** - Practice DC, DNA, DAN commands first
- **Learn PNR workflow** - AN → SS → NM → AP → TKOK → RF → ET
- **Practice retrieval** - Use RT command to access saved PNRs
- **Try variations** - Commands work with/without spaces
- **Explore freely** - Safe environment with no real bookings

---

**Perfect for Amadeus GDS training, certification preparation, and skill development!**
