const sns = document.querySelectorAll(".sns__list");
const snsList = document.querySelector(".sns__list__inner");
const snsDots = document.querySelectorAll(".sns__dot");
const snsWidth = 67;

let snsIndex = 0;
slideSns();
const snsToggleDot = (click) => {
  slideSns((snsIndex = click));
};
function slideSns() {
  if (snsIndex >= sns.length) {
    snsIndex = 0;
  }
  for (i = 0; i < snsDots.length; i++) {
    snsDots[i].classList.remove("current__sns");
  }
  snsIndex++;
  snsList.style.transform = `translate3d(-${
    snsWidth * (snsIndex - 1)
  }rem, 0px, 0px)`;
  snsDots[snsIndex - 1].classList.add("current__sns");
  setTimeout(slideSns, 5000);
  //   console.log(snsIndex);
}
