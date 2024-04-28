const darkModeToggle = document.querySelector('.theme-switcher');
const body = document.body;
const headerNav = document.querySelector('.navigation');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  headerNav.classList.toggle('header-light');
});
