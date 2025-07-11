// Script to toggle background animation on and off
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-bg-btn');
    const body = document.body;
  
    // Start with the background animation on
    body.classList.add('active-background');
  
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('active-background');
      body.classList.toggle('inactive-background');
    });
  });
  