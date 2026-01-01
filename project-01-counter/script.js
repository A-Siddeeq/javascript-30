const decrementBtn = document.querySelector(".decrement");
const incrementBtn = document.querySelector(".increment");
const resetBtn = document.querySelector(".reset-btn");
const countDisplay = document.querySelector(".count");

let count = 0;

decrementBtn.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

incrementBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});
