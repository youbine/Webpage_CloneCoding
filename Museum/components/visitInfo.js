const spans = document.querySelectorAll(".select__visit");
const visitInfos = document.querySelectorAll(".visit__info");
spans.forEach((span) => {
  span.addEventListener("mouseover", () => {
    const hoverSpan = span.classList[1];
    for (i = 0; i < visitInfos.length; i++) {
      visitInfos[i].style.display = "none";
      if (visitInfos[i].classList[1] === hoverSpan) {
        visitInfos[i].style.display = "block";
      }
    }
  });
});
