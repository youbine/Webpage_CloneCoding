const topScroll = document.querySelector(".scroll");
const video = document.querySelector("video");
const windowHeight = window.innerHeight;
const header = document.querySelector("header");

window.onload = () => {
  topScroll.style.opacity = "0.5";
  topScroll.classList.add("blink");
};
topScroll.addEventListener("click", () => {
  scrollTo({ top: windowHeight, left: 0, behavior: "smooth" });
  video.pause();
  //set exhibits opacity 0
  for (i = 0; i < exhibits.length; i++) {
    exhibits[i].style.opacity = 0;
  }
  //show each exhibit every 0.5s
  i = -1;
  let showExhibits = setInterval(() => {
    i++;
    exhibits[i].style.opacity = 1;
    exhibits[i].style.transition = "0.5s";
  }, 500);
  setTimeout(() => {
    clearTimeout(showExhibits);
  }, 3000);
});

let prevScroll = 0;
window.addEventListener("scroll", () => {
  const current = window.scrollY;
  if (current > prevScroll) {
    header.classList.remove("scroll__up");
    header.style.transition = "0.8s";
  } else if (current < prevScroll) {
    header.classList.add("scroll__up");
  }
  if (current === 0) {
    header.classList.remove("scroll__up");
  }
  prevScroll = current;
});
