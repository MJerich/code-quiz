let nameFormEl = document.querySelector("#name-form");
let saveData = {savedName: "", highScore: ""}
const mainContentEl = document.querySelector("#questions");

function startQuiz(event){
    event.preventDefault();

    // save users name for high score
    let userNameEl = document.querySelector("input[name='name']").value;
    saveData.savedName = userNameEl

    // remove the maincontent to make room for first question
    removeContent(mainContentEl);

    // add first question
    firstQuestion();
};

function firstQuestion() {
    // set variables for question and button strings
    const questionOne = "1. Inside which HTML element do we put the JavaScript?"
    const oneAnswerOne = "<script>*"
    const oneAnswerTwo = "<js>"
    const oneAnswerThree = "<javascript>"
    const oneAnswerFour = "<scripting>"

    // add the content the the html
    // create element for the question
    let questionOneEl = document.createElement("h2");
    questionOneEl.innerHTML = questionOne;

    // create the buttons

    mainContentEl.appendChild(questionOneEl);
}

function removeContent(parentEl) {
    parentEl.innerHTML = '';

};

nameFormEl.addEventListener("submit", startQuiz);