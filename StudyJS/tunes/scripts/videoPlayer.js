export const videoPlayerInit = () => {
	const videoPlayer = document.querySelector('.video-player'),
		videoButtonPlay = document.querySelector('.video-button__play'),
		videoButtonStop = document.querySelector('.video-button__stop'),
		videoTimePassed = document.querySelector('.video-time__passed'),
		videoProgress = document.querySelector('.video-progress'),
		videoTimeTotal = document.querySelector('.video-time__total');

	const toggleIcon = () => {
		if (videoPlayer.paused) {
			videoButtonPlay.classList.remove('fa-pause');
			videoButtonPlay.classList.add('fa-play');
		} else {
			videoButtonPlay.classList.add('fa-pause');
			videoButtonPlay.classList.remove('fa-play');
		}
	}

	videoPlayer.addEventListener('click', () => {
		if (videoPlayer.paused) {
			videoPlayer.play();
		} else {
			videoPlayer.pause();
		}
		toggleIcon();
	});
};