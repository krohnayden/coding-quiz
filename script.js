const timerEl = document.querySelector("#timerValue");
var mainEl = document.querySelector("quizMaterial");
var activationBtnEl = document.querySelector("#activationBtn");
// Added event lisner to perform a function on the click of the start button.
// The function starts the timer for the quiz and deletes and appends data on the screen.
activationBtnEl.addEventListener("click", function() {
    var timeLeft = 30;
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
// Need two function to bring the questions to the screen, 
// Need an array of objects, objects being the answers.
// Attributing a data tag for correct and incorrect answers. (.setAttribute)
// Build function that when the boolean equals false, subtract x amount of seconds.
// When all questions are answered or the timer equals 0, the quiz is over.
// Use the timer function to bring the page for high scores foward when the timer equals 0.
// When the user reaches the end of the array of questions, they will be brought to the high scores page.
// Use local storage to store user data - (initials + score)
// Add click event to high score button to bring up the high score page. 
// Append exiting HTML with