const darkModeToggle = document.querySelector('.theme-switcher');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  //   body.style.display = 'none';
});
