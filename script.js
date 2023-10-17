// Constants to get access to my HTML elements. 
const timerEl = document.querySelector("#timerValue");
const mainEl = document.querySelector("#quizMaterial");
const activationBtnEl = document.querySelector("#activationBtn");
const questionEl = document.querySelector("#questions");
const answersEl = document.querySelector("#answers");
var timeLeft = 30;
var score = 0;

// Index of question, answers, and whether they are correct or incorrect.
var questions = [
    {
        question: "What coding language is used for the backbone structure of most websites?",
        answers: [
            { text: "HTML", correct: true},
            { text: "CSS", correct: false},
            { text: "JavaScript", correct: false},
            { text: "Spancode", correct: false},
        ]
    },
    {
        question: "What attribute can be used to create a flexbox?",
        answers: [
            { text: "Justify Content", correct: false},
            { text: "Text-Align", correct: false},
            { text: "Display", correct: true},
            { text: "Position", correct: false},
        ]
    },
    {
        question: "What option below displays the correct way to call a function x?",
        answers: [
            { text: "function x()", correct: false},
            { text: "x()", correct: true},
            { text: "x", correct: false},
            { text: "function x", correct: false},
        ]
    },
    {
        question: "What does DOM stand for?",
        answers: [
            { text: "Document Objective Modem", correct: false},
            { text: "Desktop Object Model", correct: false},
            { text: "Document Object Movement", correct: false},
            { text: "Document Object Model", correct: true},
        ]
    },
    {
        question: "What console.log command logs the window in the console?",
        answers: [
            { text: "console.log()", correct: false},
            { text: "console.log(this)", correct: true},
            { text: "console.log(desktop)", correct: false},
            { text: "console.log(openWindow)", correct: false},
            ]
    },
]

let currentQuestionIndex = 0;

// Added event listener to perform a function on the click of the start button.
// The function starts the timer for the quiz and deletes and appends data on the screen.
activationBtnEl.addEventListener("click", function() {
    mainEl.remove();
    startQuiz(currentQuestionIndex);
        var timeInterval = setInterval(function () {
            if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
            } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
            } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            endQuiz();
            }
        }, 1000);
})

function startQuiz(currentQuestionIndex) {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.setAttribute("data-correct", answer.correct);
        button.classList.add("btn");
        answersEl.appendChild(button);
    })
}

// Need something to check correctness and automatically move to the next question.
answersEl.addEventListener("click", function(e) {
    var dataCorrectness= (e.target.getAttribute("data-correct"));


    if (currentQuestionIndex < questions.length -1) {
        currentQuestionIndex = currentQuestionIndex + 1
    } else if(currentQuestionIndex >= questions.length -1) {
        return endQuiz();
    }

    if ( dataCorrectness === "true") {
        answersEl.textContent = "Correct!";
        score ++;
    } else if ( dataCorrectness === null) {
        return;
    } else {
        answersEl.textContent = "Incorrect!";
        timeLeft = timeLeft - 5;
    }
    startQuiz(currentQuestionIndex);
})

function endQuiz() {
    localStorage.setItem("scores", score);
    location.replace("./score.html");
}
