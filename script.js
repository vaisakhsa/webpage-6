let menuBtn = document.querySelector("#menu-icon");
let closeBtn = document.querySelector("#close-icon");
let navLinks = document.querySelector("#nav-links");

menuBtn.onclick = function () {
  navLinks.classList.add("active");
  document.body.style.overflow = "hidden";
};

closeBtn.onclick = function () {
  navLinks.classList.remove("active");
  document.body.style.overflow = "auto";
};