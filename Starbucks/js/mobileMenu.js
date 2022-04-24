const menuBtn = document.querySelector(".mobile__nav__menu");
const menuListWrap = document.querySelector(".mobile__menu__list__wrap");
const closed = menuListWrap.querySelector("img");
const menuMains = document.querySelectorAll(".mobile__menu__list > a");
const dropdowns = document.querySelectorAll(".mobile__menu__dropdown > ul > a");
const main = document.querySelector(".wrap");

menuBtn.addEventListener("click", () => {
  menuListWrap.style.display = "block";
  main.style.transform = "translateX(-70%)";
  main.style.transition = "0.5s";
});
closed.addEventListener("click", () => {
  menuListWrap.style.display = "none";
  main.style.transform = "translateX(0%)";
  main.style.transition = "0s";
});

menuMains.forEach((menuMain) => {
  menuMain.addEventListener("click", () => {
    const dropdown = menuMain.nextSibling.nextSibling;
    dropdown.classList.toggle("toggleclick");
  });
});

dropdowns.forEach((dropdown) => {
  const sibling = dropdown.nextElementSibling;
  sibling === null ? (dropdown.style.background = "#181818") : "";
  dropdown.addEventListener("click", () => {
    const dropdown2 = dropdown.nextElementSibling;
    dropdown2 === null ? "" : dropdown2.classList.toggle("toggleclick2");
  });
});
