// Portfolio Filter

const filterContainer = document.querySelector(".portfolio-filter-nav");
const galleryItems = document.querySelectorAll(".portfolio-item");

filterContainer.addEventListener("click", (e) => {
  e.preventDefault();
  filterContainer.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  const filterValue = e.target.getAttribute("data-id");
  galleryItems.forEach((item) => {
    if (item.classList.contains(filterValue) || filterValue === "all") {
      item.classList.remove("hide");
      item.classList.add("show");
    } else {
      item.classList.remove("show");
      item.classList.add("hide");
    }
  });
});

// Email feature
function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_b4xpreq", "template_fzk6kk7", parms)
    .then(alert("Email sent!"));
}
