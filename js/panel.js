// panel.js

// Tambahan hover / click behavior jika perlu
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('mouseenter', () => {
    panel.style.transform = 'translateY(-10px)';
    panel.style.boxShadow = '0 10px 20px rgba(0,0,0,0.5)';
  });
  panel.addEventListener('mouseleave', () => {
    panel.style.transform = 'translateY(0)';
    panel.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
  });
});
