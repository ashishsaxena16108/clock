let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let circles = document.querySelectorAll(".circle");

document.getElementById("home").addEventListener("click", () => {
  document.getElementsByClassName("menu")[0].classList.remove("none");
  document.getElementsByClassName("clock")[0].classList.remove("none");
  document.getElementsByClassName("timer")[0].classList.add("none");
  document.getElementsByClassName("stopwatch")[0].classList.add("none");
  document.getElementsByClassName("settimer")[0].classList.add("none");

});

document.getElementById("openTimer").addEventListener("click", () => {
  document.getElementsByClassName("clock")[0].classList.add("none");
  document.getElementsByClassName("timer")[0].classList.remove("none");
  document.getElementsByClassName("menu")[0].classList.add("none");
  document.getElementsByClassName("stopwatch")[0].classList.add("none");
  document.getElementsByClassName("settimer")[0].classList.remove("none");
});
document.getElementById("openStopWatch").addEventListener("click", () => {
  document.getElementsByClassName("clock")[0].classList.add("none");
  document.getElementsByClassName("stopwatch")[0].classList.remove("none");
  document.getElementsByClassName("menu")[0].classList.add("none");
  document.getElementsByClassName("settimer")[0].classList.add("none");
});

hour.style.transformOrigin = "center bottom";
minute.style.transformOrigin = "center bottom"
second.style.transformOrigin = "center bottom";
setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hour.style.rotate = 30 * htime + mtime / 2 + "deg";
  minute.style.rotate = 6 * mtime + "deg";
  second.style.rotate = 6 * stime + "deg";

}, 1000);
// Get references to the display elements
const hourDisplay = document.querySelector(".hourstime");
const minuteDisplay = document.querySelector(".minutestime");
const secondDisplay = document.querySelector(".secondstime");

// Button elements (assuming they're already defined in your HTML)
const playButton = document.getElementById("play");
const resetButton = document.getElementById("reset");
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

// Function to update timer display based on elapsed time
function updateTimer() {

  if (seconds == 59 && minutes == 59) {
    hours += 1;
    minutes = 0;
    seconds = 0;
  }
  else if (seconds == 59) {
    minutes += 1;
    seconds = 0;
  }
  else {
    seconds += 1;
  }
  hourDisplay.textContent = hours.toString().padStart(2, "0");
  minuteDisplay.textContent = minutes.toString().padStart(2, "0");
  secondDisplay.textContent = seconds.toString().padStart(2, "0");

}

playButton.addEventListener("click", function () {
  if (playButton.getAttribute("src") === "play.png") {

    interval = setInterval(updateTimer, 1000);

    playButton.setAttribute("src", "pause.png"); // Update button image
  } else {
    clearInterval(interval);
    playButton.setAttribute("src", "play.png");
  }
});

resetButton.addEventListener("click", function () {
  hours = 0;
  minutes = 0;
  seconds = 0;
  hourDisplay.textContent = "00";
  minuteDisplay.textContent = "00";
  secondDisplay.textContent = "00";
});

let hourtimer = 0;
let minutetimer = 0;
let secondtimer = 0;
let totalTime = 0;
let leftTime = 0;
let timeString = "";
let timerInterval;
let colorInterval;
let audioTimer = new Audio('taratata-6264.mp3');
document.querySelectorAll('.num-btn').forEach(element => {
  element.addEventListener('click', () => {
    let value = element.innerText;
    timeString = timeString + value;
    let inputvalue = timeString.padStart(6, "0");
    document.querySelector('.inputtimer').textContent = inputvalue.substring(0, 2) + "h " + inputvalue.substring(2, 4) + "m " + inputvalue.substring(4) + "s";
  })
});
const hourtimeDisplay = document.querySelector(".hourtime");
const minutetimeDisplay = document.querySelector(".minutetime");
const secondtimeDisplay = document.querySelector(".secondtime");
document.getElementById('delete').addEventListener('click', () => {
  timeString = timeString.substring(0, timeString.length - 1);
  let inputvalue = timeString.padStart(6, "0");
  document.querySelector('.inputtimer').textContent = inputvalue.substring(0, 2) + "h " + inputvalue.substring(2, 4) + "m " + inputvalue.substring(4) + "s";
})
let ball = document.getElementsByClassName('dot')[0];
function startTimer() {

  if (hourtimer == 0 && secondtimer == 0 && minutetimer == 0) {
    clearInterval(timerInterval);
    colorInterval = setInterval(() => {
      let color = document.getElementsByClassName('currentTime')[0].style.color;
      document.getElementsByClassName('currentTime')[0].style.color = color == "white" ? "red" : "white";
    }, 300)
    audioTimer.play();
  }
  else if (secondtimer == 0 && minutetimer == 0) {
    hourtimer -= 1;
    minutetimer = 59;
    secondtimer = 59;
  }
  else if (secondtimer == 0) {
    minutetimer -= 1;
    secondtimer = 59;
  }
  else {
    secondtimer -= 1;
  }

  leftTime -= 1;
  if (leftTime != -1) {
    ball.style.rotate = ((totalTime - leftTime) / totalTime) * 360 + "deg";
  }
  hourtimeDisplay.textContent = hourtimer.toString().padStart(2, "0");
  minutetimeDisplay.textContent = minutetimer.toString().padStart(2, "0");
  secondtimeDisplay.textContent = secondtimer.toString().padStart(2, "0");
}


function setTimer() {
  let inputvalue = timeString.padStart(6, "0");
  hourtimer = parseInt(inputvalue.substring(0, 2));
  if (inputvalue.substring(2, 4) > 60) {
    minutetimer = inputvalue.substring(2, 4) - 60;
    hourtimer += 1;
  }
  else {
    minutetimer = parseInt(inputvalue.substring(2, 4));
  }
  if (inputvalue.substring(4, 6) > 60) {
    secondtimer = inputvalue.substring(4, 6) - 60;
    minutetimer += 1;
  }
  else {
    secondtimer = parseInt(inputvalue.substring(4, 6));
  }
  totalTime = hourtimer * 60 * 60 + minutetimer * 60 + secondtimer;
  leftTime = totalTime;
  document.getElementsByClassName("settimer")[0].classList.add("none");
  timerInterval = setInterval(startTimer, 1000);
  hourtimeDisplay.textContent = hourtimer.toString().padStart(2, "0");
  minutetimeDisplay.textContent = minutetimer.toString().padStart(2, "0");
  secondtimeDisplay.textContent = secondtimer.toString().padStart(2, "0");
}
let playTimerbutton = document.getElementById('playTimer');

document.getElementById('set').addEventListener('click', () => {
  playTimerbutton.setAttribute("src", "pause.png");
  setTimer();
})

playTimerbutton.addEventListener('click', () => {
  if (secondtimer == 0 && minutetimer == 0 && hourtimer == 0) {
    clearInterval(colorInterval);
    clearInterval(timerInterval);
    document.getElementsByClassName('currentTime')[0].style.color = "white";
    timeString = "";
    let inputvalue = timeString.padStart(6, "0");
    document.querySelector('.inputtimer').textContent = inputvalue.substring(0, 2) + "h " + inputvalue.substring(2, 4) + "m " + inputvalue.substring(4) + "s";
    audioTimer.pause();
    document.getElementsByClassName("settimer")[0].classList.remove("none");
    playTimerbutton.setAttribute("src", "play.png");
  }
  else {
    if (playTimerbutton.getAttribute("src") === "play.png") {

      timerInterval = setInterval(startTimer, 1000);

      playTimerbutton.setAttribute("src", "pause.png"); // Update button image
    } else {
      clearInterval(timerInterval);
      playTimerbutton.setAttribute("src", "play.png");
    }
  }
})
document.getElementById('resetTimer').addEventListener('click', () => {
  leftTime = totalTime;
  clearInterval(timerInterval);
  if (playTimerbutton.getAttribute("src") === "play.png") {
    setTimer();
    clearInterval(timerInterval);
  }
  else {
    if (secondtimer == 0 && minutetimer == 0 && hourtimer == 0) {
      clearInterval(colorInterval);
      document.getElementsByClassName('currentTime')[0].style.color = "white";
      audioTimer.pause();
    }
    setTimer();
  }
});
document.getElementById('addoneminute').addEventListener('click', () => {
  if (secondtimer == 0 && minutetimer == 0 && hourtimer == 0) {
    clearInterval(colorInterval);
    document.getElementsByClassName('currentTime')[0].style.color = "white";
    audioTimer.pause();
  }
  minutetimer += 1;
  totalTime += 60;
  leftTime += 60;
  if(playTimerbutton.getAttribute("src") === "pause.png")
     timerInterval = setInterval(startTimer, 1000);

});
const fullbtn = document.getElementById('fullscreen');
const container = document.querySelector('.container');
let right = document.querySelector('.right');
let left = document.querySelector('.left');
fullbtn.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    fullbtn.setAttribute('src', 'expand-solid.svg');
    right.classList.remove('none');
    left.style.transform = 'scale(1)';
  }
  else {
    container.requestFullscreen();
    fullbtn.setAttribute('src', 'compress-solid.svg');
    right.classList.add('none');
    left.style.transform = 'scale(2)';
  }
})

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement)
    container.classList.add('fullscreen');
  else
    container.classList.remove('fullscreen');
});