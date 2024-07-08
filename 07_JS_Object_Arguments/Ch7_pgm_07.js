var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();
var getBig = function (str) {
    return str.toUpperCase();
};
console.log(planet + " becomes " + bigPlanet);

var getSmall = function (str) {
    return str.toLowerCase();
};

// Testing getSmall function
var country = "UNITED STATES";
var smallCountry = getSmall(country);
console.log(country + " becomes " + smallCountry);