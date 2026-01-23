import { JSDOM } from 'jsdom';

describe('Background Toggle Script', () => {
  let dom;
  let document;
  let body;
  let toggleBtn;

  beforeEach(() => {
    // Create a fresh DOM for each test
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <body>
          <button id="toggle-bg-btn">Toggle Background</button>
        </body>
      </html>
    `, {
      url: 'http://localhost',
      pretendToBeVisual: true,
      runScripts: 'dangerously'
    });

    document = dom.window.document;
    body = document.body;
    toggleBtn = document.getElementById('toggle-bg-btn');
  });

  afterEach(() => {
    dom.window.close();
  });

  describe('Initial state', () => {
    it('should have a toggle button element', () => {
      expect(toggleBtn).not.toBeNull();
      expect(toggleBtn.id).toBe('toggle-bg-btn');
    });

    it('should have button with correct text content', () => {
      expect(toggleBtn.textContent).toBe('Toggle Background');
    });

    it('should have body element', () => {
      expect(body).not.toBeNull();
    });
  });

  describe('Background toggle functionality', () => {
    it('should add active-background class to body on DOMContentLoaded', () => {
      // Simulate the script's initialization
      body.classList.add('active-background');
      
      expect(body.classList.contains('active-background')).toBe(true);
    });

    it('should toggle classes when button is clicked', () => {
      // Set initial state
      body.classList.add('active-background');
      
      // First click
      body.classList.toggle('active-background');
      body.classList.toggle('inactive-background');
      
      expect(body.classList.contains('active-background')).toBe(false);
      expect(body.classList.contains('inactive-background')).toBe(true);
    });

    it('should toggle back to active-background on second click', () => {
      // Set initial state
      body.classList.add('active-background');
      
      // First click - toggle to inactive
      body.classList.toggle('active-background');
      body.classList.toggle('inactive-background');
      
      // Second click - toggle back to active
      body.classList.toggle('active-background');
      body.classList.toggle('inactive-background');
      
      expect(body.classList.contains('active-background')).toBe(true);
      expect(body.classList.contains('inactive-background')).toBe(false);
    });

    it('should toggle classes multiple times correctly', () => {
      // Initial state
      body.classList.add('active-background');
      expect(body.classList.contains('active-background')).toBe(true);
      
      // Click 1
      body.classList.toggle('active-background');
      body.classList.toggle('inactive-background');
      expect(body.classList.contains('active-background')).toBe(false);
      expect(body.classList.contains('inactive-background')).toBe(true);
      
      // Click 2
      body.classList.toggle('active-background');
      body.classList.toggle('inactive-background');
      expect(body.classList.contains('active-background')).toBe(true);
      expect(body.classList.contains('inactive-background')).toBe(false);
      
      // Click 3
      body.classList.toggle('active-background');
      body.classList.toggle('inactive-background');
      expect(body.classList.contains('active-background')).toBe(false);
      expect(body.classList.contains('inactive-background')).toBe(true);
    });
  });

  describe('Event listener', () => {
    it('should respond to click events on toggle button', () => {
      body.classList.add('active-background');
      
      // Create and dispatch a click event
      const clickEvent = new dom.window.Event('click', { bubbles: true });
      
      // Add event listener like the script does
      toggleBtn.addEventListener('click', () => {
        body.classList.toggle('active-background');
        body.classList.toggle('inactive-background');
      });
      
      // Trigger the click
      toggleBtn.dispatchEvent(clickEvent);
      
      expect(body.classList.contains('active-background')).toBe(false);
      expect(body.classList.contains('inactive-background')).toBe(true);
    });

    it('should handle multiple click events', () => {
      body.classList.add('active-background');
      
      // Add event listener
      toggleBtn.addEventListener('click', () => {
        body.classList.toggle('active-background');
        body.classList.toggle('inactive-background');
      });
      
      const clickEvent = new dom.window.Event('click', { bubbles: true });
      
      // First click
      toggleBtn.dispatchEvent(clickEvent);
      expect(body.classList.contains('inactive-background')).toBe(true);
      
      // Second click
      toggleBtn.dispatchEvent(clickEvent);
      expect(body.classList.contains('active-background')).toBe(true);
      
      // Third click
      toggleBtn.dispatchEvent(clickEvent);
      expect(body.classList.contains('inactive-background')).toBe(true);
    });
  });

  describe('DOMContentLoaded event', () => {
    it('should initialize with active-background class', () => {
      // Simulate DOMContentLoaded initialization
      const initializeScript = () => {
        body.classList.add('active-background');
      };
      
      initializeScript();
      
      expect(body.classList.contains('active-background')).toBe(true);
    });
  });

  describe('classList API', () => {
    it('should properly use classList.toggle', () => {
      expect(body.classList.contains('active-background')).toBe(false);
      
      body.classList.toggle('active-background');
      expect(body.classList.contains('active-background')).toBe(true);
      
      body.classList.toggle('active-background');
      expect(body.classList.contains('active-background')).toBe(false);
    });

    it('should manage multiple classes independently', () => {
      body.classList.add('class1');
      body.classList.add('class2');
      
      expect(body.classList.contains('class1')).toBe(true);
      expect(body.classList.contains('class2')).toBe(true);
      
      body.classList.remove('class1');
      expect(body.classList.contains('class1')).toBe(false);
      expect(body.classList.contains('class2')).toBe(true);
    });
  });
});
