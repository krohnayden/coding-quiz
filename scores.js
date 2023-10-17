var scoreStorage = localStorage.getItem("scores");
const highScoreEl = document.querySelector("#highScoreDisplay").textContent = "You got: " + scoreStorage + "!";
const highScores = JSON.parse(localStorage.getItem("scores")) || [];

