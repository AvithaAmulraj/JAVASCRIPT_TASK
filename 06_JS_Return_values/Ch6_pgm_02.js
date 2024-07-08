var getHelloTo;
var fullMessage;
var name1 = "Kandra";
var name2 = "Dax";

getHelloTo = function (name1, name2) {
    return "Hello to " + name1 + " and " + name2;
};

fullMessage = getHelloTo(name1, name2);

console.log(fullMessage);