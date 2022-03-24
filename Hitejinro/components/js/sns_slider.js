const sns = document.querySelectorAll(".sns__list");
const snsList = document.querySelector(".sns__list__inner");
const snsDots = document.querySelectorAll(".sns__dot");
const snsWidth = 67;

let snsIndex = 0;

snsList.style.transform = `translate3d(-${snsWidth * snsIndex}rem, 0px, 0px)`;
slideSns();
snsClone();
//첫번째 div를 복사해서 마지막에 추가
function snsClone() {
  const snsFirst = snsList.firstElementChild.cloneNode(true);
  snsList.append(snsFirst);
}

const snsToggleDot = (click) => {
  snsList.style.transform = `translate3d(-${snsWidth * click}rem, 0px, 0px)`;
  snsList.style.transition = "all 0.4s ease 0s";

  for (i = 0; i < snsDots.length; i++) {
    snsDots[i].classList.remove("current__sns");
    snsDots[click].classList.add("current__sns");
  }
};

function slideSns() {
  snsIndex++;
  if (snsIndex > sns.length) {
    snsIndex = 0;
  }
  snsList.style.transform = `translate3d(-${snsWidth * snsIndex}rem, 0px, 0px)`;
  snsList.style.transition = "all 0.4s ease 0s";

  if (snsIndex === 3) {
    setTimeout(() => {
      snsList.style.transform = `translate3d(-${0}rem, 0px, 0px)`;
      snsList.style.transition = "all 0s ease 0s";
      for (i = 0; i < snsDots.length; i++) {
        snsDots[i].classList.remove("current__sns");
        snsDots[0].classList.add("current__sns");
      }
    }, 300);
  } else {
    for (i = 0; i < snsDots.length; i++) {
      snsDots[i].classList.remove("current__sns");
      snsDots[snsIndex].classList.add("current__sns");
    }
  }

  setTimeout(slideSns, snsIndex === 3 ? 1000 : 7000);
}
