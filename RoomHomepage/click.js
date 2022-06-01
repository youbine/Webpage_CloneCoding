const slide = document.querySelector(".slide");
const slideText = document.querySelector(".slide_text");
const prev = document.querySelector(".slidePrev");
const next = document.querySelector(".slideNext");

let currentI = 0;
function slider() {
  next.addEventListener("click", () => {
    index((currentI += 1));
  });
  prev.addEventListener("click", () => {
    index((currentI -= 1));
  });

  function index(currentI) {
    if (currentI === 2) {
      next.classList.add("unable");
    } else {
      next.classList.remove("unable");
    }
    if (currentI === 0) {
      prev.style.pointerEvents = "none";
    } else {
      prev.style.pointerEvents = "auto";
    }

    slide.style.transform = `translate(-${100 * currentI}%)`;
    slideText.style.transform = `translate(-${100 * currentI}%)`;
  }
}
slider();

const mobileNav = document.querySelectorAll(".mobileNavBtn");
const navUl = document.querySelector(".nav__wrap > ul");
const navA = document.querySelectorAll(".nav__wrap > ul > li > a");

mobileNav.forEach((nav) =>
  nav.addEventListener("click", () => {
    navUl.classList.toggle("hide");
    for (i = 0; i < navA.length; i++) {
      navA[i].style.transitionDelay = `${i * 0.2}s`;
      navA[i].classList.toggle("opacity");
    }
  })
);
