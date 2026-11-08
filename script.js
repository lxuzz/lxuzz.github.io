// Toggle navigation menu on mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Set dynamic copyright year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.innerText = new Date().getFullYear();
}
