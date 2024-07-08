var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items);

removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));

items.push("The great artist");
console.log(items.join(" and "));
item[1] = "The theme park";
console.log(items.join(" and "));
items.push("The Warner Bros", "Disney Island");
console.log(items.join(" and  "));