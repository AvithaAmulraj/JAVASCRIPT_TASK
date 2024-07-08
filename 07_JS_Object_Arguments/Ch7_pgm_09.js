var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");

console.log(message.substr(charIndex, 3));

var startIndex = message.indexOf("go");
console.log(startIndex);

var message = "We choose to go to the Moon!";

var startIndexOfChoose = message.indexOf("choose");
var choose = message.substr(startIndexOfChoose, 6); // "choose" has 6 characters
console.log(choose); // Logs "choose"

var message = "We choose to go to the Moon!";

var lastIndex = message.lastIndexOf("oo");
console.log(lastIndex);