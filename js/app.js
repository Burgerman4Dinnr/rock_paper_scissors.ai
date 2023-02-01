let gameOver = false;
const buttons = document.querySelectorAll("#buttons button");
const playBtn = document.getElementById("play");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset");
playBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
for (let button of buttons) {
button.addEventListener("click", clickPlayBuddy);
}
function clickPlayBuddy(e) {
    if (!gameOver && e.target !== playBtn) {
      result.innerHTML = "Hello, my name is Mr. InnerHTML. It seems that you are having trouble starting the game. Have you tried clicking on the button that says `Click here to Start`? I don't know about you, but that MAY or MAY not start the game.";
      result.style.color = "Yellow";
    }
  }
function startGame() {
for (let button of buttons) {
button.addEventListener("click", playGame);
}
result.innerHTML = "";
playBtn.style.display = "none";
}
function playGame(e) {
if (gameOver) {
return;
}
const playerSelection = e.target.id;
const aiSelection = getAISelection();
document.getElementById("ai-selection").innerHTML = `AI selected: ${aiSelection}`;
document.getElementById("ai-selection").style.color = "Yellow";
const winner = determineWinner(playerSelection, aiSelection);
result.innerHTML = winner;
highlightSelection(playerSelection, aiSelection);
resetBtn.style.display = "block";
changeResultColor(winner);
gameOver = true;
}
function getAISelection() {
const selections = ["rock", "paper", "scissors"];
return selections[Math.floor(Math.random() * selections.length)];
}
function determineWinner(playerSelection, aiSelection) {
if (playerSelection === aiSelection) {
return "It's a Tie, Next time try playing Tic-Tac-Toe instead";
} else if (
(playerSelection === "rock" && aiSelection === "scissors") ||
(playerSelection === "scissors" && aiSelection === "paper") ||
(playerSelection === "paper" && aiSelection === "rock")
) {
return "Winner Winner Chicken Dinner!";
} else {
return "You lose, but don't worry, you can always blame it on your mouse/finger slip";
}
}
function highlightSelection(playerSelection, aiSelection) {
document.getElementById(playerSelection).classList.add("selected");
document.getElementById(aiSelection).classList.add("ai-selected");
}
function changeResultColor(winner) {
if (winner === "Winner Winner Chicken Dinner!") {
result.style.color = "green";
} else if (winner === "It's a Tie, Next time try playing Tic-Tac-Toe instead") {
result.style.color = "purple";
} else {
result.style.color = "red";
}
}
function resetGame() {
for (let button of buttons) {
button.classList.remove("selected");
button.classList.remove("ai-selected");
document.getElementById("ai-selection").innerHTML = "";
}
result.innerHTML = "";
result.style.color = "black";
resetBtn.style.display = "none";
gameOver = false;
}