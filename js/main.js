// main.js

// Fade in all panels on page load
window.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel');
  panels.forEach((panel, index) => {
    setTimeout(() => {
      panel.classList.add('fade-in');
    }, index * 200); // stagger animation
  });
});

// Blur background when chat starts
function toggleBackgroundBlur(state) {
  const bg = document.getElementById('background');
  if (state) {
    bg.classList.add('blur');
  } else {
    bg.classList.remove('blur');
  }
}
