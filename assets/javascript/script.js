let nameFormEl = document.querySelector("#name-form");
let saveData = {savedName: "", highScore: 0};
const mainContentEl = document.querySelector("#questions");
let correctAnswerEl = document.getElementsByClassName("correct");
let questionCounter = 1
let timeLeft = 20
let timerEl = document.querySelector("#timer");
let highScoreEl = document.querySelector("#high-score");
let isFinished = false
let oldHighScore = 0
loadHighScore();

timerEl.textContent = "TIMER: " + timeLeft;

function loadHighScore() {
    let saveData = localStorage.getItem("saveData")
    saveData = JSON.parse(saveData)

    if (saveData === null) {
        saveData = {savedName: "", highScore: 0};
        highScoreEl.textContent = "HIGH SCORE: " + saveData.savedName + " " + saveData.highScore;
        return
    } else {
        highScoreEl.textContent = "HIGH SCORE: " + saveData.savedName + " " + saveData.highScore;
        oldHighScore = saveData.highScore;
        return
    }
}

function startQuiz(event){
    event.preventDefault();

    // start timer
    timerCountdown();

    // save users name for high score
    let userNameEl = document.querySelector("input[name='name']").value;
    saveData.savedName = userNameEl

    if (userNameEl === "") {
        alert("You need to enter a name");
        return
    } else {
        // remove the maincontent to make room for first question
        removeContent(mainContentEl);
        // add first question
        firstQuestion();
    }
};

function firstQuestion() {
    // set variables for question and button strings
    const questionOne = "1. Inside which HTML element do we put the JavaScript?"
    const oneAnswerOne = "<script>"
    const oneAnswerTwo = "<js>"
    const oneAnswerThree = "<javascript>"
    const oneAnswerFour = "<scripting>"
    let answerOneEl = null;
    let answerTwoEl = null;
    let answerThreeEl = null;
    let answerFourEl = null;

    // add the content the the html
    // create element for the question
    let questionOneEl = document.createElement("h2");
    questionOneEl.textContent = questionOne;
    mainContentEl.appendChild(questionOneEl);

    // create the buttons
    mainContentEl.appendChild(createButton(answerOneEl, oneAnswerOne, "correct"));
    mainContentEl.appendChild(createButton(answerTwoEl, oneAnswerTwo, "wrong"));
    mainContentEl.appendChild(createButton(answerThreeEl, oneAnswerThree, "wrong"));
    mainContentEl.appendChild(createButton(answerFourEl, oneAnswerFour, "wrong"));
}

function secondQuestion() {
        // set variables for question and button strings
        const questionOne = '2. How do you write "Hello World" in an alert box?'
        const twoAnswerOne = 'alertBox("Hello World");'
        const twoAnswerTwo = 'msg("Hello World");'
        const twoAnswerThree = 'msgBox("Hello World");'
        const twoAnswerFour = 'alert("Hello World");'
        let answerOneEl = null;
        let answerTwoEl = null;
        let answerThreeEl = null;
        let answerFourEl = null;
    
    
        // add the content the the html
        // create element for the question
        let questionOneEl = document.createElement("h2");
        questionOneEl.textContent = questionOne;
        mainContentEl.appendChild(questionOneEl);
    
        // create the buttons
        mainContentEl.appendChild(createButton(answerOneEl, twoAnswerOne, "wrong"));
        mainContentEl.appendChild(createButton(answerTwoEl, twoAnswerTwo, "wrong"));
        mainContentEl.appendChild(createButton(answerThreeEl, twoAnswerThree, "wrong"));
        mainContentEl.appendChild(createButton(answerFourEl, twoAnswerFour, "correct"));
}

function thirdQuestion() {
    // set variables for question and button strings
    const questionOne = '3. How do you create a function in JavaScript?'
    const threeAnswerOne = 'function = myFunction()'
    const threeAnswerTwo = 'function myFunction()'
    const threeAnswerThree = 'let myFunction = function()'
    const threeAnswerFour = 'Both B and C are acceptable'
    let answerOneEl = null;
    let answerTwoEl = null;
    let answerThreeEl = null;
    let answerFourEl = null;


    // add the content the the html
    // create element for the question
    let questionOneEl = document.createElement("h2");
    questionOneEl.textContent = questionOne;
    mainContentEl.appendChild(questionOneEl);

    // create the buttons
    mainContentEl.appendChild(createButton(answerOneEl, threeAnswerOne, "wrong"));
    mainContentEl.appendChild(createButton(answerTwoEl, threeAnswerTwo, "wrong"));
    mainContentEl.appendChild(createButton(answerThreeEl, threeAnswerThree, "wrong"));
    mainContentEl.appendChild(createButton(answerFourEl, threeAnswerFour, "correct"));
}

function fourthQuestion() {
    // set variables for question and button strings
    const questionOne = '4. How do you call a function named "myFunction"?'
    const fourAnswerOne = 'call myFunction()'
    const fourAnswerTwo = 'myFunction()'
    const fourAnswerThree = 'call function myFunction()'
    const fourAnswerFour = 'function.myFunction()'
    let answerOneEl = null;
    let answerTwoEl = null;
    let answerThreeEl = null;
    let answerFourEl = null;


    // add the content the the html
    // create element for the question
    let questionOneEl = document.createElement("h2");
    questionOneEl.textContent = questionOne;
    mainContentEl.appendChild(questionOneEl);

    // create the buttons
    mainContentEl.appendChild(createButton(answerOneEl, fourAnswerOne, "wrong"));
    mainContentEl.appendChild(createButton(answerTwoEl, fourAnswerTwo, "correct"));
    mainContentEl.appendChild(createButton(answerThreeEl, fourAnswerThree, "wrong"));
    mainContentEl.appendChild(createButton(answerFourEl, fourAnswerFour, "wrong"));
}

function fifthQuestion() {
    // set variables for question and button strings
    const questionOne = '5. How do you write an IF statement in JavaScript?'
    const fiveAnswerOne = 'if i = 0'
    const fiveAnswerTwo = 'if i == 5 then'
    const fiveAnswerThree = 'if (i == 5)'
    const fiveAnswerFour = 'if i = 5 then'
    let answerOneEl = null;
    let answerTwoEl = null;
    let answerThreeEl = null;
    let answerFourEl = null;


    // add the content the the html
    // create element for the question
    let questionOneEl = document.createElement("h2");
    questionOneEl.textContent = questionOne;
    mainContentEl.appendChild(questionOneEl);

    // create the buttons
    mainContentEl.appendChild(createButton(answerOneEl, fiveAnswerOne, "wrong"));
    mainContentEl.appendChild(createButton(answerTwoEl, fiveAnswerTwo, "wrong"));
    mainContentEl.appendChild(createButton(answerThreeEl, fiveAnswerThree, "correct"));
    mainContentEl.appendChild(createButton(answerFourEl, fiveAnswerFour, "wrong"));
}

function finishedQuiz() {
    let finishedHeader = "You finished with a score of "
    let finishedHeaderEl = document.createElement("h2");
    finishedHeaderEl.textContent = finishedHeader + saveData.highScore
    tryAgainBtn = document.createElement("button");
    tryAgainBtn.setAttribute("class", "try-again, btn");
    tryAgainBtn.textContent = "Try Again?"
    mainContentEl.appendChild(finishedHeaderEl);
    mainContentEl.appendChild(tryAgainBtn);
    highScoreEl.textContent = "YOUR SCORE: " + saveData.savedName + " " + saveData.highScore

    // if statement to make local starge save only if score got higher
    if (saveData.highScore > oldHighScore) {
        localStorage.setItem("saveData", JSON.stringify(saveData))
    }

    // localStorage.setItem("saveData", JSON.stringify(saveData))
    return isFinished = true

}

function createButton(buttonName, buttonStr, answerState) {
    buttonName = document.createElement("button");
    buttonName.textContent = buttonStr;
    buttonName.setAttribute("class", answerState + ", btn");
    return buttonName;
}

function removeContent(parentEl) {
    parentEl.innerHTML = '';
};

function questionCaller() {
    if (questionCounter === 1) {
        secondQuestion();
        questionCounter++
    } else if (questionCounter === 2) {
        thirdQuestion();
        questionCounter++
    } else if (questionCounter === 3) {
        fourthQuestion();
        questionCounter++
    } else if (questionCounter === 4) {
        fifthQuestion();
        questionCounter++
    } else if (questionCounter === 5) {
        finishedQuiz();
    }
}

function answerChecker(event) {
    let element = event.target;
    if (element.classList.value === "correct, btn") {
        console.log("that is the correct answer!!!")
        saveData.highScore ++
        removeContent(mainContentEl);
        questionCaller();
    } else if (element.classList.value === "wrong, btn") {
        timeLeft = timeLeft - 2;
        removeContent(mainContentEl);
        questionCaller();
    } else if (element.classList.value === "try-again, btn") {
        location.reload();
    }
};

function timerCountdown() {
    let timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = "TIMER: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "TIMER: " + timeLeft;
            clearInterval(timeInterval);
            removeContent(mainContentEl);
            finishedQuiz()
            return
        }
        if (isFinished) {
            clearInterval(timeInterval);
            timeLeft = 0
            timerEl.textContent = "TIMER: " + timeLeft;
        }
    },1000)
}

nameFormEl.addEventListener("submit", startQuiz);
document.addEventListener("click", answerChecker);