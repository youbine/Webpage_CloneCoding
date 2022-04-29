const scrollBtn = document.querySelector(".scroll");
const scrollSpan = document.querySelector(".scroll > span");
const main = document.querySelector(".body__wrap");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const currentAt = window.scrollY;
  if (currentAt > 0) {
    scrollBtn.style.opacity = "1";
  } else if (currentAt === 0) {
    scrollBtn.style.opacity = "0";
  }

  if (currentAt >= main.clientHeight - footer.clientHeight * 2.4) {
    scrollSpan.style.position = "absolute";
    scrollSpan.style.right = "10%";
  } else {
    scrollSpan.style.position = "fixed";
    scrollSpan.style.right = "16%";
  }
});
