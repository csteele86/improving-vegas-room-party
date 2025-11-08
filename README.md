# Improving Vegas Room Party

A multi-year event website for hosting Vegas room parties with RSVP functionality and drink menus.

## Project Overview

This repository contains two versions of the Vegas Room Party website:
- **2024 Version**: Simple static announcement page with animated background
- **2025 Version**: Full-featured RSVP system with backend integration and interactive drink menu

## Project Structure

```
improving-vegas-room-party/
├── 2024/
│   ├── main.html          # Simple party announcement page
│   ├── script.js          # Background animation toggle
│   └── styles.css         # Rave-style animated background
└── 2025/
    └── index.html         # Full RSVP system with drink menu (self-contained)
```

## 2025 Version (Current)

### Features

**RSVP System**
- Real-time attendee tracking via MockAPI
- Persistent RSVP state using localStorage
- Live attendee count display
- Add/remove RSVP functionality

**Drink Menu**
- Accordion-style expandable categories
- 70+ drink recipes organized by type:
  - Cocktails (vodka, tequila, whiskey, rum, mixed)
  - Shots
  - Mocktails
  - Simple drinks
- Step-by-step recipe instructions

**Dynamic Content**
- Room number fetched from API
- Responsive design (mobile/desktop)
- Neon/Vegas-themed styling with Tailwind CSS

### Technology Stack

- **Frontend**: Vanilla JavaScript, HTML5
- **Styling**: Tailwind CSS (via CDN)
- **Backend**: MockAPI (https://mockapi.io)
- **Storage**: localStorage for RSVP persistence

### API Endpoints

The 2025 version uses two MockAPI endpoints:

1. **Room Number**: `https://673a0ff9339a4ce44518b9db.mockapi.io/party/1`
   - Returns: `{ room: "string" }`

2. **RSVPs**: `https://673a0ff9339a4ce44518b9db.mockapi.io/rsvps`
   - GET: Fetch all RSVPs
   - POST: Create new RSVP `{ name: "string" }`
   - DELETE: Remove RSVP by ID

### Setup & Usage

#### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/csteele86/improving-vegas-room-party.git
   cd improving-vegas-room-party
   ```

2. Serve the 2025 version:
   ```bash
   cd 2025
   python3 -m http.server 8000
   # Or use any local server
   ```

3. Open in browser: `http://localhost:8000`

#### Deployment

The site is static HTML and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply point to the `2025/index.html` file as the entry point.

## Making Changes

### Updating Event Details

**Location & Time** (in `2025/index.html`):
```javascript
// Find and update these sections:
<p class="text-xl">Thursday Night at <span id="room-number">...</span></p>
```

**Hosts**:
```javascript
<p class="text-sm">Hosted by Jem & Steele</p>
```

### Adding/Editing Drinks

Drinks are stored in the `drinks` object in `2025/index.html`. Structure:

```javascript
const drinks = {
  cocktails: {
    vodka: [
      {
        name: "Drink Name",
        steps: [
          "Step 1 description",
          "Step 2 description"
        ]
      }
    ]
  }
};
```

**To add a new drink:**
1. Find the appropriate category and subcategory
2. Add a new object with `name` and `steps` array
3. The UI will automatically generate the display

**To add a new category:**
1. Add to the `drinks` object
2. Update the `renderDrinks()` function to include the new category
3. Add corresponding HTML section in the drinks menu

### Modifying RSVP Functionality

**Change API endpoint:**
```javascript
// Find these lines in index.html:
const apiUrl = 'https://673a0ff9339a4ce44518b9db.mockapi.io/rsvps';
```

**Customize RSVP data:**
```javascript
// In the createRSVP() function:
const response = await fetch(apiUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    name: userName,
    // Add additional fields here
  })
});
```

### Styling Changes

The site uses Tailwind CSS. To customize:

**Colors**: Update class names like `text-yellow-400`, `bg-purple-900`, etc.

**Animations**: Three custom animations are defined in `<style>`:
- `glow`: Pulsing text shadow effect
- `pulse-glow`: Border glow animation
- `flicker`: Neon flicker effect

Modify these in the `@keyframes` sections of the inline CSS.

### localStorage Keys

The app uses these localStorage keys:
- `attendeeId`: Stores the MockAPI ID of the user's RSVP
- `userName`: Stores the user's name

Clear these to reset RSVP state during testing:
```javascript
localStorage.removeItem('attendeeId');
localStorage.removeItem('userName');
```

## 2024 Version

A simpler static page with:
- Event announcement
- Animated rave background (CSS gradients)
- Toggle button for animation on/off

Files are self-contained and require no backend.

## Contributing

When making changes:
1. Test RSVP functionality with both adding and removing
2. Verify drink menu accordion behavior
3. Test on mobile and desktop viewports
4. Check console for API errors

## Payment Links

Update Venmo/PayPal links in the "Chip In" section:
```html
<a href="https://venmo.com/u/..." class="...">Venmo</a>
<a href="https://paypal.me/..." class="...">PayPal</a>
```

## License

MIT License - See LICENSE file for details

## Contact

Hosted by Jem & Steele
- Repository: [csteele86/improving-vegas-room-party](https://github.com/csteele86/improving-vegas-room-party)