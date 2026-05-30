AOS.init({
  offset: 0,
  delay: 0,
  duration: 400
});

const btn = document.getElementById('hamburgerBtn');
const menu = document.getElementById('mobileMenu');

btn.addEventListener('click', () => {
  menu.classList.toggle('open');
});