"use strict";

var squares = document.querySelectorAll(".square");
var timeLeft = document.querySelector("#timeleft");
var score = document.querySelector("#score"); // creating the first random moving circle on grid that moves after a set time
// when click on correct circle.. score gets updated
// when click on wrong object.. game ends
// timer counts down to 0
// score +=1