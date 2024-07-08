var player1;
var player2;
var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName.substring(0,1) + " is in " + playerPlace);
    console.log(playerName.substring(0,2) + " is in " + playerPlace);
    console.log(playerName.substring(0,3) + " is in " + playerPlace);
    console.log(playerName.substring(1,2) + " is in " + playerPlace);
    console.log(playerName.substring(1,3) + " is in " + playerPlace);

    
    
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerPlace(player1.name, player1.place);
showPlayerPlace(player2.name, player2.place);