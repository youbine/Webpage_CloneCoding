const colorLists = document.querySelectorAll(
  ".iPhone__color__picker > ul > label"
);
const iphones = document.querySelector(".iPhone__color");
const colorName = document.querySelectorAll(
  ".iPhone__color__picker > p > span"
);
const bigIphones = document.querySelectorAll(
  ".sec__four__column.color.bgBlack div img"
);

colorLists.forEach((color, index) => {
  color.addEventListener("click", () => {
    iphones.style.transform = `translateX(-${index * 100}%)`;

    for (i = 0; i <= colorLists.length; i++) {
      colorLists[i].classList.remove("label");
      colorName[i].classList.remove("colorName");
      bigIphones[i].classList.remove("colorPhone");

      color.classList.add("label");
      colorName[`${index}`].classList.add("colorName");
      bigIphones[`${index}`].classList.add("colorPhone");
    }
  });
});

const nav = document.querySelector(".nav__sub");

window.addEventListener("scroll", () => {
  const scrollAt = window.scrollY;

  scrollAt >= 500
    ? (nav.style.position = "fixed")
    : (nav.style.position = "sticky");
});
