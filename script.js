// the end of the year date to countdown to
// 1000 milliseconds = 1 Second
let count_down_date = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
    // get date now
    let date_now = new Date().getTime();
  
    // find the date difference between now and countdown date
    let date_diff = count_down_date - date_now;
  
    // get time units
    let days = Math.floor(date_diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((date_diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((date_diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((date_diff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (date_diff < 0) {
    clearInterval(counter);
  }
}, 1000);