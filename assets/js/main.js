// VARIABLES
let period = document.getElementById("period");
let tag = document.getElementById("tag");
let stunde = document.getElementById("stunde");
let minute = document.getElementById("minute");
let sekunde = document.getElementById("sekunde");

// FUNCTION CLOCK
let displayUhr = () => {
  let today = new Date();
  let hours = today.getHours();

  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let day = today.getDay();

  // SHOW IF ITS PM OR AM
  hours <= 12 ? (period.innerHTML = "AM") : (period.innerHTML = "PM");

  // SHOW WEEKDAYS
  switch (day) {
    case 0:
      tag.innerText = "Su";
      break;
    case 1:
      tag.innerText = "Mo";
      break;
    case 2:
      tag.innerText = "Tu";
      break;
    case 3:
      tag.innerText = "We";
      break;
    case 4:
      tag.innerText = "Th";
      break;
    case 5:
      tag.innerText = "Fr";
      break;
    case 6:
      tag.innerText = "Sa";
      break;
  }

  // ALWAYS DISPLAY TWO DIGITS
  if (today.getHours() < 10) {
    stunde.innerText = `0${hours}`;
  } else {
    stunde.innerText = `${hours}`;
  }

  if (today.getMinutes() < 10) {
    minute.innerText = `0${minutes}`;
  } else {
    minute.innerText = minutes;
  }

  if (today.getSeconds() < 10) {
    sekunde.innerText = `0${seconds}`;
  } else {
    sekunde.innerText = seconds;
  }

  setInterval(displayUhr, 1000);
};

displayUhr();
