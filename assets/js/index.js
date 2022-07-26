//create a click event to start the game
//start a countdown from 60 seconds
//remove h1 and add a "questions h2"
//add list item buttons for answers
//create buttons
// assign answers to buttons

// REPEAT FOR HOWEVER MANY QUESTIONS
// IF chosen answer is wrong
// log wrong answer
// subtract time from timer
// display wrong answerr
// go to next question
//ELSE  log correct answer
// display that it is correct
//  go to next question
//if timer runs out end quiz

// click start begins quiz and timer
// remove h1 and add h2 "question"
// add list item buttons for answers
// when answer is chosen, load next question

// list with 4 buttons/answers for each question

// wrong answer subtracts time
// if user choice === correct answer
// then load next questions
// else if question is === to other answer
// then timer is decremented

// either all questions answered or timer = 0 ends quiz
//      timer ends, display message and go back to homepage
//
// at game ends with time, high score and initials can be entered
//      store remaining time in score variable
//      place to enter initials
//      submit button
//          checks for valid text extry
//
// upon submission, goto highschores page
//      display top high score(s)
//
// button to go back to quiz
//      link to opening page
// button to clear highscores

// BUTTONS
var startButton = document.querySelector("#start-button");
var answerOne = document.querySelector("#answer-one");
var answerTwo = document.querySelector("#answer-two");
var answerThree = document.querySelector("#answer-three");
var answerFour = document.querySelector("#answer-four");
var time = document.querySelector(".time");
var title = document.querySelector(".title");
var secondsLeft = 60;
var quizBox = document.querySelector(".quiz");
var openQuiz = document.querySelector(".open-quiz");
var question = document.querySelector("#question");
var questionOne = {
  question: "What is my name?",
  answers: ["Bob", "Luke", "Bill", "Mike"],
  rightAnswer: "Luke",
};
var questionTwo = {
  question: "What is my name?",
  answers: ["Bob", "Luke", "Bill", "Mike"],
  rightAnswer: "Luke",
};
var questionThree = {
  question: "What is my name?",
  answers: ["Bob", "Luke", "Bill", "Mike"],
  rightAnswer: "Luke",
};
var questionFour = {
  question: "What is my name?",
  answers: ["Bob", "Luke", "Bill", "Mike"],
  rightAnswer: "Luke",
};

var questions = [questionOne, questionTwo, questionThree, questionFour];
var answers = [answerOne, answerTwo, answerThree, answerFour];

// click event
startButton.addEventListener("click", function () {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  startQuiz();
});

// start quiz function
function startQuiz() {

  title.setAttribute("style", "display: none;");

  openQuiz.setAttribute("style", "display: inline;");

  var questionEl = document.createElement("h2");
    questionEl.textContent = questions[0].question;

    openQuiz.appendChild(questionEl);
  

    
    var buttonOne = document.createElement("button");
    var buttonTwo = document.createElement("button");
    var buttonThree = document.createElement("button");
    var buttonFour = document.createElement("button");

    buttonOne.className = "btn answer-button";
    buttonTwo.className = "btn answer-button";
    buttonThree.className = "btn answer-button";
    buttonFour.className = "btn answer-button";

    buttonOne.textContent = questions[0].answers[0];
    buttonTwo.textContent = questions[0].answers[1];
    buttonThree.textContent = questions[0].answers[2];
    buttonFour.textContent = questions[0].answers[3];

     buttonOne.addEventListener('click', function () {

      if (buttonOne.textContent === questions[0].rightAnswer) {
        console.log("Right");
      } else {
        console.log("Wrong");
      }
     });

     buttonTwo.addEventListener('click', function () {

      if (buttonTwo.textContent === questions[0].rightAnswer) {
        console.log("Right");
      } else {
        console.log("Wrong");
      }
     });

     buttonThree.addEventListener('click', function () {

      if (buttonThree.textContent === questions[0].rightAnswer) {
        console.log("Right");
      } else {
        console.log("Wrong");
      }
     });

     buttonFour.addEventListener('click', function () {

      if (buttonFour.textContent === questions[0].rightAnswer) {
        console.log("Right");
      } else {
        console.log("Wrong");
      }
     });
    

    openQuiz.appendChild(buttonOne);
    openQuiz.appendChild(buttonTwo);
    openQuiz.appendChild(buttonThree);
    openQuiz.appendChild(buttonFour);

};

  
