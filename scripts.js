// JS to swap image on hover
// const navItems = document.querySelectorAll(".nav-item");
// const mainImage = document.getElementById("mainImage");
// const defaultImg = mainImage.src;

// navItems.forEach((item) => {
//   const newImg = item.getAttribute("data-img");

//   item.addEventListener("mouseenter", () => {
//     mainImage.src = newImg;
//   });

//   item.addEventListener("mouseleave", () => {
//     mainImage.src = defaultImg;
//   });
// });

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

// ---- Web Hover Logic ----
$(document).ready(function () {
  // Hide previews by default
  $("#door-preview, #analog-preview, #pixelstan-preview").hide();

  // Target the "Web" nav-item
  $(".nav-item")
    .filter(function () {
      return $(this).text().trim() === "Web";
    })
    .hover(
      function () {
        // mouseenter
        $("#door-preview, #analog-preview, #pixelstan-preview").fadeIn(300);
      },
      function () {
        // mouseleave
        $("#door-preview, #analog-preview, #pixelstan-preview").fadeOut(300);
      }
    );
});

// --- Social hover logic ---
$("#sfml-preview, #priyanka-preview, #veera-preview").hide();
$(".nav-item")
  .filter(function () {
    return $(this).text().trim() === "Social";
  })
  .hover(
    function () {
      $("#sfml-preview, #priyanka-preview, #veera-preview").fadeIn(300);
    },
    function () {
      $("#sfml-preview, #priyanka-preview, #veera-preview").fadeOut(300);
    }
  );

// --- 35mm hover logic ---
$("#film1-preview, #film2-preview, #film3-preview, #film4-preview").hide();
$(".nav-item")
  .filter(function () {
    return $(this).text().trim() === "35mm";
  })
  .hover(
    function () {
      $(
        "#film1-preview, #film2-preview, #film3-preview, #film4-preview"
      ).fadeIn(300);
    },
    function () {
      $(
        "#film1-preview, #film2-preview, #film3-preview, #film4-preview"
      ).fadeOut(300);
    }
  );

// --- 'About' hover logic ---
$("#about-preview").hide();
$(".nav-item")
  .filter(function () {
    return $(this).text().trim() === "About";
  })
  .hover(
    function () {
      $("#about-preview").fadeIn(300);
    },
    function () {
      $("#about-preview").fadeOut(300);
    }
  );
