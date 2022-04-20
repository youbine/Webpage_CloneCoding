const selectSpeExh = document.querySelector(".selectSpeExh__options");
const selectSpeExhOptions = selectSpeExh.querySelectorAll("li");
const speSpan = document.querySelector(".span__choose");
const speExhibitionLists = document.querySelectorAll(
  ".specialExhibitions__list"
);

speSpan.addEventListener("click", () => {
  selectSpeExh.classList.toggle("selected");
  speSpan.style.display = "none";
});

selectSpeExhOptions.forEach((speExhibit) => {
  speExhibit.addEventListener("click", () => {
    speSpan.style.display = "block";
    speSpan.innerText = speExhibit.textContent;
    selectSpeExh.classList.remove("selected");
    for (i = 0; i < speExhibitionLists.length; i++) {
      const classname = speExhibitionLists[i].classList[1];
      if (classname === speExhibit.className) {
        let childcounts = speExhibitionLists[i].childElementCount * 23;

        speExhibitionLists[i].style.display = "block";
        speExhibitionLists[i].style.width = `${childcounts}rem`;
      } else {
        speExhibitionLists[i].style.display = "none";
      }
    }
  });

  speExhibit.addEventListener("mouseenter", () => {
    for (i = 0; i < selectSpeExhOptions.length; i++) {
      selectSpeExhOptions[i].classList.add("special__hover");
    }
    speExhibit.classList.remove("special__hover");
  });

  speExhibit.addEventListener("mouseleave", () => {
    for (i = 0; i < selectSpeExhOptions.length; i++) {
      selectSpeExhOptions[i].classList.remove("special__hover");
    }
  });
});
