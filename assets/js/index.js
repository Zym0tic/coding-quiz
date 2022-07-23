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

var startButton = document.querySelector("#start-button");
var time = document.querySelector('.time');
var secondsLeft =61;
var quizBox = document.querySelector('quiz');
var questionOne = {
    question: "What is my name?",
    answerOne: "Bob",
    answerTwo: "Luke",
    answerThree: "Bill",
    answerFour: "Mike",
    rightAnswer: "Luke"
};
var questionTwo = {
    question: "What is my name?",
    answerOne: "Bob",
    answerTwo: "Luke",
    answerThree: "Bill",
    answerFour: "Mike",
    rightAnswer: "Luke"
};
var questionThree = {
    question: "What is my name?",
    answerOne: "Bob",
    answerTwo: "Luke",
    answerThree: "Bill",
    answerFour: "Mike",
    rightAnswer: "Luke"
};
var questionFour = {
    question: "What is my name?",
    answerOne: "Bob",
    answerTwo: "Luke",
    answerThree: "Bill",
    answerFour: "Mike",
    rightAnswer: "Luke"
};
var questions = [questionOne, questionTwo, questionThree, questionFour];


// click event
startButton.addEventListener('click', function () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        time.textContent = "Time: " + secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval)     
        } 
      }, 1000);

      startQuiz();
    });


    // start quiz function
    function startQuiz() {
        console.log("quix started");

    };