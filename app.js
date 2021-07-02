const squares = document.querySelectorAll(".square")
const timeLeft = document.querySelector("#timeleft")
const score = document.querySelector("#score")

let currentScore = 0;
let moveTimePeriod = null;
let clickPosition;
let currentTime = 20

// creating the first random moving circle on grid that moves after a set time
const randomPlace = () => {
    squares.forEach(square => {
        square.classList.remove("grn__circle")
    });
    let randomPlace = squares[Math.floor(Math.random() * 16)]
    // console.log(randomPlace);
    randomPlace.classList.add("grn__circle")
    
    clickPosition = randomPlace.id //
}
// gets auto moving..
const startMove = () => {
    moveTimePeriod = setInterval(randomPlace, 2000)
}
startMove()
// when click on correct circle.. score gets updated
squares.forEach(square => {
    square.addEventListener("click", () => {
        if (square.id == clickPosition) {
            currentScore += 1;
            score.innerHTML = currentScore
            // clickPosition = null
        }
    })
})
// when click on wrong object.. game ends
// timer counts down to 0
const timer = () => {
    currentTime--; // minus one from current time
    timeLeft.innerHTML = currentTime;
    if (currentTime == 0) {
        clearInterval(countdownTimePeriod)
        clearInterval(moveTimePeriod)
    }

}
let countdownTimePeriod = setInterval(timer, 1000)