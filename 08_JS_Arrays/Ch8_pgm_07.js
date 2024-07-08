var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach",
  "Effiel Tower",
  "Taj Mahal",
  "The Great Wall of China"
];

showInfo = function (itemToShow) {
    console.log(itemToShow + " has " + itemToShow.length + " of letters");
};

items.forEach(showInfo);

var totalLetters = function(itemsArray){
    var total = 0;
    itemsArray.forEach(function(item){
        total += item.length;
    });
    return total;
};
console.log("Total number of letters in the array is " + totalLetters(items));