//GIVEN I am taking a code quiz

//Step1 :
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var startButton= document.querySelector(".Start-Quiz"); //HTML element reference
startButton.addEventListener("click", function(){
removeStartButton();
makeQuestionsAppear();
startTimer();
}); 
function removeStartButton () {
// Logic to remove button
};

function makeQuestionsAppear() {
// Logic to add question one after another
}

function startTimer () {
// Logic for timer (setInterval function)
}


//Step2 :
// WHEN I answer a question
// THEN I am presented with another question

//Step3 :
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

//Step4 :
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

//Step5 :
// WHEN the game is over
// THEN I can save my initials and score

