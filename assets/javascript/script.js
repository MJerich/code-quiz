let nameFormEl = document.querySelector("#name-form");
let saveData = {savedName: "", highScore: ""};
const mainContentEl = document.querySelector("#questions");
let correctAnswerEl = document.getElementsByClassName("correct");

function startQuiz(event){
    event.preventDefault();

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
    const oneAnswerOne = "<script>*"
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

function createButton(buttonName, buttonStr, answerState) {
    buttonName = document.createElement("button");
    buttonName.textContent = buttonStr;
    buttonName.setAttribute("class", answerState + ", btn");
    return buttonName;
}

function removeContent(parentEl) {
    parentEl.innerHTML = '';

};

function answerChecker(event) {
    let element = event.target;
    if (element.classList.contains("correct")) {
        console.log("that is the correct answer!!!")
    }
}

nameFormEl.addEventListener("submit", startQuiz);
document.addEventListener("click", answerChecker);