export const radioPlayerInit = () => {
	const radio = document.querySelector('.radio'),
		radioCoverImg = document.querySelector('.radio-cover__img'),
		radioHeader = document.querySelector('.radio-header'),
		radioNavigation = document.querySelector('.radio-navigation'),
		radioItem = document.querySelectorAll('.radio-item'),
		radioStop = document.querySelector('.radio-stop');

	const audio = new Audio();
	audio.type = 'audio/aac';

	radioStop.disabled = true;

	radioNavigation.addEventListener('change', event => {
		const target = event.target;
		audio.src = target.dataset.radioStantion;
		audio.play();
	});
};