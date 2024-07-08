
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createGuesser(min, max) {
    let secret = getRandomNumber(min, max);

    return function guess(userNumber) {
        if (userNumber === secret) {
            return "Well done!";
        } else {
            return "Unlucky, try again.";
        }
    };
}



var guess = createGuesser(30, 50);

console.log(guess(35)); 
console.log(guess(40));


function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(between(34, 50));       
console.log(between(100, 200));   