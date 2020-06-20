let menuButton = document.querySelector(".navbar__menu-button");
let headerMenu = document.querySelector(".menu");
menuButton.onclick = function () {
  headerMenu.classList.toggle("menu_active");
};
