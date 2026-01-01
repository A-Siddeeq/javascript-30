const textBox = document.getElementById("text-input");
const charCountDisplay = document.getElementById("char-count");
const wordCountDisplay = document.getElementById("word-count");

textBox.addEventListener("input", () => {
  const text = textBox.value.length;
  charCountDisplay.textContent = text;
  wordCountDisplay.textContent = text
    ? textBox.value.trim().split(/\s+/).length
    : 0;
});
