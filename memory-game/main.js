console.log("JS file is connected to HTML! Woo!")

var cardOne ="queen";
var cardTwo ="king";
var cardThree ="king";
var cardFour ="queen";

/* If cardOne=cardTwo return alert "Sorry you didn't get a match"*/
/* If cardOne=cardThree return alert "Sorry you didn't get a match"*/
/* If cardOne=cardFour return alert "You got a match!"*/
/* If cardTwo=cardThree return alert "You got a match!"*/
/* If cardTwo=cardFour return alert "Sorry you didn't get a match"*/
/* If cardThree=cardFour return alert "Sorry you didn't get a match"*/

if (cardOne===cardTwo) {
	alert ("Sorry you didn't get a match");
}	else if (cardOne === cardThree) {
	alert ("Sorry you didn't get a match");
}	else if (cardOne === cardFour) {
	alert ("You got a match");
}	else if (cardTwo === cardThree) {
	alert ("You got a match");
}	else if (cardTwo === cardFour) {
	alert ("Sorry you didn't get a match");
}	else if (cardThree === cardFour) {
	alert ("Sorry you didn't get a match");
}	