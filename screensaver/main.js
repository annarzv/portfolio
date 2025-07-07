// Dark Mode for background + button
$(".dark-btn").click(function () {
  $("body").toggleClass("dark");
  $("button").toggleClass("dark");
  $(".moon").toggleClass("dark");
  $(".sun").toggleClass("dark");
  $(".birds").toggleClass("dark");
});

// $(".light-btn").click(function () {
//   $("body").removeClass("dark");
// });
