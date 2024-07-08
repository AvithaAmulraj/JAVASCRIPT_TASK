var player1;

player1 = {
    name: "Max",
    attempted: 0,
    correct: 0
};

player1.attempted = 1;
player1.correct = 1;
player1.score = 50;

console.log(player1);

// Updated the values 
player1.attempted = 2;
player1.correct = 3;
player1.score = 100;
player1.name = "Well";

console.log(player1);