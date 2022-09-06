// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const INITIAL_TIME_IN_SECONDS = 24 * 60;
let TIME_IN_SECONDS = INITIAL_TIME_IN_SECONDS;
let TIMER = null;

const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

playButton.addEventListener("click", startCounter);
pauseButton.addEventListener("click", pauseCounter);
resetButton.addEventListener("click", resetCounter);

updateDom();

function startCounter() {
    TIMER = setInterval(() => {
        TIME_IN_SECONDS--;
        updateDom();
    }, 1000);
}

function pauseCounter() {
    clearInterval(TIMER);
}

function resetCounter() {
    clearInterval(TIMER);
    TIME_IN_SECONDS = INITIAL_TIME_IN_SECONDS;
    updateDom();
}

function updateDom() {
    const minutes = math.floor(TIME_IN_SECONDS / 60);
    document.getElementById("min").innerHTML = String(minutes).padStart(2, 0);

    const seconds = TIME_IN_SECONDS % 60;
    document.getElementById("sec").innerHTML = String(seconds).padStart(2, 0);
}

