const screen = document.querySelector(".calculator-screen");
const keys = document.querySelector(".calculator-keys");

keys.onclick = (e) => {
  if (!e.target.value) return;

  const v = e.target.value;

  if (v === "all-clear") screen.value = "";
  else if (v === "=") {
    try {
      screen.value = eval(screen.value);
    } catch {
      screen.value = "Error";
    }
  } else screen.value += v;
};
