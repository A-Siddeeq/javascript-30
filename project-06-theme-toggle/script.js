let container = document.querySelector(".container");
let toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => {
  // This one line replaces the whole if/else logic for colors
  container.classList.toggle("dark-mode");

  // Update button text based on whether the class is now there
  if (container.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Use Light Mode";
  } else {
    toggleBtn.textContent = "Use Dark Mode";
  }
});
