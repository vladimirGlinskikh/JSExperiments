$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: false,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			900: {
				items: 3
			},
			1200:{
				items: 4
			}
		}
	})
});