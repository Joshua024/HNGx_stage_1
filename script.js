// JavaScript to display current UTC time and the current day of the week
const utcTimeElement = document.getElementById("utc-time");
const WeekDayEl = document.querySelector(".dayOfTheWeek")
const currentTimeMillis = new Date().getTime();
const weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const weekDay = new Date().getDay()
function render() {
    utcTimeElement.textContent = `Current UTC Time: ${currentTimeMillis}`;
    console.log(weekDay)
    WeekDayEl.textContent = `Current Day of the Week: ${weekArray[weekDay]}`
}

// Call the function to display UTC time when the page loads and the current day of the week
render();
