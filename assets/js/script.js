

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    runGame("quiz");

});


function runGame(gameType)

    if (gameType === "quiz") {
        displayQuestion;
}
else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting!`;
}

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let CORRECTANSWED = CorrectAnswer;
    let isCorrect = userAnswer === Correctnswer;

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}.);
        incrementWrongAnswer;
    }

    runGame(CORRECTANSWER[1]);

}

 data: [
    {
      function QUESTION: "Was New York City the first capital of the United States?"
      function OPTIONS : [
        "Correct"]
        ["Incorrect"],
      function CORRECT ANSWER :Correct.
    },
    {
      function QUESTION : "Was the Declaration of Independence signed on July 4th, 1767?",
      function OPTIONS : [
        "Correct"]
        ["Incorrect"
      ],
      function CORRECT ANSWER : Incorrect.
    },
    {
      function QUESTION: "Was Plymouth Road the first place that the pilgrins ladned to?",
      function ANSWER : [
        "Correct"]
        ["Incorrect"
      ],
      function CORRECT ANSWER : Incorrect.
    },
    {
      function QUESTION: "Were the names of Columbus' ships Santa Maria and Santa Lucia?",
      function ANSWER : [
        "Correct"]
        ["Incorrect"
      ],
      function CORRECT ANSWER : Correct.
    },
    {
      function QUESTION : "Did the Civil War end in April 1865?",
      function OPTIONS : [
        "Correct"]
        ["Incorrect"
      ]
      function CORRECT ANSWER : Incorrect.
    }
    ]