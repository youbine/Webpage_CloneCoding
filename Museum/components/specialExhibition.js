const specialExhibition = document.querySelector(".special__exhibitions");
const speExhibits = specialExhibition.querySelectorAll("li");
const speSpan = document.querySelector(".span__choose");

speSpan.addEventListener("click", () => {
  specialExhibition.classList.toggle("selected");
  speSpan.style.display = "none";
});

speExhibits.forEach((speExhibit) => {
  speExhibit.addEventListener("click", () => {
    speSpan.style.display = "block";
    speSpan.innerText = speExhibit.textContent;
    specialExhibition.classList.remove("selected");
  });

  speExhibit.addEventListener("mouseenter", () => {
    for (i = 0; i < speExhibits.length; i++) {
      speExhibits[i].classList.add("special__hover");
    }
    speExhibit.classList.remove("special__hover");
  });

  speExhibit.addEventListener("mouseleave", () => {
    for (i = 0; i < speExhibits.length; i++) {
      speExhibits[i].classList.remove("special__hover");
    }
  });
});

i = -1;
let showSpeExhibits = setInterval(() => {
  i++;
  speExhibits[i].style.opacity = 1;
  speExhibits[i].style.transition = "0.5s";
}, 500);
setTimeout(() => {
  clearTimeout(showSpeExhibits);
}, 3000);