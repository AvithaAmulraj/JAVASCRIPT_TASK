var displayQuestion = function (questionAndAnswer) {
    var options = [ "A", "B", "C", "D", "E" ];

    console.log(questionAndAnswer.question);

    questionAndAnswer.answers.forEach(
      function (answer, i) {
        console.log(options[i] + " - " + answer);
      }
    );
  };

  var question1 = {
    question : "What is the capital of France?",
    answers : [
      "Bordeaux",
      "F",
      "Paris",
      "Brussels"
    ],
    correctAnswer : "Paris"
  };

  var question2 = {
    question : "Where did the effiel tower located?",
    answers : [
      "Paris",
      "France",
      "Australia",
      "India"
    ],
    correctAnswer : "Paris"
  };

  var question3 = {
    question : "What is the capital of India?",
    answers : [
      "Tamil Nadu",
      "Bombay",
      "Paris",
      "New Delhi"
    ],
    correctAnswer : "New Delhi"
  };
displayQuestion(question1);
displayQuestion(question2);
displayQuestion(question3);