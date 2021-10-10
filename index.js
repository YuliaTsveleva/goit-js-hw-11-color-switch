const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const body = document.querySelector("body");
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalID = null;

startBtn.addEventListener("click", () => {
  intervalID = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalID);
  startBtn.disabled = false;
});
