var getGuesser = function () {
    var secret = 8;

    return function (userNumber) {
      if (userNumber === secret) {
        console.log("Well done!");
      } else {
        console.log("Unlucky, try again.");
      }
    };
  };

  var guess = getGuesser();

  // while typing getGuesser it shows the getGuesser() function.

  //while typing guess it also shows the getGuesser() function because the guess = getGuesser().

  //while typing secret it shows undefined.