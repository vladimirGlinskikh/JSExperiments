let main = document.querySelector(".main");

let playfield = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let gameSpeed = 500;
let activeTetro = {
	x: 0,
	y: 0,
	shape: [
		[1, 1, 1],
		[0, 1, 0],
		[0, 0, 0],
	],
};

function draw() {
	let mainInnerHTML = ``;
	for (let y = 0; y < playfield.length; y++) {
		for (let x = 0; x < playfield[y].length; x++) {
			if (playfield[y][x] === 1) {
				mainInnerHTML += `<div class="cell movingCell"></div>`;
			} else if (playfield[y][x] === 2) {
				mainInnerHTML += `<div class="cell fixedCell"></div>`;
			} else {
				mainInnerHTML += `<div class="cell"></div>`;
			}
		}
	}
	main.innerHTML = mainInnerHTML;
}

function removePrevActiveTetro() {
	for (let y = 0; y < playfield.length; y++) {
		for (let x = 0; x < playfield[y].length; x++) {
			if (playfield[y][x] === 1) {
				playfield[y][x] = 0;
			}
		}
	}
}

function addActiveTetro() {
	removePrevActiveTetro();
	for (let y = 0; y < activeTetro.shape.length; y++) {
		for (let x = 0; x < activeTetro.shape[y].length; x++) {
			if (activeTetro.shape[y][x]) {
				playfield[activeTetro.y + y][activeTetro.x + x] = activeTetro.shape[y][x];
			}
		}
	}
}

function hasCollisions() {
	for (let y = 0; y < activeTetro.shape.length; y++) {
		for (let x = 0; x < activeTetro.shape[y].length; x++) {
			if (activeTetro.shape[y][x] &&
				(playfield[activeTetro.y + y] === undefined ||
					playfield[activeTetro.y + y][activeTetro.x + x] === undefined)) {
				return true;
			}
		}
	}
	return false;
}

function removeFullLines() {
	let canRemoveLine = true;
	for (let y = 0; y < playfield.length; y++) {
		for (let x = 0; x < playfield[y].length; x++) {
			if (playfield[y][x] !== 2) {
				canRemoveLine = false;
				break;
			}
		}
		if (canRemoveLine) {
			playfield.splice(y, 1);
			playfield.splice(0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		}
		canRemoveLine = true;
	}
}

function fixTetro() {
	for (let y = 0; y < playfield.length; y++) {
		for (let x = 0; x < playfield[y].length; x++) {
			if (playfield[y][x] === 1) {
				playfield[y][x] = 2;
			}
		}
	}

	removeFullLines();

	playfield[0] = [0, 0, 0, 0, 0, 0, 1, 1, 0, 0];
	playfield[1] = [0, 0, 0, 0, 0, 0, 1, 1, 0, 0];

}

document.onkeydown = function (element) {
	if (element.keyCode === 37) {
		activeTetro.x -= 1;
		if (hasCollisions()) {
			activeTetro.x += 1;
		}
	} else if (element.keyCode === 39) {
		activeTetro.x += 1;
		if (hasCollisions()) {
			activeTetro.x -= 1;
		}
	} else if (element.keyCode === 40) {
		activeTetro.y += 1;
		if (hasCollisions()) {
			activeTetro.y -= 1;
		}
	}
	addActiveTetro();
	draw();
}

addActiveTetro();
draw();

// function startGame() {
// 	moveTetroDown();
// 	draw();
// 	setTimeout(startGame, gameSpeed);
// }
//
// setTimeout(startGame, gameSpeed);
