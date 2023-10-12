// Constants to get access to my HTML elements. 
const timerEl = document.querySelector("#timerValue");
const mainEl = document.querySelector("#quizMaterial");
const activationBtnEl = document.querySelector("#activationBtn");
const questionEl = document.querySelector("#questions");
const answersEl = document.querySelector("#answers");

// Index of question, answers, and whether they are correct or incorrect.
var questions = [
    {
        question: "What coding language is used for the backbone struture of most websites?",
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
let score = 0;

// Added event lisner to perform a function on the click of the start button.
// The function starts the timer for the quiz and deletes and appends data on the screen.
activationBtnEl.addEventListener("click", function() {
    var timeLeft = 10;
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
            displayMessage();
            }
        }, 1000);
})

function startQuiz(currentQuestionIndex) {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.setAttribute("data-correct", answer.correct);
        button.classList.add("btn");
        answersEl.appendChild(button);
    })
}

function displayMessage() {
    timerEl.textContent = "Time's Up!"
}
// Need something to check correctness and automatically move to the next question.
answersEl.addEventListener("click", function(e) {
    var dataCorrectness= (e.target.getAttribute("data-correct"));
    currentQuestionIndex = currentQuestionIndex + 1
    console.log(typeof dataCorrectness);
    if ( dataCorrectness === "true") {
        answersEl.textContent = "Correct!";
    } else if ( dataCorrectness === null) {
        return;
    } else {
        answersEl.textContent = "Incorrect!";
    }
    startQuiz(currentQuestionIndex);
})


// Need two function to bring the questions to the screen, 
// Attributing a data tag for correct and incorrect answers. (.setAttribute)
// Build function that when the boolean equals false, subtract x amount of seconds.
// When all questions are answered or the timer equals 0, the quiz is over.
// Use the timer function to bring the page for high scores foward when the timer equals 0.
// When the user reaches the end of the array of questions, they will be brought to the high scores page.
// Use local storage to store user data - (initials + score)
// Add click event to high score button to bring up the high score page. 
// Append exiting HTML with