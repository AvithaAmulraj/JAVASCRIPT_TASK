var getPlayerName = function (playerName) {
    var prefixSuffix = "====";
    var border = "|";
    return prefixSuffix + " " + playerName + " " + prefixSuffix + "\n" + border + "\n" + border + " " + playerName + "\n" + border;
};

console.log(getPlayerName("Kandra")); 
console.log(getPlayerName("Kiki")); 
console.log(getPlayerName("Mahesha")); 
console.log(getPlayerName("Jahver")); 