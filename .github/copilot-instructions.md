# Vegas Room Party - AI Agent Instructions

## Project Overview

Multi-year event website for Vegas room parties. Each year gets its own directory with self-contained static HTML files.

- **2024/**: Simple announcement page with animated CSS background
- **2025/**: Full RSVP system with MockAPI backend and interactive drink menu (current focus)

## Architecture & Data Flow

### 2025 Version (Self-Contained Single File)

Everything lives in `2025/index.html` (1215 lines) - HTML, CSS, and JavaScript all inline:

**RSVP System Flow:**
1. On page load, fetch RSVPs from MockAPI and store only IDs in array
2. Check `localStorage.getItem('vegasPartyRSVP')` for existing RSVP ID
3. POST to MockAPI creates empty object `{}` - no name/email collected
4. Store returned ID in localStorage and rsvps array
5. DELETE to MockAPI removes RSVP, clear localStorage

**API Endpoints (MockAPI):**
```javascript
const API_URL = 'https://68700fea7ca4d06b34b5dfa1.mockapi.io/.../rsvps';  // GET, POST, DELETE
const ROOM_API_URL = 'https://68700fea7ca4d06b34b5dfa1.mockapi.io/.../room';  // GET room number
```

**Drink Menu Structure:**
- `drinksData` array embedded in `<script>` tag (line ~566)
- Each drink: `{ name, category, alcohol_base, steps[] }`
- Categories: "cocktail", "shot", "mocktails", "keep it simple"
- Alcohol bases (for cocktails): "vodka", "tequila", "whiskey", "rum", "mixed"
- Nested accordion: Category → Alcohol Base → Drinks (except mocktails/simple show flat grid)

## Key Conventions

### File Structure Pattern

Each year is fully independent. Copy the entire previous year's directory to start a new year:
```bash
cp -r 2025/ 2026/
# Update API URLs, dates, and content in 2026/index.html
```

### Adding Drinks

Drinks are in `drinksData` array around line 566. Structure:
```javascript
{
    "name": "Drink Name",
    "category": "cocktail",  // or "shot", "mocktails", "keep it simple"
    "alcohol_base": "vodka", // or "tequila", "whiskey", "rum", "mixed", "none"
    "steps": ["Step 1", "Step 2"]
}
```

No UI changes needed - accordion auto-generates from data.

### CSS Animations

Three custom keyframe animations in `<style>` tag (lines 9-33):
- `glow`: Neon text shadow pulse (used on headers)
- `pulseIn`: Scale up/down on interaction
- `flicker`: Opacity flicker for neon effect

Applied via utility classes: `.glow-text`, `.animate-pulse-in`, `.flicker`

### Tailwind Usage

CDN loaded via `<script src="https://cdn.tailwindcss.com"></script>`. Heavy use of:
- Gradient backgrounds: `bg-gradient-to-r from-purple-900/60 to-pink-900/60`
- Backdrop blur: `backdrop-blur-sm`
- Custom animations combined with Tailwind responsive classes

## Testing Workflows

### Test RSVP Reset
```javascript
// In browser console:
localStorage.removeItem('vegasPartyRSVP');
location.reload();
```

### Test Locally
```bash
cd 2025
python3 -m http.server 8000
# Open http://localhost:8000
```

No build process. No dependencies. Direct file editing.

### Verify API Changes

Check MockAPI dashboard at https://mockapi.io for:
- RSVP count matches UI
- Room number data structure: `[{ "number": "2051", "tower": "Augustus" }]`

## Common Modifications

### Update Payment Links (line ~130-140)
```html
<a href="https://venmo.com/jemkegawa?txn=pay&note=..." ...>💚 Venmo</a>
<a href="https://paypal.me/manofsteele86" ...>💙 PayPal</a>
```

### Change Event Details (line ~110-120)
```html
<span class="font-semibold">Hosted by:</span>
<span class="ml-2 text-cyan-200">Jem & Steele</span>
```

### Add New Drink Category

1. Add drinks to `drinksData` with new `category` value
2. Update `categoryIcons` and `categoryNames` objects (line ~390-400)
3. Accordion generation handles new category automatically

## 2024 Version Notes

Simple static page with JavaScript toggle for animated CSS background:
- `script.js`: Adds/removes `.active-background` class on body
- `styles.css`: Radial gradient keyframe animation
- No backend, no state, no external dependencies
