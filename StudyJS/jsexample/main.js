// $(document).ready(function () {
// 	'usestrict';
// 	paper.install(window);
// 	paper.setup(document.getElementById('mainCanvas'));
// 	var c = Shape.Circle(200, 200, 50);
// 	c.fillColor = 'green';
// 	paper.view.draw();
// });

let counterFizz = 0;
let counterBuzz = 0;
let counterFizzBuzz = 0;
for ( let number = 0; number <= 100; number++) {
	if (number % 3 == 0) {
		console.log(number + " Fizz: " + counterFizz++)
	} else if (number % 5 == 0) {
		console.log(number + " Buzz: " + counterBuzz++)
	} else {
		console.log(number + " FizzBuzz: " + counterFizzBuzz++)
	}
}

console.log("Total: ----------")
console.log("Fizz = " + --counterFizz);
console.log("Buzz = " + --counterBuzz);
console.log("FizzBuzz = " + --counterFizzBuzz);