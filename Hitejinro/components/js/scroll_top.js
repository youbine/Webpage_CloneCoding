const scrollBtn = document.querySelector(".scroll");

window.addEventListener("scroll", () => {
  const currentAt = window.scrollY;
  if (currentAt > 0) {
    scrollBtn.style.opacity = "1";
  } else if (currentAt === 0) {
    scrollBtn.style.opacity = "0";
  }
});