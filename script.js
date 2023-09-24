const endDate = new Date('9 May 2024');
const daysel = document.getElementById('d');
const hoursel = document.getElementById('h');
const minutesel = document.getElementById('m');
const secondsel = document.getElementById('s');


function countdown() {

    const todaysDate = new Date();

    const seconds = Math.floor((endDate - (todaysDate)) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    console.log(days, remainingHours, remainingMinutes, remainingSeconds)

    daysel.innerHTML = days;
    hoursel.innerHTML = remainingHours;
    minutesel.innerHTML = remainingMinutes;
    secondsel.innerHTML = remainingSeconds;
}

setInterval(countdown, 1000);
