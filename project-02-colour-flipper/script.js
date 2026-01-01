const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const colourCode = document.querySelector(".colour-code");

function getRandomColour() {
  let hexChar = "0123456789ABCDEF";
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    hexCode += hexChar[Math.floor(Math.random() * 16)];
    colourCode.textContent = hexCode;
    container.style.backgroundColor = hexCode;
  }
}

btn.addEventListener("click", () => {
  getRandomColour();
});
