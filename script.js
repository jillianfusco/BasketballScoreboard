let homeScore = document.getElementById("home-score")
let scoreH = 0

let guestScore = document.getElementById("guest-score")
let scoreG = 0

function add1H() {
    scoreH += 1
    homeScore.textContent = scoreH
}

function add1G() {
    scoreG += 1
    guestScore.textContent = scoreG
}

function add2H() {
    scoreH += 2
    homeScore.textContent = scoreH
}

function add2G() {
    scoreG += 2
    guestScore.textContent = scoreG
}

function add3H() {
    scoreH += 3
    homeScore.textContent = scoreH
}

function add3G() {
    scoreG += 3
    guestScore.textContent = scoreG
}

function clearOutH() {
    homeScore.textContent = 0
    scoreH = 0
}

function clearOutG() {
   guestScore.textContent = 0
    scoreG = 0 
}
