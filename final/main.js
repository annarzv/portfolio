// $(function () {

// From jQueryUI drag/drop

// Makes all elements with the class 'ingredient-item' draggable
$(".ingredient-item").draggable({ revert: "invalid" });

$("#droppable").droppable({
  classes: {
    "ui-droppable-active": "ui-state-active",
    "ui-droppable-hover": "ui-state-hover",
  },
  drop: function (event, ui) {
    // Gets the ID of the dropped ingredient
    var droppedItemId = ui.draggable.attr("id");
    // Hide the draggable ingredient that was just dropped
    ui.draggable.hide();

    // Show the specific illustration corresponding to dropped ingredient + hide illustrations from previous steps if needed (aka the output in the pot)
    if (droppedItemId === "yellow") {
      $("#yellowInPot").show();
      $("#waterInPot").hide();
    } else if (droppedItemId === "red") {
      $("#waterInPot").hide();
      $("#redInPot").show();
    } else if (droppedItemId === "water") {
      $("#waterInPot").show();
    } else if (droppedItemId === "spices") {
      $("#spicesInPot").show();
    } else if (droppedItemId === "garlic") {
      $("#garlicInPot").show();
    } else if (droppedItemId === "timer") {
      $("#timerInPot").show();
      $("#waterInPot").hide();
      $("#yellowInPot").hide();
      $("#redInPot").hide();
      $("#spicesInPot").hide();
      $("#garlicInPot").hide();
    } else if (droppedItemId === "tadka") {
      $("#timerInPot").hide();
      $("#tadkaInPot").show();
    }

    // If there are 0 ingredients left to drag into the pot, show the "Still Hungry" Button
    if ($(".ingredient-item:visible").length === 0) {
      $("#stillHungryBtn").show();
    }
  },
});
// Reloads the entire page to start recipe from scratch
$("#stillHungryBtn").on("click", function () {
  location.reload();
});

// Touch
document.addEventListener("DOMContentLoaded", () => {
  const waterItem = document.getElementById("water");
  const droppablePot = document.getElementById("droppable"); // Assuming your pot has this ID

  let isDragging = false;
  let initialX;
  let initialY;
  let currentX;
  let currentY;
  let xOffset = 0;
  let yOffset = 0;

  if (waterItem) {
    // Apply basic positioning styles to the draggable item
    waterItem.style.position = "absolute"; // Or 'relative' depending on your layout, but absolute is common for drag
    waterItem.style.cursor = "grab"; // Visual cue for desktop users

    waterItem.addEventListener("touchstart", dragStart);
    waterItem.addEventListener("touchend", dragEnd);
    waterItem.addEventListener("touchmove", drag);
  }

  function dragStart(e) {
    // Prevent default touch behavior (like scrolling/zooming) to ensure drag
    e.preventDefault();

    // Get the initial touch coordinates
    if (e.touches.length === 1) {
      // Ensure only one touch for dragging
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
      isDragging = true;
      waterItem.style.cursor = "grabbing";
    }
  }

  function drag(e) {
    if (isDragging) {
      e.preventDefault(); // Again, prevent default to ensure smooth dragging

      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;

      xOffset = currentX;
      yOffset = currentY;

      // Apply the new position
      setTranslate(currentX, currentY, waterItem);
    }
  }

  function dragEnd(e) {
    isDragging = false;
    waterItem.style.cursor = "grab";

    // Check for drop - simplified example, you'd refine this
    if (droppablePot) {
      const waterRect = waterItem.getBoundingClientRect();
      const potRect = droppablePot.getBoundingClientRect();

      // Check for overlap between the water item and the droppable pot
      if (
        waterRect.left < potRect.right &&
        waterRect.right > potRect.left &&
        waterRect.top < potRect.bottom &&
        waterRect.bottom > potRect.top
      ) {
        console.log("Water dropped into the pot!");
        // Here you would add your existing drop logic from main.js
        // For example:
        waterItem.style.display = "none"; // Hide the item
        // Call a function to show the water in the pot illustration
        // document.getElementById('waterInPot').style.display = 'block';
        // And hide other illustrations as needed, similar to your main.js
      } else {
        console.log("Water not dropped into the pot, reverting...");
        // Revert to original position if not dropped successfully
        setTranslate(0, 0, waterItem);
        xOffset = 0;
        yOffset = 0;
      }
    }
  }

  // Helper function to apply CSS transform for movement
  function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
  }
});
