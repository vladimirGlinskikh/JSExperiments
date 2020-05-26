const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
	leftMenu.classList.toggle('openMenu');
	hamburger.classList.toggle('open');
});