# Improving Vegas Room Party 🎉

A collection of static websites used to invite people to the annual Improving Vegas Room Party! Each year features a unique design and interactive elements to build excitement for the event.

## 🎯 What is This?

This repository hosts invitation websites for the annual Vegas Room Party hosted by Improving. The party happens during the annual Improving company event in Las Vegas, providing a fun gathering space for employees with drinks, music, and good vibes.

## 📁 Repository Structure

```
improving-vegas-room-party/
├── 2024/               # 2024 party invitation site
│   ├── main.html      # Main HTML page
│   ├── styles.css     # Styling
│   └── script.js      # Interactive background toggle
├── 2025/               # 2025 party invitation site
│   └── index.html     # Single-file app with embedded styles and scripts
├── LICENSE            # MIT License
└── README.md          # This file
```

Each year's folder contains a self-contained static website that can be opened directly in a browser or hosted on any web server.

## 🚀 Setup Instructions

### Prerequisites

No special prerequisites needed! These are static HTML sites that run in any modern web browser.

Optional tools for development:
- A code editor (VS Code, Sublime Text, etc.)
- A local web server for testing (optional, but recommended for 2025 site features)
- Git for version control

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/csteele86/improving-vegas-room-party.git
   cd improving-vegas-room-party
   ```

2. **View a site locally:**
   
   **Option A - Direct file opening (simplest):**
   - Navigate to the year folder (e.g., `2024/` or `2025/`)
   - Open the HTML file directly in your browser:
     - 2024: Open `2024/main.html`
     - 2025: Open `2025/index.html`
   
   **Option B - Using a local web server (recommended for full functionality):**
   
   Using Python (if installed):
   ```bash
   # Python 3
   cd 2025
   python -m http.server 8000
   # Then open http://localhost:8000 in your browser
   ```
   
   Using Node.js (if you have `npx` installed):
   ```bash
   cd 2025
   npx http-server -p 8000
   # Then open http://localhost:8000 in your browser
   ```
   
   Using VS Code:
   - Install the "Live Server" extension
   - Right-click on the HTML file and select "Open with Live Server"

## 🛠️ How to Make Changes

### Editing Existing Year Sites

#### For 2024 Site:
1. **Edit HTML content:** Open `2024/main.html` and modify:
   - Event details (date, location)
   - Welcome message
   - Page title

2. **Edit styles:** Open `2024/styles.css` and modify:
   - Colors, fonts, layout
   - Background animation effects

3. **Edit functionality:** Open `2024/script.js` and modify:
   - Background toggle behavior
   - Add new interactive features

#### For 2025 Site:
The 2025 site is a single-file application with everything embedded in `2025/index.html`:

1. **Edit event details:** Look for the "Event Details" section around line 106
2. **Edit RSVP functionality:** Modify the API endpoints (lines 164-166) and JavaScript logic
3. **Edit drink menu:** Update the `drinksData` array (starting around line 565)
4. **Edit styles:** Modify the `<style>` section in the `<head>` tag (lines 9-64)
5. **Edit donation links:** Update Venmo/PayPal links around lines 135-142

### Adding a New Year

To create an invitation site for a new year (e.g., 2026):

1. **Create a new directory:**
   ```bash
   mkdir 2026
   ```

2. **Choose a starting template:**
   - Copy from the most recent year as a starting point:
     ```bash
     cp 2025/index.html 2026/index.html
     ```
   - Or start from scratch with a new design

3. **Update the content:**
   - Change all year references (titles, dates, etc.)
   - Update event details (date, location, room number)
   - Modify the design/theme for the new year
   - Update any API endpoints if using external services
   - Test all interactive features

4. **Commit your changes:**
   ```bash
   git add 2026/
   git commit -m "Add 2026 Vegas Room Party invitation site"
   git push
   ```

### Key Sections to Update Each Year

- **Event Date & Time:** The when/where information
- **Room Number:** Update once the room is assigned
- **RSVP System:** Update API endpoints if using a different backend
- **Drink Menu:** Add/remove drinks based on what's available
- **Donation Links:** Verify Venmo/PayPal links are current
- **Theme/Design:** Create a fresh look for the new year

## 🎨 Technology Stack

### 2024 Site
- **HTML5:** Structure and content
- **CSS3:** Styling and animations (rave light background effects)
- **Vanilla JavaScript:** Interactive background toggle

### 2025 Site
- **HTML5:** Single-file application structure
- **Tailwind CSS:** Utility-first CSS framework (via CDN)
- **Vanilla JavaScript:** Complex interactive features including:
  - RSVP system with localStorage persistence
  - Accordion menus for drinks
  - API integration (MockAPI.io for RSVPs and room data)
- **Google Fonts:** Custom typography (Permanent Marker, Poppins)

### API Services (2025)
- **MockAPI.io:** Used for RSVP tracking and room number management
  - RSVP endpoint: Tracks attendees
  - Room endpoint: Displays room assignment when available

## 🌐 Deployment

These are static sites that can be hosted anywhere:

### GitHub Pages (Free & Easy)
1. Go to repository Settings > Pages
2. Select the branch to deploy from
3. Choose the root directory or specific folder
4. Your site will be available at `https://csteele86.github.io/improving-vegas-room-party/`

### Other Hosting Options
- **Netlify:** Drag and drop the year folder to deploy
- **Vercel:** Connect your GitHub repo for automatic deployments
- **AWS S3:** Upload files to an S3 bucket configured for static hosting
- **Any web server:** Simply upload the files to your web server's public directory

## 📝 Making Contributions

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly in multiple browsers
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 🎊 Past Events

- **2024:** Planet Hollywood Casino - Featured rave-style animated background
- **2025:** Suite party with extensive drink menu, RSVP system, and donation options

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Hosts

Hosted with ❤️ by Jem & Steele

## 🙋 Questions or Issues?

If you have questions about the party or encounter technical issues with the site, please open an issue in this repository.

---

**Remember:** The goal is to create excitement for the party! Keep the sites fun, engaging, and easy to use. 🎉🍹🎧