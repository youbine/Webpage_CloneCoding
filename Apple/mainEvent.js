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

//play video
const shieldVideo = document.querySelector(".shieldside__item > video");
const shieldImg = document.querySelector(".shieldside__item > img");

window.addEventListener("scroll", () => {
  const video = shieldVideo.getBoundingClientRect();
  const PlayRange = video.top - shieldVideo.clientHeight / 2;
  PlayRange < 0 ? shieldVideo.play() : shieldVideo.pause();
  shieldVideo.addEventListener("ended", () => {
    shieldVideo.pause();
    shieldVideo.style.display = "none";
    shieldImg.style.display = "block";
  });
});
