const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const day = document.querySelector(".day");
const month = document.querySelector(".month");

setInterval(() => {
  let time = new Date();
  let hr = time.getHours() % 12;
  let min = time.getMinutes();
  let sec = time.getSeconds();

  // let hr = 12;
  // let min = 59;
  // let sec = 20;

  hour.style.transform = `rotateZ(${hr * 30 + min / 2}deg)`;
  minute.style.transform = `rotateZ(${(min * 360) / 60}deg)`;
  second.style.transform = `rotateZ(${(sec * 360) / 60}deg)`;
});

let date = new Date();
let dy = date.getDate();
let mnth = date.getMonth();

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "oct",
  "nov",
  "dec",
];

day.textContent = dy;
month.textContent = months[mnth];
