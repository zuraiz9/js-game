const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#timeleft");
const score = document.querySelector("#score");
const startButton = document.querySelector("#start");

let currentScore = 0;
let moveTimePeriod = null;
let moveTimePeriodSq = null;
let moveTimePeriodTr = null;
let clickPosition;
let clickPositionSq;
let clickPositionTr;
let currentTime = 20;

// creating the first random moving circle on grid that moves after a set time
const randomPlace = () => {
  squares.forEach((square) => {
    square.classList.remove("grn__circle");
  });
  let randomPlace = squares[Math.floor(Math.random() * 16)];
  // console.log(randomPlace);
  randomPlace.classList.add("grn__circle");

  clickPosition = randomPlace.id; //
};

const randomPlaceTwo = () => {
  squares.forEach((square) => {
    square.classList.remove("grn__square");
  });
  let randomPlaceTwo = squares[Math.floor(Math.random() * 16)];
  randomPlaceTwo.classList.add("grn__square");

  clickPositionSq = randomPlaceTwo.id;
};

const randomPlaceThree = () => {
  squares.forEach((square) => {
    square.classList.remove("grn__triangle");
  });
  let randomPlaceThree = squares[Math.floor(Math.random() * 16)];
  randomPlaceThree.classList.add("grn__triangle");

  clickPositionTr = randomPlaceThree.id;
};

// gets auto moving..
const startMove = () => {
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
};
// startMove()

// difficulty buttons
const diffDisplay = document.querySelector("#diff__display");
const difficulties = document.querySelectorAll(".difficulty");

difficulties.forEach((difficulty) => {
  difficulty.addEventListener("click", () => {
    if (difficulty.innerHTML === "NORMAL") {
      diffDisplay.innerHTML = "Difficulty: Normal";
    } else if (difficulty.innerHTML === "HARD") {
      diffDisplay.innerHTML = "Difficulty: Hard";
    } else if (difficulty.innerHTML === "INSANE") {
      diffDisplay.innerHTML = "LOL.";
    }
  });
});

// when click on correct circle.. score gets updated
squares.forEach((square) => {
  square.addEventListener("click", () => {
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

const gameOver = () => {
  clearInterval(countdownTimePeriod);
  clearInterval(moveTimePeriod);
  clearInterval(moveTimePeriodSq);
  clearInterval(moveTimePeriodTr);
  alert(`Game Over!! Score = ${currentScore}`);
};

// timer counts down to 0
const timer = () => {
  currentTime--; // minus one from current time
  timeLeft.innerHTML = currentTime;
  if (currentTime == 0) {
    clearInterval(countdownTimePeriod);
    clearInterval(moveTimePeriod);
    clearInterval(moveTimePeriodSq);
    clearInterval(moveTimePeriodTr);
    alert(`Game Over!! Score = ${currentScore}`);
  }
};
// let countdownTimePeriod = setInterval(timer, 1000);

startButton.addEventListener("click", () => {
  currentScore = 0;
  startMove();
  countdownTimePeriod = setInterval(timer, 1000);
  currentTime = 20;
  score.innerHTML = 0;
});
