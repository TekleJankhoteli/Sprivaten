const headerMenu = document.querySelector(".header-menu");
const menuIcon = document.getElementById("menu-icon");
const menuIconImg = document.querySelector("#menu-icon img");
const headerNav = document.querySelector(".header-nav");

menuIconImg.addEventListener("click", function () {
  headerMenu.classList.toggle("visible");

  if (headerMenu.classList.contains("visible")) {
    menuIconImg.src = "./assets/close.svg";
    headerNav.style.backgroundColor = "rgba(246, 246, 246, 1)";
  } else {
    menuIconImg.src = "./assets/menu.svg";
    headerNav.style.backgroundColor = "";
  }
});
