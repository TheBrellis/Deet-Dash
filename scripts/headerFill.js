$(document).ready(function() {

function fillHeader(){
// Pulling Modified Header Tags
var currentDayEl = $("#current-day");
var currentTimeEl = $("#current-time");

// Date
var currentDay = moment().format('dddd MMMM Do');
currentDayEl.text(currentDay);

// Time
// Assigning an initial time value
let currentTime = moment().format('h:mm:ss a');
currentTimeEl.text(currentTime);
// Updating the initial time value every second
var timerInterval = setInterval(function () {
    currentTime = moment().format('h:mm:ss a');
    currentTimeEl.text(currentTime);
}, 1000);
};

fillHeader();

});
