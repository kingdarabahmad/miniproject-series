const toggleMenu = document.querySelector("i");
const navItems = document.querySelector(".nav-listItems");
const navToggle = document.querySelector(".nav-toggle");

console.dir(toggleMenu);

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 700) {
    toggleMenu.style.display = "none";
    navItems.style.display = "";
  } else {
    toggleMenu.style.display = "";
    navItems.style.display = "none";
  }
});

window.addEventListener("resize", (e) => {
  if (e.target.innerWidth > 700) {
    toggleMenu.style.display = "none";
    navItems.style.display = "";
  } else {
    toggleMenu.style.display = "";
    navItems.style.display = "none";
  }
});

toggleMenu.addEventListener("click", () => {
  navToggle.classList.toggle("toggle-display");
});
