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

	const changeIconPlay = () => {
		if (audio.paused) {
			radio.classList.remove('play');
			radioStop.classList.add('fa-play');
			radioStop.classList.remove('fa-stop');
		} else {
			radio.classList.add('play');
			radioStop.classList.add('fa-stop');
			radioStop.classList.remove('fa-play');
		}
	};

	radioNavigation.addEventListener('change', event => {
		const target = event.target;
		radioStop.disabled = false;
		audio.src = target.dataset.radioStantion;
		audio.play();
		changeIconPlay();
	});

	radioStop.addEventListener('click', () => {
		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}
		changeIconPlay();
	});
};