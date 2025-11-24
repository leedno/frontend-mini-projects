
let timer = document.querySelector("#timer");

let time = 0; // start at 0 seconds
let interval;

function formatTime(totalSeconds) {
  // calculate min and sec
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  // add zero if less than 10
  let fMinutes = String(minutes).padStart(2, '0');
  let fSeconds = String(seconds).padStart(2, '0');

  return fMinutes + ":" + fSeconds;
}

function tick() {
  time++;
  // updates timer
  timer.textContent = formatTime(time);
}

function startTimer() {
  if (interval) {
    clearInterval(interval);
  }
  // sets time to 00:00 before first tick
  timer.textContent = formatTime(time);

  interval = setInterval(tick, 1000);
}

startTimer()
