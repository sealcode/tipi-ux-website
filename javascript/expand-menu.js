let navbar = document.getElementById("navbar");
let menu   = document.getElementById("expanded-menu");

document.getElementById("expand-menu").addEventListener("click", () => {
  navbar.classList.toggle("navbar-expanded");
});
