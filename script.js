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


function changeImg(thumb) {
  const main = document.getElementById('main-img');
  main.style.opacity = 0;
  main.style.transform = 'scale(0.95)';
  setTimeout(() => {
    main.src = thumb.src;
    main.style.opacity = 1;
    main.style.transform = 'scale(1)';
  }, 300);
}