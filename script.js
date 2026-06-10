AOS.init({
  offset: 0,
  delay: 0,
  duration: 400
});

const navbar = document.getElementById('navs');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = 'rgba(from var(--bg-sec-color) r g b / 60%)';
    navbar.style.backdropFilter = 'blur(10px)';
    navbar.style.webkitBackdropFilter = 'blur(10px)';
  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.backdropFilter = 'blur(0px)';
    navbar.style.webkitBackdropFilter = 'blur(0px)';
  }
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