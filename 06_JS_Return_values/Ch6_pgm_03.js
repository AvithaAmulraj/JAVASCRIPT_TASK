var getHelloTo;

getHelloTo = function (name) {
    return "Hello to " + name;
    var template = "Hello to {{name}}";
    template = template.replace("{{name}}", Daniel);
    return template;
};

console.log(getHelloTo("Kandra"));
console.log(getHelloTo("Dax"));  