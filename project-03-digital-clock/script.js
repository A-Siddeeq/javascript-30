const clockTime = document.querySelector(".time");

function updateClock() {
  const now = new Date();
  clockTime.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
