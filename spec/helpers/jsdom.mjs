import { JSDOM } from 'jsdom';

// Set up DOM environment before each spec
beforeEach(() => {
  const dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
      <body>
        <button id="toggle-bg-btn">Toggle Background</button>
      </body>
    </html>
  `, {
    url: 'http://localhost',
    pretendToBeVisual: true
  });

  global.document = dom.window.document;
  global.window = dom.window;
  global.HTMLElement = dom.window.HTMLElement;
  global.Event = dom.window.Event;
  global.DOMContentLoaded = dom.window.DOMContentLoaded;
});

// Clean up after each spec
afterEach(() => {
  delete global.document;
  delete global.window;
  delete global.HTMLElement;
  delete global.Event;
  delete global.DOMContentLoaded;
});
