# 2025 Site Refactoring Plan

## Problem Statement

The 2025 Vegas Room Party site is currently implemented as a single large static HTML file (`index.html`) with all assets embedded inline. This violates web development best practices and creates several issues:

### Current Issues
- **Poor Maintainability**: 1213 lines in a single file makes it difficult to locate and modify specific functionality
- **No Separation of Concerns**: HTML structure, CSS styling, JavaScript logic, and data are all mixed together
- **Poor Caching**: Browsers cannot cache CSS, JavaScript, or data separately from the HTML
- **Difficult Collaboration**: Multiple developers cannot easily work on different aspects simultaneously
- **Hard to Debug**: Finding issues in a massive file is time-consuming
- **Not Reusable**: CSS styles and JavaScript functions cannot be easily reused in other pages

### File Breakdown
The current `index.html` contains:
- **HTML Structure**: ~100 lines
- **CSS Styles**: ~155 lines (lines 9-64)
- **JavaScript Application Code**: ~403 lines (lines 162-565)
- **Embedded Drinks Data**: ~648 lines (lines 565-1213)
- **Total**: 1213 lines

## Implementation Approach

### 1. Create Modular File Structure

Following the pattern established by the 2024 site, we will separate the 2025 site into distinct files:

```
2025/
├── index.html          # Main HTML structure (~100 lines)
├── styles.css          # All CSS styling (~155 lines)
├── script.js           # Application logic (~403 lines)
└── drinks.json         # Drinks menu data (~648 lines as JSON)
```

### 2. Benefits of This Approach

- **Improved Caching**: Browsers can cache CSS, JS, and data files independently
- **Better Organization**: Each file has a single, clear responsibility
- **Easier Maintenance**: Developers can quickly locate where to make changes
- **Parallel Development**: Multiple developers can work on different files without conflicts
- **Reusability**: CSS and JavaScript can be reused across multiple pages if needed
- **Better Performance**: Cached assets reduce load times for returning visitors
- **Industry Standard**: Follows established web development best practices

### 3. Migration Tasks

#### Task 1: Extract CSS to `styles.css`
- Copy all content from `<style>` tags (lines 9-64) to new `styles.css` file
- Remove `<style>` tags from `index.html`
- Add `<link rel="stylesheet" href="styles.css">` to `<head>` section

**Affected Lines**: 9-64 in `index.html`

#### Task 2: Extract Drinks Data to `drinks.json`
- Copy the `drinksData` array content (lines 565-1213) to new `drinks.json` file
- Format as valid JSON (remove JavaScript variable declaration)
- Remove embedded data from `index.html`
- Update JavaScript to fetch data from `drinks.json` instead of using inline array

**Affected Lines**: 565-1213 in `index.html`

#### Task 3: Extract JavaScript to `script.js`
- Copy all content from `<script>` tags (lines 162-565) to new `script.js` file
- Remove embedded drinks data reference (will load from drinks.json)
- Remove `<script>` tags from `index.html`
- Add `<script src="script.js"></script>` before closing `</body>` tag

**Affected Lines**: 162-565 in `index.html`

#### Task 4: Update `index.html`
- Keep only HTML structure and semantic markup
- Add external file references in correct locations:
  - `<link rel="stylesheet" href="styles.css">` in `<head>`
  - `<script src="script.js"></script>` before `</body>`
- Ensure Tailwind CDN and Google Fonts links remain (external dependencies)

**Result**: ~100 lines of clean, semantic HTML

#### Task 5: Update JavaScript to Load Drinks Data
- Modify `loadDrinksData()` function to fetch `drinks.json`
- Use `fetch()` API to load the drinks data asynchronously
- Handle loading states and errors appropriately
- Ensure backward compatibility with existing functionality

**Code Change**: Update `loadDrinksData()` function in `script.js`

### 4. Testing Strategy

After each extraction, verify:

1. **Visual Appearance**: Page should look identical to the original
2. **Functionality**: All interactive elements work (RSVP buttons, accordions)
3. **Data Loading**: Drinks menu populates correctly from external JSON
4. **API Calls**: RSVP and room number fetching still work
5. **Responsive Design**: Mobile and desktop layouts remain functional
6. **Browser Console**: No errors in developer console

### 5. Risk Mitigation

- **Backup**: Original file is preserved in git history
- **Incremental Changes**: Extract one component at a time
- **Testing**: Verify functionality after each extraction
- **Rollback Plan**: Can revert individual commits if issues arise

### 6. Success Criteria

The refactoring is complete when:
- [ ] All CSS is in `styles.css` (no inline styles)
- [ ] All JavaScript is in `script.js` (no inline scripts)
- [ ] All drinks data is in `drinks.json` (no embedded data)
- [ ] `index.html` contains only HTML structure and external file references
- [ ] All original functionality works identically
- [ ] No errors in browser console
- [ ] Files follow consistent formatting and style

## Timeline Estimate

- Task 1 (Extract CSS): 5 minutes
- Task 2 (Extract Drinks Data): 10 minutes
- Task 3 (Extract JavaScript): 10 minutes
- Task 4 (Update HTML): 5 minutes
- Task 5 (Update Data Loading): 10 minutes
- Testing & Verification: 15 minutes

**Total**: ~55 minutes

## Future Enhancements (Out of Scope)

These improvements could be considered in future iterations:
- Minify CSS and JavaScript for production
- Use a build tool (webpack, vite) for asset bundling
- Add source maps for debugging
- Implement CSS preprocessor (SASS/LESS)
- Add unit tests for JavaScript functions
- Separate API calls into dedicated service module
- Add environment configuration for API URLs
