var player1;

player1 = {
	  name: "Max",
	  score: 0
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);


// increasing player1 score to 10%
let increaseAmount = player1.score * 0.1;
player1.score += increaseAmount;
player1.score = Math.round(player1.score);
console.log(player1.name + " has scored " + player1.score);

// Adding player2
var player2;

player2 = {
	  name: "Well",
	  score: 60
};

console.log(player2.name + " has scored " + player2.score);

// Sum of players score
let score = player1.score + player2.score;
console.log(player1.name + " and " + player2.name + " scored totally " + score + " scores");