"use strict";

var squares = document.querySelectorAll(".square");
var timeLeft = document.querySelector("#timeleft");
var score = document.querySelector("#score");
var moveTimePeriod = null; // creating the first random moving circle on grid that moves after a set time

var randomPlace = function randomPlace() {
  squares.forEach(function (square) {
    square.classList.remove("grn__circle");
  });
  var randomPlace = squares[Math.floor(Math.random() * 16)]; // console.log(randomPlace);

  randomPlace.classList.add("grn__circle");
};

var startMove = function startMove() {
  moveTimePeriod = setInterval(randomPlace, 1000);
};

startMove(); // when click on correct circle.. score gets updated
// when click on wrong object.. game ends
// timer counts down to 0
// score +=1