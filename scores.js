var scoreStorage = localStorage.getItem("scores");
var initialsEl = document.querySelector("#initials");
var initialStorage = localStorage.setItem("initials", initialsInput);
const highScoreEl = document.querySelector("#highScoreDisplay").textContent = "You got: " + scoreStorage + "!";
const highScores = JSON.parse(localStorage.getItem("scores")) || [];
function makeHSList() {
    highScores.map( scores => {
    return getItem("initials") + getItem("scores");
})}

// when I play the game again, 
// then I am shown all of my previous scores
