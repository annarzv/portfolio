$(function () {
  // Makes all elements with the class 'ingredient-item' draggable
  $(".ingredient-item").draggable({ revert: "invalid" });

  $("#droppable").droppable({
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover",
    },
    drop: function (event, ui) {
      var droppedItemId = ui.draggable.attr("id"); // Get the ID of the dropped ingredient

      // Show the specific image corresponding to dropped ingredient (the output)
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
      }

      //   $(this).addClass("ui-state-highlight"); // Keep the highlight effect on the pot
      ui.draggable.hide(); // Hide the draggable ingredient item that was just dropped

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
});
