var players;
var showArguments;

players = [ "Dax", "Jahver", "Kandra"];

players.push("Jaddu");
players.push("Virat");

showArguments = function (item, index, wholeArray) {
  console.log("Item: " + wholeArray[index]);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

players.forEach(showArguments);