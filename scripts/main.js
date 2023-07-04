import '../scripts/sounds.js'

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMoreTime = document.querySelector('.more-time')
const buttonLessTime = document.querySelector('.less-time')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function stopClock() {
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      return
    }

    if (seconds <= 0) {
      seconds = 10
      --minutes
    } else {
      seconds--
    }

    updateTimerDisplay(minutes, seconds)

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  countdown()
})

buttonStop.addEventListener('click', function () {
  stopClock()
})

function addFiveMinutes() {
  minutes += 5
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
}

buttonMoreTime.addEventListener('click', function () {
  addFiveMinutes()
})

function removeFiveMinutes() {
  minutes -= 5
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
}

buttonLessTime.addEventListener('click', function () {
  removeFiveMinutes()
})
