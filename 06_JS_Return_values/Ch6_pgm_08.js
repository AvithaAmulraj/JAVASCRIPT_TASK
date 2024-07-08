var getPlayerHealth;
var getPlayerPlace;
var showPlayerInfo;

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

showPlayerInfo = function (playerName, playerHealth, playerPlace) {
    console.log(getPlayerHealth(playerName, playerHealth));
    console.log(getPlayerPlace(playerName, playerPlace));
};

// Testing the functions
console.log(getPlayerHealth("Kandra", 50));
console.log(getPlayerPlace("Kandra", "The Dungeon of Doom"));
console.log("");

showPlayerInfo("Dax", 50, "The Bath");