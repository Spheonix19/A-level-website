document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".toggle-button");
  const navbarMenu = document.querySelector(".navbar__menu");
  const darkModeToggle = document.querySelector("#dark-mode-toggle");

  // Toggle mobile menu
  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      navbarMenu.classList.toggle("active");
    });
  }

  // Toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode);
  }

  // Apply dark mode state from localStorage
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
  }

  // Close the navbar menu when a link is clicked
  document.querySelectorAll(".navbar__links").forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("active");
    });
  });
});
