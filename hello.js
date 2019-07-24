/*var birthYear = parseInt(prompt("What year you were born?"));
var luckyNumber = parseInt(prompt("What is your lucky number?"));
var favFruite = "peach";
var favSubject = "cs";
var num1 = birthYear/luckyNumber;
console.log(num1);
var num2 = birthYear+favSubject;
console.log(num2);
var num3 = favFruite+birthYear+luckyNumber;
console.log(num3);
var num4 = birthYear+luckyNumber+favSubject;
console.log(num4);
var meet = prompt("write three thing ypu like about meet separated by comma and apace");
meet = meet.split(", ");
meet.sort();
console.log(meet);
*/

//var number1 = prompt("guess a number between 1 - 100");
//if (number>number1) {
//	alert("the number you guessed is to high")
//}
//else if (number<number1){
//	alert("the number you guessed is to low")
//}
//else {
//	alert("you are right!")
//}
var number = Math.floor((Math.random() * 10) + 1);

while (number!=number1){
	var number1 = prompt("guess a number between 1 - 10");
	if (number>number1) {
		alert("the number you guessed is to low")
	}
	else if (number<number1){
		alert("the number you guessed is to high")
	}
	else {
		alert("you are right!")
	}
}

alert("now after you guessed corectly the number im giving you the permission to use my amazing website")