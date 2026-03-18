// Mobile nav Toggle - REMOVES myLinks and TOGGLES the new menu
function toggleMobileMenu() {
  var menu = document.getElementById("fullScreenMenu");
  var closeIcon = document.querySelector(".close-icon");
  var openIcon = document.querySelector(".open-icon");

  // Toggle the 'is-open' class to control the menu's visibility via CSS
  menu.classList.toggle("is-open");

  if (menu.classList.contains("is-open")) {
    // Menu is OPEN
    openIcon.style.display = "none"; // Hide the dots
    closeIcon.style.display = "block"; // Show the 'X'
  } else {
    // Menu is CLOSED
    openIcon.style.display = "block"; // Show the dots
    closeIcon.style.display = "none"; // Hide the 'X'
  }
}

// Initial state cleanup: Hide the 'X' button when the page loads
document.addEventListener("DOMContentLoaded", function () {
  // Only show the dot menu if the screen is mobile size (CSS handles this, but this ensures 'X' is hidden)
  document.querySelector(".close-icon").style.display = "none";
});
