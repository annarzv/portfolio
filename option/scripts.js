// HAMBURGER MENU OVERLAY
const hamburger = document.getElementById("hamburger");
const overlayMenu = document.getElementById("menuOverlay");

// 1. Toggle Menu on Hamburger Icon Click
hamburger.addEventListener("click", () => {
  // Toggles the 'active' class on both elements, triggering the CSS transitions
  hamburger.classList.toggle("active");
  overlayMenu.classList.toggle("active");
});

// 2. Close Menu when one of the Links is clicked
const menuLinks = overlayMenu.querySelectorAll("a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    overlayMenu.classList.remove("active");
  });
});

// 3. Close Menu when clicking outside the menu (on the overlay itself)
overlayMenu.addEventListener("click", (event) => {
  // The event.target property holds the exact element that was clicked.
  // We check if the clicked element is the overlay container itself.
  if (event.target === overlayMenu) {
    hamburger.classList.remove("active");
    overlayMenu.classList.remove("active");
  }
});
