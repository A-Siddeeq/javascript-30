const fahrenheitInput = document.getElementById("fahrenheit-value");
const celsiusInput = document.getElementById("celsius-value");

fahrenheitInput.addEventListener("input", () => {
  const convertedTemp = (fahrenheitInput.value - 32) * (5 / 9);
  celsiusInput.value = convertedTemp.toFixed(2);
});
