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

// });
