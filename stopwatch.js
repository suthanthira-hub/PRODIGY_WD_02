// Define variables
let startTime;
let elapsedTime = 0;
let timerInterval;
const display = document.querySelector('.display');
const lapList = document.querySelector('.laps');

// Function to display time
function displayTime(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

// Function to start the timer
function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    displayTime(elapsedTime);
  }, 10);
}

// Function to pause the timer
function pauseTimer() {
  clearInterval(timerInterval);
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  displayTime(elapsedTime);
  lapList.innerHTML = '';
}

// Function to record lap time
function lapTime() {
  const li = document.createElement('li');
  li.textContent = display.textContent;
  lapList.appendChild(li);
}

// Event listeners for buttons
document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.pause').addEventListener('click', pauseTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
document.querySelector('.lap').addEventListener('click', lapTime);
