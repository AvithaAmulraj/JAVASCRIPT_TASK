var message = "We choose to go to the Moon!";

console.log(message.substr(3, 12));
console.log(message.substr(20)); // Logs "Moon!"
console.log(message.substr(11, 6)); // Logs "go to the"
console.log(message.substr(0, 10));
console.log(message.substr(3)); // Logs "choose to go to the Moon!"
console.log(message.substr(-5)); // Logs "Moon!"
console.log(message.substr(11, -3)); 