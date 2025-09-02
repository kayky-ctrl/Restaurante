const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});