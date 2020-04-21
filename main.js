const menuMobileBurger = document.querySelector(".burger-icon");
const menuMobileClose = document.querySelector(".close-icon");
const menuListMobile = document.querySelector(".main-nav");

menuMobileBurger.addEventListener("click", () => {
  menuListMobile.classList.toggle("mobile-show");

  const imgSrc = menuMobileBurger.firstChild.src;

  const imgPathShort = imgSrc.replace(/^.*[\\\/]/, "");

  if (imgPathShort === `icon-hamburger.svg`) {
    menuMobileBurger.firstChild.src = "images/icon-close.svg";
  } else {
    menuMobileBurger.firstChild.src = "images/icon-hamburger.svg";
  }
});

