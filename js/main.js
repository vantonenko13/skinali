"use strict";

let menuButton = document.querySelector(".navbar__menu-button");
let headerMenu = document.querySelector(".menu");
menuButton.onclick = function () {
  headerMenu.classList.toggle("menu_active");
  headerMenu.classList.remove("hidden__menu");
};

let a = document.querySelectorAll(".menu__link");
console.log(a);

[].forEach.call(a, function (el) {
  el.onclick = function (e) {
    console.log(e);
    headerMenu.classList.add("hidden__menu");
    headerMenu.classList.remove("menu_active");
  };
});
