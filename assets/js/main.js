let period = document.getElementById("period");
let tag = document.getElementById("tag");
let stunde = document.getElementById("stunde");
let minute = document.getElementById("minute");
let sekunde = document.getElementById("sekunde");

let displayUhr = () => {
  let today = new Date();
  let hours = today.getHours();
  hours <= 12 ? (period.innerHTML = "PM") : (period.innerHTML = "AM");

  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let day = today.getDay();

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
  stunde.innerText = hours;
  minute.innerText = minutes;
  sekunde.innerText = seconds;
  setInterval(displayUhr, 1000);
};

displayUhr();
