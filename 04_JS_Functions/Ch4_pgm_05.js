var findTotal;
var displayMenu;


var number1 = 45;
var number2 = 90;
var result;

findTotal = function () {
	result = number1 + number2;
};
findTotal(); 
console.log(result); 

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(9) Quit");
};
displayMenu();