// Pulling Modified Header Tags

var currentDayEl = $("#current-day");
var currentTimeEl = $("#current-time");

// Date
const currentDay = moment().format('dddd MMMM Do');
currentDayEl.text(currentDay);

// Time
var timerInterval = setInterval(function () {
    const currentTime = moment().format('h:mm:ss a');
    currentTimeEl.text(currentTime);
}, 1000);