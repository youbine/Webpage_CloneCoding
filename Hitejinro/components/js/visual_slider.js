const images = document.querySelector(".visual__images");
const image = document.querySelectorAll(".visual__image");
const btnLeft = document.querySelector(".Left");
const btnRight = document.querySelector(".Right");
const spanLeft = document.querySelector(".Left > span");
const spanRight = document.querySelector(".Right > span");
const dots = document.querySelectorAll(".dot");
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
//6초마다 자동 슬라이드
window.onload = () => {
  setInterval(() => {
    btnRight.click();
  }, 6000);
};

let index = 0;
imageLen = image.length;
imageClone();
setting();
function imageClone() {
  const imageFirst = images.firstElementChild.cloneNode(true);
  const imageLast = images.lastElementChild.cloneNode(true);
  images.append(imageFirst);
  images.insertBefore(imageLast, images.firstElementChild);
}
//초기값
function setting() {
  images.style.transform = `translate3d(-${width * (index + 1)}rem, 0px, 0px)`;
  spanRight.innerText = slideTitles[index + 1];
  spanLeft.innerText = slideTitles[imageLen - 1];
  dots[index].classList.add("current");
}
const toggleDot = (click) => {
  index = click;
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("current");
  }
  dots[index].classList.add("current");
  //버튼 span 설정
  index === 0
    ? (spanLeft.innerText = slideTitles[8])
    : (spanLeft.innerText = slideTitles[index - 1]);
  index === 8
    ? (spanRight.innerText = slideTitles[0])
    : (spanRight.innerText = slideTitles[index + 1]);
  images.style.transform = `translate3d(-${width * (index + 1)}rem, 0px, 0px)`;
  images.style.transition = "all 0.4s ease 0s";
};

btnRight.addEventListener("click", () => {
  if (index < imageLen) {
    images.style.transform = `translate3d(-${
      width * (index + 2)
    }rem, 0px, 0px)`;
    images.style.transition = "all 0.4s ease 0s";
    //버튼 span 설정
    spanLeft.innerText = slideTitles[index];
    if (index === 7) {
      spanRight.innerText = slideTitles[0];
    } else if (index === 8) {
      spanRight.innerText = slideTitles[1];
    } else {
      spanRight.innerText = slideTitles[index + 2];
    }
  }
  if (index === imageLen - 1) {
    setTimeout(() => {
      images.style.transform = `translate3d(-${
        width * (index + 1)
      }rem, 0px, 0px)`;
      images.style.transition = "all 0s ease 0s";
    }, 300);
    index = -1;
  }
  index += 1;
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("current");
    dots[index].classList.add("current");
  }
});

btnLeft.addEventListener("click", () => {
  if (index >= 0) {
    images.style.transform = `translate3d(-${width * index}rem, 0px, 0px)`;
    images.style.transition = "all 0.4s ease 0s";
    //버튼 span 설정
    spanRight.innerText = slideTitles[index];
    if (index === 1 || index === 0) {
      spanLeft.innerText = slideTitles[index + 7];
    } else {
      spanLeft.innerText = slideTitles[index - 2];
    }
  }
  if (index === 0) {
    setTimeout(() => {
      images.style.transform = `translate3d(-${width * imageLen}rem, 0px, 0px)`;
      images.style.transition = "all 0s ease 0s";
    }, 300);
    index = imageLen;
  }
  index -= 1;
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("current");
    dots[index].classList.add("current");
  }
});
