"use strict";

var squares = document.querySelectorAll(".square");
var timeLeft = document.querySelector("#timeleft");
var score = document.querySelector("#score");
var startButton = document.querySelector("#start");
var currentScore = 0;
var moveTimePeriod = null;
var moveTimePeriodSq = null;
var moveTimePeriodTr = null;
var clickPosition;
var clickPositionSq;
var clickPositionTr;
var currentTime = 20; // creating the first random moving circle on grid that moves after a set time

var randomPlace = function randomPlace() {
  squares.forEach(function (square) {
    square.classList.remove("grn__circle");
  });
  var randomPlace = squares[Math.floor(Math.random() * 16)]; // console.log(randomPlace);

  randomPlace.classList.add("grn__circle");
  clickPosition = randomPlace.id; //
};

var randomPlaceTwo = function randomPlaceTwo() {
  squares.forEach(function (square) {
    square.classList.remove("grn__square");
  });
  var randomPlaceTwo = squares[Math.floor(Math.random() * 16)];
  randomPlaceTwo.classList.add("grn__square");
  clickPositionSq = randomPlaceTwo.id;
};

var randomPlaceThree = function randomPlaceThree() {
  squares.forEach(function (square) {
    square.classList.remove("grn__triangle");
  });
  var randomPlaceThree = squares[Math.floor(Math.random() * 16)];
  randomPlaceThree.classList.add("grn__triangle");
  clickPositionTr = randomPlaceThree.id;
}; // gets auto moving..


var startMove = function startMove() {
  if (diffDisplay.innerHTML === "Difficulty: Normal") {
    moveTimePeriod = setInterval(randomPlace, 750);
    moveTimePeriodSq = setInterval(randomPlaceTwo, 750);
    moveTimePeriodTr = setInterval(randomPlaceThree, 750);
  } else if (diffDisplay.innerHTML === "Difficulty: Hard") {
    moveTimePeriod = setInterval(randomPlace, 550);
    moveTimePeriodSq = setInterval(randomPlaceTwo, 550);
    moveTimePeriodTr = setInterval(randomPlaceThree, 550);
  } else if (diffDisplay.innerHTML === "LOL.") {
    moveTimePeriod = setInterval(randomPlace, 350);
    moveTimePeriodSq = setInterval(randomPlaceTwo, 350);
    moveTimePeriodTr = setInterval(randomPlaceThree, 350);
  }
}; // startMove()
// difficulty buttons


var diffDisplay = document.querySelector("#diff__display");
var difficulties = document.querySelectorAll(".difficulty");
difficulties.forEach(function (difficulty) {
  difficulty.addEventListener("click", function () {
    if (difficulty.innerHTML === "NORMAL") {
      diffDisplay.innerHTML = "Difficulty: Normal";
    } else if (difficulty.innerHTML === "HARD") {
      diffDisplay.innerHTML = "Difficulty: Hard";
    } else if (difficulty.innerHTML === "INSANE") {
      diffDisplay.innerHTML = "LOL.";
    }
  });
}); // when click on correct circle.. score gets updated

squares.forEach(function (square) {
  square.addEventListener("click", function () {
    if (square.id == clickPosition) {
      currentScore += 1;
      score.innerHTML = currentScore;
      clickPosition = null;
    } else if (square.id == clickPositionSq) {
      gameOver(); // when click on wrong object.. game ends
    } else if (square.id == clickPositionTr) {
      gameOver();
    }
  });
});

var gameOver = function gameOver() {
  clearInterval(countdownTimePeriod);
  clearInterval(moveTimePeriod);
  clearInterval(moveTimePeriodSq);
  clearInterval(moveTimePeriodTr);
  alert("Game Over!! Score = ".concat(currentScore));
}; // timer counts down to 0


var timer = function timer() {
  currentTime--; // minus one from current time

  timeLeft.innerHTML = currentTime;

  if (currentTime == 0) {
    clearInterval(countdownTimePeriod);
    clearInterval(moveTimePeriod);
    clearInterval(moveTimePeriodSq);
    clearInterval(moveTimePeriodTr);
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