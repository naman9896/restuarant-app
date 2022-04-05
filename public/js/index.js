const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
// const close = document.querySelector(".open-nav");

menu.addEventListener("click", () => {
  navbar.classList.toggle("open-nav");

  if (navbar.classList.contains("open-nav")) {
    menu.innerHTML = "Menu";
  } else {
    menu.innerHTML = "Close";
  }
});
