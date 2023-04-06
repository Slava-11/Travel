let body = document.querySelector("body")
let burger = document.querySelector(".header__burger");
let burgerMenu = document.querySelector(".header__burger-menu");
let burgerMenuItems = document.querySelectorAll(".header__burger-menu-paragraph");

function onBurgerClick(e) {
  burgerMenu.classList.toggle("active");
  body.classList.toggle("active");
};

function onBurgerMenuItemsClick(e) {
  burgerMenu.classList.remove("active");
  body.classList.remove("active");
};


burger.addEventListener("click", onBurgerClick);
burgerMenuItems.forEach(el => {
  el.addEventListener("click", onBurgerMenuItemsClick);
});