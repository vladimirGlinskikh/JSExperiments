'use strict';

const modalAdd = document.querySelector('.modal__add'),
	addAd = document.querySelector('.add__ad'),
	modalBtnSubmit = document.querySelector('.modal__btn-submit'),
	modalSubmit = document.querySelector('.modal__submit'),
	catalog = document.querySelector('.catalog'),
	modalItem = document.querySelector('.modal__item');

const closeModal = function (event) {
	const target = event.target;

	if (target.closest('.modal__close') ||
		target === this) {
		this.classList.add('hide');
		modalSubmit.reset();
	}
};

const closeModalEscape = event => {
	if (event.code === 'Escape') {
		modalAdd.classList.add('hide');
		modalItem.classList.add('hide');
		document.removeEventListener('keydown', closeModalEscape);
	}
};

addAd.addEventListener('click', () => {
	modalAdd.classList.remove('hide');
	modalBtnSubmit.disabled = true;
	document.addEventListener('keydown', closeModalEscape);
});

modalAdd.addEventListener('click', closeModalEscape);
modalItem.addEventListener('click', closeModalEscape);

catalog.addEventListener('click', event => {
	const target = event.target;
	if (target.closest('.card')) {
		modalItem.classList.remove('hide');
		document.addEventListener('keydown', closeModalEscape);
	}
});
