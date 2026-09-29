# Ramees & Nafreena — Wedding E-Invitation

An elegant, luxury wedding e-invitation web application built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🌟 Key Features

1. **Cinematic Envelope Opening (9:16)**
   - Starts with a closed wax-sealed wedding envelope.
   - Circular interactive hotspot positioned directly over the wax seal.
   - Displays *"Tap the seal to open"*.
   - Plays the full `invitation-opening.mp4` video on tap, with a white flash and smooth fade-in to the invitation website.
   - Desktop and mobile optimized with true 9:16 aspect ratio preservation.

2. **Centralized Wedding Configuration (`src/data/wedding.js`)**
   - Easily customizable for any client without touching component code.
   - Groom, Bride, Date, Time, Venue, Location, Google Maps URL, WhatsApp RSVP, Schedule, and Quotes.

3. **Homepage Sections**
   - **Hero Section**: Couple names (*Ramees & Nafreena*), family blessing text, luxury arch-framed portrait, and floating date badge.
   - **Live Countdown**: Real-time ticker counting down to `18 October 2026, 11:00 AM` across Days, Hours, Minutes, and Seconds. Transitions to *"The Wedding Day Has Arrived"* once reached.
   - **Wedding Details & Timeline**: Program highlights (Nikah, Feast, Felicitations) + One-click *"Add to Google Calendar"*.
   - **Location**: Venue details with direct *"View Location"* Google Maps navigation.
   - **RSVP**: Interactive RSVP with attending/wishes options, guest count selector, celebratory confetti burst, and direct WhatsApp confirmation.
   - **Desktop & Mobile Navigation**: Smooth-scrolling anchor menu with mobile dropdown.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5174/](http://localhost:5174/) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```text
├── public/
│   ├── invitation-opening.mp4    # Envelope opening video
│   ├── envelope-poster.jpg       # Instant envelope preview poster
│   ├── images/
│   │   ├── couple.jpg            # Couple hero portrait
├── src/
│   ├── components/
│   │   ├── OpeningScreen.jsx     # 9:16 video player & wax seal hotspot
│   │   ├── Navigation.jsx        # Desktop & mobile nav bar
│   │   ├── Hero.jsx              # Couple hero & invitation wording
│   │   ├── Countdown.jsx         # Live countdown timer
│   │   ├── WeddingDetails.jsx    # Ceremony schedule & calendar export
│   │   ├── Location.jsx          # Venue location & maps link
│   │   ├── RSVP.jsx              # WhatsApp RSVP & confetti
│   ├── data/
│   │   └── wedding.js            # Central wedding configuration
│   ├── App.jsx                   # Main layout and screen transition
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Tailwind CSS & luxury styling tokens
├── index.html                    # Fonts, SEO, and viewport settings
├── vite.config.js                # Vite & Tailwind configuration
└── package.json
```
