const visual = document.querySelector(".visual");
const images = visual.querySelector(".visual__images");
const image = visual.querySelectorAll(".visual__image");
const btnLeft = visual.querySelector(".Left > span");
const btnRight = visual.querySelector(".Right > span");
const dots = visual.querySelectorAll(".dot");
const width = 150;
const slideTitles = [
  "TERRA",
  "진로",
  "참이슬fresh",
  "필라이트 fresh",
  "일품진로",
  "아이셔에이슬",
  "Max",
  "hite EXTRA COLD",
  "메로나에이슬",
];
let index = 1;
dots[index - 1].classList.add("current");
btnLeft.innerText = slideTitles[index + 7];
btnRight.innerText = slideTitles[index];
const toggleBtn = (click) => {
  slideImages((index += click));
};
const toggleDot = (click) => {
  slideImages((index = click));
};
//event 지우고 setTimeout설정해보기
function slideImages(event) {
  let i;
  if (event > image.length) {
    index = 1;
  }
  if (event <= 0) {
    index = image.length;
  }
  //현재 dot빼고 나머지 dot class지워주기
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("current");
  }
  images.style.transform = `translate3d(-${width * (index - 1)}rem, 0px, 0px)`;
  dots[index - 1].classList.add("current");
  btnLeft.innerText = slideTitles[index - 2];
  btnRight.innerText = slideTitles[index];
  index === slideTitles.length
    ? (btnRight.innerText = slideTitles[index - 9])
    : "";
  index === 1 ? (btnLeft.innerText = slideTitles[index + 7]) : "";
}

slideImages();
setInterval(slideImages, 1000);
