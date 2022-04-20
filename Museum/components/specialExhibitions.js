const speExhLists = document.querySelectorAll(".specialExhibitions__list > li");
const slidePart = document.querySelector(".specialExhibitions");

speExhLists.forEach((speExhList) => {
  speExhList.addEventListener("click", () => {
    const card = speExhList.querySelector(".specialExhibitions__card");
    const image = card.querySelector(".specialExhibitions__image > img");
    const info = speExhList.querySelector(".specialExhibitions__info");
    const infoImage = info.querySelector("img");
    infoImage.className = "info__background";
    infoImage.src = image.src;
    image.classList.toggle("bounce");
    card.classList.toggle("flip");
  });
});

let isDown = false;
let startX;
let scrollLeft;

slidePart.addEventListener("mousedown", (event) => {
  isDown = true;
  slidePart.classList.add("active");
  startX = event.pageX - slidePart.offsetLeft;
  scrollLeft = slidePart.scrollLeft;
});

slidePart.addEventListener("mouseleave", () => {
  isDown = false;
  slidePart.classList.remove("active");
});

slidePart.addEventListener("mouseup", () => {
  isDown = false;
  slidePart.classList.remove("active");
});

slidePart.addEventListener("mousemove", (event) => {
  if (!isDown) return;
  event.preventDefault();
  const x = event.pageX - slidePart.offsetLeft;
  // console.log({ x, startX });
  const walk = (x - startX) * 2;
  slidePart.scrollLeft = scrollLeft - walk;
});
