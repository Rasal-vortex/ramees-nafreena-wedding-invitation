# Ramees & Nafreena --- Wedding E-Invitation

## Project Goal

Build a simple, elegant, fully responsive wedding e-invitation using
**React + Vite + Tailwind CSS**.

The experience starts with a cinematic **9:16 envelope-opening video**.
The user taps the wax-seal area, the video plays, and after the video
finishes, the real React invitation page appears.

The envelope animation itself is already created as an MP4. **Do not
recreate the envelope animation with CSS or Framer Motion.**

------------------------------------------------------------------------

## Tech Stack

-   React
-   Vite
-   Tailwind CSS
-   JavaScript
-   HTML5 Video
-   Optional Framer Motion for subtle page/content animations
-   No backend
-   No authentication
-   No database for this prototype

------------------------------------------------------------------------

## Project Assets

The opening video will be placed at:

``` text
/public/invitation-opening.mp4
```

Future assets:

``` text
/public/images/couple.jpg
/public/images/gallery-1.jpg
/public/images/gallery-2.jpg
/public/images/gallery-3.jpg
/public/images/gallery-4.jpg
/public/music/wedding.mp3
```

The images and music can be added later.

------------------------------------------------------------------------

# 1. Opening Screen

The initial screen should show the wedding envelope video/image inside a
beautiful 9:16 frame.

### Behavior

Before the user starts:

-   Show the closed invitation.
-   Show a subtle message:

**Tap the seal to open**

-   Place an invisible circular clickable hotspot exactly over the round
    wax seal.
-   Only the seal area should start the experience.

When the user taps the seal:

1.  Disable the hotspot.
2.  Hide the instruction text.
3.  Start the MP4 from the beginning.
4.  Let the complete opening animation play.
5.  Do not interrupt the video.
6.  When the video ends, transition to the invitation page.

### Important

Use:

``` jsx
<video
  playsInline
  preload="auto"
  ...
/>
```

The video must remain **true 9:16** and must not be cropped or
distorted.

On desktop:

-   Center the invitation vertically and horizontally.
-   Keep a soft/dark neutral background around the 9:16 video.

On mobile:

-   Let the invitation occupy almost the full viewport.
-   Preserve the original 9:16 ratio.

------------------------------------------------------------------------

# 2. Video-to-Website Transition

The opening video already contains the envelope opening and final flash.

Do not recreate that animation.

When the video fires `onEnded`:

``` text
Opening Video
      ↓
Video ends on white flash
      ↓
Invitation page appears
```

Use a short fade transition so the change from video to webpage feels
seamless.

------------------------------------------------------------------------

# 3. Wedding Configuration

Keep all wedding information inside one configuration object so another
client can easily be created later.

Example:

``` js
const wedding = {
  groom: "Ramees",
  bride: "Nafreena",

  date: "18 October 2026",
  dateTime: "2026-10-18T11:00:00",
  day: "Sunday",
  time: "11:00 AM",

  venue: "Grand Auditorium",
  location: "Chittur",

  mapsUrl: "",

  rsvpWhatsapp: "",

  coupleImage: "/images/couple.jpg",

  music: "/music/wedding.mp3"
};
```

Do not hardcode wedding information throughout the components.

------------------------------------------------------------------------

# 4. Invitation Homepage

After the video finishes, show the main invitation.

Use:

-   Cream/off-white background
-   Elegant gold accents
-   Soft floral aesthetic
-   Premium wedding typography
-   Generous spacing
-   Subtle animations
-   Minimal design

Avoid:

-   Excessive gradients
-   Overly colorful UI
-   Heavy shadows
-   Too many cards
-   Excessive animation

------------------------------------------------------------------------

# 5. Hero Section

Display:

## Ramees

### &

## Nafreena

Then:

**Together with their families**

**request the pleasure of your presence**

Add a placeholder image:

``` text
/images/couple.jpg
```

The image can be replaced later.

Use a gentle fade/slide animation when the section enters the viewport.

------------------------------------------------------------------------

# 6. Countdown Section

Create a live countdown to:

**18 October 2026, 11:00 AM**

Display four values:

``` text
42       08       31       25
DAYS    HOURS   MINUTES  SECONDS
```

The numbers must update every second.

When the countdown reaches zero, replace it with:

**The Wedding Day Has Arrived**

Use the configured `dateTime` value rather than hardcoding the countdown
logic.

------------------------------------------------------------------------

# 7. Wedding Details

Create a simple elegant details section.

Display:

### Sunday, 18 October 2026

### 11:00 AM

### Grand Auditorium

### Chittur

Use small elegant icons for:

-   Date
-   Time
-   Location

Keep this section clean and easy to read on mobile.

------------------------------------------------------------------------

# 8. Gallery

Create a responsive gallery.

Use these placeholders:

``` text
/images/gallery-1.jpg
/images/gallery-2.jpg
/images/gallery-3.jpg
/images/gallery-4.jpg
```

Desktop:

-   Elegant multi-column layout.

Mobile:

-   Two-column or single-column layout depending on screen size.

Add subtle hover effects on desktop.

Images should be easy to replace later.

------------------------------------------------------------------------

# 9. Location Section

Display:

**Grand Auditorium**

**Chittur**

Add:

**View Location**

The button should use:

``` js
wedding.mapsUrl
```

If no URL is configured, keep the button disabled or visually inactive.

------------------------------------------------------------------------

# 10. RSVP Section

Create:

**We would love to celebrate with you**

Button:

**Confirm Attendance**

Use:

``` js
wedding.rsvpWhatsapp
```

The button should open WhatsApp when a valid URL/number is configured.

Keep the RSVP section simple.

------------------------------------------------------------------------

# 11. Background Music

Add a small floating music button at the bottom-right.

Use:

``` text
/music/wedding.mp3
```

The music must respect browser autoplay restrictions.

Do not automatically force audio before user interaction.

Since the user already interacted with the invitation to start the
opening video, music can be started after that interaction if browser
rules permit.

The button should allow:

-   Play
-   Pause
-   Mute
-   Unmute

Keep the control visually subtle.

------------------------------------------------------------------------

# 12. Navigation

Desktop navigation:

``` text
Home | Details | Gallery | Location | RSVP
```

Mobile:

-   Use a small menu button or simple anchor navigation.

Use smooth scrolling.

The navigation should only appear on the actual invitation page, not
during the opening video.

------------------------------------------------------------------------

# 13. Components

Recommended structure:

``` text
src/
├── components/
│   ├── OpeningScreen.jsx
│   ├── Hero.jsx
│   ├── Countdown.jsx
│   ├── WeddingDetails.jsx
│   ├── Gallery.jsx
│   ├── Location.jsx
│   ├── RSVP.jsx
│   ├── MusicButton.jsx
│   └── Navigation.jsx
│
├── data/
│   └── wedding.js
│
├── App.jsx
├── main.jsx
└── index.css
```

------------------------------------------------------------------------

# 14. OpeningScreen Logic

The opening screen should work approximately like this:

``` text
Initial state
     ↓
Video poster / first frame visible
     ↓
User taps seal hotspot
     ↓
isOpening = true
     ↓
video.play()
     ↓
opening animation plays
     ↓
video reaches final white frame
     ↓
onEnded()
     ↓
isInvitationVisible = true
     ↓
OpeningScreen fades out
     ↓
Invitation page fades in
```

The clickable seal should be an invisible circular button positioned
over the seal.

Example concept:

``` jsx
<button
  aria-label="Open invitation"
  className="absolute rounded-full"
  style={{
    width: "90px",
    height: "90px",
    left: "50%",
    top: "68%",
    transform: "translate(-50%, -50%)"
  }}
  onClick={startInvitation}
/>
```

Adjust the position based on the actual video.

Do not show a visible ugly circle around the hotspot.

------------------------------------------------------------------------

# 15. Responsive Requirements

The project must work well at:

-   360px mobile
-   390px mobile
-   430px mobile
-   Tablet
-   Laptop
-   Desktop

The invitation should always feel like a mobile-first wedding invitation
even when viewed on desktop.

Do not allow horizontal scrolling.

------------------------------------------------------------------------

# 16. Accessibility

Include:

-   Proper button labels
-   Alt text for images
-   Keyboard-accessible controls
-   Visible focus states where appropriate
-   Semantic HTML
-   Respect reduced-motion preferences where practical

------------------------------------------------------------------------

# 17. Performance

Optimize for mobile.

Important:

-   Lazy-load gallery images.
-   Do not load unnecessary libraries.
-   Preload the opening video appropriately.
-   Use `object-fit: contain` for the 9:16 opening video.
-   Avoid huge uncompressed images.
-   Use WebP/AVIF for future photos where possible.
-   Keep animations lightweight.

------------------------------------------------------------------------

# 18. Important Design Direction

The overall experience should feel like:

``` text
Luxury physical wedding invitation
             ↓
Digital envelope
             ↓
Cinematic opening
             ↓
Elegant wedding website
```

The website should feel **premium, calm, romantic and minimal**.

The opening video is the visual centerpiece.

After the video, the actual website should remain simple and readable.

------------------------------------------------------------------------

# 19. Future Features

Do not implement these yet, but structure the code so they can be added
later:

-   Google Maps integration
-   WhatsApp RSVP
-   Wedding calendar event download
-   Multiple invitation templates
-   Client-specific invitation URLs
-   Supabase database
-   Admin dashboard
-   Photo upload
-   Music selection
-   Share invitation button
-   Social preview metadata
-   PWA support

------------------------------------------------------------------------

# Final User Flow

``` text
Visitor opens invitation URL
            ↓
9:16 closed envelope appears
            ↓
"Tap the seal to open"
            ↓
Visitor taps the wax seal
            ↓
Opening MP4 plays
            ↓
Envelope opens
            ↓
White flash
            ↓
Real React invitation appears
            ↓
Ramees & Nafreena
            ↓
Wedding date
            ↓
Live countdown
            ↓
Wedding details
            ↓
Gallery
            ↓
Location
            ↓
RSVP
```

## Core Requirement

The opening video and the actual invitation page are **two separate
experiences**.

Do not attempt to recreate the video animation in React.

React is responsible for:

-   Starting the video
-   Detecting video completion
-   Transitioning to the invitation
-   Displaying wedding information
-   Countdown
-   Gallery
-   Location
-   RSVP
-   Music
-   Responsive UI
