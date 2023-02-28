const headerFeature1 = document.querySelector(".feature-1");
const headerFeature2 = document.querySelector(".feature-2");
const headerFeatures = document.querySelector(".header__features__feature");
const nav = document.querySelector(".header__nav");
const menuOpen = document.querySelector(".menu--open");
// const menuClose = document.querySelector(".menu--close");
const dropDown1 = document.querySelector(".dropdown-1");
const dropDown2 = document.querySelector(".dropdown-2");
const featureOff = document.querySelector(".header__features__feature");
// const btns = document.querySelector(".header__btns");
const arrowDown = document.querySelectorAll(".arrow--down");
// const arrowUp = document.querySelector(".arrow--up");
const overlay = document.querySelector("body");

headerFeature1.addEventListener("click", () => {
  dropDown1.classList.toggle("feature-off");
  if (dropDown1.classList.contains("feature-off")) {
    arrowDown.forEach((item) => {
      item.src = "img/icon-arrow-down.svg";
    });
  } else {
    arrowDown.forEach((item) => {
      item.src = "img/icon-arrow-up.svg";
    });
  }
});

headerFeature2.addEventListener("click", () => {
  dropDown2.classList.toggle("feature-off");
  if (dropDown2.classList.contains("feature-off")) {
    arrowDown.forEach((item) => {
      item.src = "img/icon-arrow-down.svg";
    });
    // for (const down of arrowDown) {
    //   item.src = "img/icon-arrow-down.svg";
    // }
  } else {
    arrowDown.forEach((item) => {
      item.src = "img/icon-arrow-up.svg";
    });
  }
});

menuOpen.addEventListener("click", () => {
  nav.classList.toggle("menu--translate");

  if (nav.classList.contains("menu--translate")) {
    menuOpen.src = "img/icon-close-menu.svg";
    overlay.classList.add("overlay");
  } else {
    menuOpen.src = "img/icon-menu.svg";
    overlay.classList.remove("overlay");
  }
});
