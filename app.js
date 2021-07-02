const squares = document.querySelectorAll(".square")
const timeLeft = document.querySelector("#timeleft")
const score = document.querySelector("#score")

// creating the first random moving circle on grid that moves after a set time
const randomPlace = () => {
    squares.forEach(square => {
        square.classList.remove("grn__circle")
    });
    let randomPlace = squares[Math.floor(Math.random() * 16)]
    // console.log(randomPlace);
    randomPlace.classList.add("grn__circle")
}
randomPlace()
// when click on correct circle.. score gets updated
// when click on wrong object.. game ends
// timer counts down to 0
// score +=1