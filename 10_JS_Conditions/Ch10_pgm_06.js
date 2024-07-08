var getGuesser = function (range, offset = 0) {
    var secret = Math.floor(Math.random() * range + 1) + offset;

    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else if (userNumber > secret) {
        return "Too high!";
      } else {
        return "Too low!";
      }
    };
  };

  var guess = getGuesser(20);
  console.log(guess(10));

  var guessWithOffset = getGuesser(20,5);
  console.log(guessWithOffset(15));