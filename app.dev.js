"use strict";

var squares = document.querySelectorAll(".square");
var timeLeft = document.querySelector("#timeleft");
var score = document.querySelector("#score");
var startButton = document.querySelector("#start");
var currentScore = 0;
var moveTimePeriod = null;
var clickPosition;
var currentTime = 20; // creating the first random moving circle on grid that moves after a set time

var randomPlace = function randomPlace() {
  squares.forEach(function (square) {
    square.classList.remove("grn__circle");
  });
  var randomPlace = squares[Math.floor(Math.random() * 16)]; // console.log(randomPlace);

  randomPlace.classList.add("grn__circle");
  clickPosition = randomPlace.id; //
}; // gets auto moving..


var startMove = function startMove() {
  moveTimePeriod = setInterval(randomPlace, 1000);
}; // startMove()
// when click on correct circle.. score gets updated


squares.forEach(function (square) {
  square.addEventListener("click", function () {
    if (square.id == clickPosition) {
      currentScore += 1;
      score.innerHTML = currentScore;
      clickPosition = null;
    }
  });
}); // when click on wrong object.. game ends
// timer counts down to 0

var timer = function timer() {
  currentTime--; // minus one from current time

  timeLeft.innerHTML = currentTime;

  if (currentTime == 0) {
    clearInterval(countdownTimePeriod);
    clearInterval(moveTimePeriod);
    alert("Game Over!! Score = ".concat(currentScore));
  }
}; // let countdownTimePeriod = setInterval(timer, 1000);


startButton.addEventListener("click", function () {
  currentScore = 0;
  startMove();
  countdownTimePeriod = setInterval(timer, 1000);
  currentTime = 20;
  score.innerHTML = 0;
});