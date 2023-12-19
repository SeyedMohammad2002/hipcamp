const nav_btn = document.querySelector(".nav__btn");
const nav_menu = document.querySelector(".nav-menu");
let nav_open = false;
nav_btn.addEventListener("click", function () {
  if (nav_open) {
    nav_btn.classList.remove("nav__btn--open");
    nav_menu.classList.remove("nav-menu--open");
    nav_open = false;
  } else {
    nav_btn.classList.add("nav__btn--open");
    nav_menu.classList.add("nav-menu--open");
    nav_open = true;
  }
});
