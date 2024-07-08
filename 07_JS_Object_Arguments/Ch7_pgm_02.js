var planet1 = { name: "Jupiter", radius: 69911 };

var calculateSizes = function (planet) {
    var r = planet.radius;
    planet.diameter = 2 * r;
    planet.area = 4 * 3.142 * r * r;
    planet.volume = 4 * 3.142 * r * r * r / 3;
};

var displaySizes = function (planet) {
    console.log(planet.name);
    console.log("diameter = " + planet.diameter + " km");
    console.log("surface area = " + planet.area + " square km");
    console.log("volume = " + planet.volume + " cubic km");
};

calculateSizes(planet1);
displaySizes(planet1);