const IMG_URL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

const leftMenu = document.querySelector('.left-menu'),
	hamburger = document.querySelector('.hamburger'),
	tvShowsList = document.querySelector('.tv-shows__list'),
	modal = document.querySelector('.modal'),
	tvShows = document.querySelector('.tv-shows'),
	tvCardImg = document.querySelector('.tv-card__img'),
	modalTitle = document.querySelector('.modal__title'),
	genresList = document.querySelector('.genres-list'),
	rating = document.querySelector('.rating'),
	description = document.querySelector('.description'),
	modalLink = document.querySelector('.modal__link'),
	searchForm = document.querySelector('.search__form'),
	searchFormInput = document.querySelector('.search__form-input');

const loading = document.createElement('div');
loading.className = 'loading';


class DBService {
	constructor() {
		this.SERVER = 'https://api.themoviedb.org/3';
		this.API_KEY = '689786e139d6cc62a347ff1d03a08323';
	}

	getData = async (url) => {
		const res = await fetch(url);
		if (res.ok) {
			return res.json();
		} else {
			throw new Error(`don't have get value to ${url}`);
		}
	}
	getTestData = () => {
		return this.getData('test.json');
	}

	getTestCard = () => {
		return this.getData('card.json');
	}

	getSearchResult = query => {
		return this.getData(`${this.SERVER}/search/tv?api_key=${this.API_KEY}&query=${query}&language=ru-RU`);
	}

	getTvShow = id =>{
		return this.getData(`${this.SERVER}/tv/${id}?api_key=${this.API_KEY}&language=ru-RU`);
	}
}


const renderCard = response => {
	console.log(response);
	tvShowsList.textContent = '';

	response.results.forEach(item => {

		const {
			backdrop_path: backdrop,
			name: title,
			poster_path: poster,
			vote_average: vote,
			id
		} = item;

		const posterIMG = poster ? IMG_URL + poster : 'img/no-poster.jpg';
		const backdropIMG = backdrop ? IMG_URL + backdrop : '';
		const voteElem = vote ? `<span class="tv-card__vote">${vote}</span>` : '';

		const card = document.createElement('li');
		card.idTV = id;
		card.className = 'tv-shows__item';
		card.innerHTML = `
		   <a href="#" id="${id}" class="tv-card">
				${voteElem}
				<img class="tv-card__img"
					src="${posterIMG}"
					data-backdrop="${IMG_URL + backdrop}"
					alt="${title}">
				<h4 class="tv-card__head">${title}</h4>
		   </a>
		`;
		loading.remove();
		tvShowsList.append(card);
	});
};

searchForm.addEventListener('submit', event => {
	event.preventDefault();
	const value = searchFormInput.value.trim();
	if (value) {
		tvShows.append(loading);
		new DBService().getSearchResult(value).then(renderCard);
	}
	searchFormInput.value = '';
});

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
	event.preventDefault();
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
		console.dir(card)
		new DBService().getTvShow(card.id)
			.then(data => {
				console.log(data);
				tvCardImg.src = IMG_URL + data.poster_path;
				modalTitle.textContent = data.name;
				// genresList.innerHTML = data.genres.reduce((acc, item) => `${acc}<li>${item.name}</li>`);
				genresList.textContent = '';
				// for (const item of data.genres){
				// 	genresList.innerHTML += `<li>${item.name}</li>`;
				// }
				data.genres.forEach(item => {
					genresList.innerHTML += `<li>${item.name}</li>`;
				})
				rating.textContent = data.vote_average;
				description.textContent = data.overview;
				modalLink.href = data.homepage;
			})
			.then(() => {
				document.body.style.overflow = 'hidden';
				modal.classList.remove('hide');
			})
	}
});

modal.addEventListener('click', event => {

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
			[img.src, img.dataset.backdrop] = [img.dataset.backdrop, img.src];
		}
	}
};

tvShowsList.addEventListener('mouseover', changeImage);
tvShowsList.addEventListener('mouseout', changeImage);