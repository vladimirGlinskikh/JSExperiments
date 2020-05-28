const IMG_URL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
const API_KEY = '689786e139d6cc62a347ff1d03a08323';

const leftMenu = document.querySelector('.left-menu'),
	hamburger = document.querySelector('.hamburger'),
	tvShowsList = document.querySelector('.tv-shows__list'),
	modal = document.querySelector('.modal');

const DBService = class {
	getData = async (url) => {
		const res = await fetch(url);
		if (res.ok) {
			return res.json();
		} else {
			throw new Error(`don't have get value to ${url}`);
		}
	}
	getTestData = () => {
		return this.getData('test.json')
	}
}

const renderCard = response => {
	tvShowsList.textContent = '';

	response.results.forEach(({
								  backdrop_path: backdrop,
								  name: title,
								  poster_path: poster,
								  vote_average: vote
							  }) => {

		const posterIMG = poster ? IMG_URL + poster : 'img/no-poster.jpg';
		const backdropIMG = backdrop ? IMG_URL + backdrop : '';
		const voteElem = '';

		const card = document.createElement('li');
		card.className = 'tv-shows__item';
		card.innerHTML = `
		   <a href="#" class="tv-card">
				<span class="tv-card__vote">${vote}</span>
				<img class="tv-card__img"
					src="${posterIMG}"
					data-backdrop="${IMG_URL + backdrop}"
					alt="${title}">
				<h4 class="tv-card__head">${title}</h4>
		   </a>
		`;
		tvShowsList.append(card);
	});
}

new DBService().getTestData().then(renderCard);

hamburger.addEventListener('click', () => {
	leftMenu.classList.toggle('openMenu');
	hamburger.classList.toggle('open');
});

document.addEventListener('click', event => {
	if (!event.target.closest('.left-menu')) {
		leftMenu.classList.remove('openMenu');
		hamburger.classList.remove('open');
	}
});

leftMenu.addEventListener('click', event => {
	const target = event.target;
	const dropdown = target.closest('.dropdown');
	if (dropdown) {
		dropdown.classList.toggle('active');
		leftMenu.classList.add('openMenu');
		hamburger.classList.add('open');
	}
});

tvShowsList.addEventListener('click', event => {
	event.preventDefault();
	const target = event.target;
	const card = target.closest('.tv-card');
	if (card) {
		document.body.style.overflow = 'hidden';
		modal.classList.remove('hide');
	}
});

modal.addEventListener('click', event => {
	console.log(event.target);
	console.log(event.target.classList.contains('modal'));

	if (event.target.closest('.cross') ||
		event.target.classList.contains('modal')) {
		document.body.style.overflow = '';
		modal.classList.add('hide');
	}
});

const changeImage = event => {
	const card = event.target.closest('.tv-shows__item');

	if (card) {
		const img = card.querySelector('.tv-card__img');
		if (img.dataset.backdrop) {
			[img.src, img.dataset.backdrop] = [img.dataset.backdrop, img.src]
		}
	}
};

tvShowsList.addEventListener('mouseover', changeImage);
tvShowsList.addEventListener('mouseout', changeImage);