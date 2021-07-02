const squares = document.querySelectorAll(".square")
const timeLeft = document.querySelector("#timeleft")
const score = document.querySelector("#score")

let currentScore = 0;
let moveTimePeriod = null;
let clickPosition;

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
    moveTimePeriod = setInterval(randomPlace, 1000)
}
startMove()
// when click on correct circle.. score gets updated
squares.forEach(square => {
    square.addEventListener("click", () => {
        if (square.id == clickPosition) {
            currentScore += 1;
            score.innerHTML = currentScore
        }
    })
})
// when click on wrong object.. game ends
// timer counts down to 0
// score +=1