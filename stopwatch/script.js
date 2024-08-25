let timer;
let [hours, minutes, seconds] = [0, 0, 0];
let running = false;

const timeElement = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function formatTime(hours, minutes, seconds) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateDisplay() {
    timeElement.textContent = formatTime(hours, minutes, seconds);
}

function startTimer() {
    if (running) return;
    running = true;
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    if (!running) return;
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize display
updateDisplay();
