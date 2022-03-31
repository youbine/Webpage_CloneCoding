const exhibits = document.querySelectorAll(".exhibit");
const info = document.querySelector(".info");

exhibits.forEach((exhibit) => {
  const seeMore = exhibit.querySelector("span");
  exhibit.addEventListener("click", (event) => {
    if (event.target.classList.contains("click")) {
      for (i = 0; i < exhibits.length; i++) {
        exhibits[i].style.display = "block";
      }
      info.classList.remove("active");
    } else {
      for (i = 0; i < exhibits.length; i++) {
        exhibits[i].style.display = "none";
        exhibit.classList.remove("enter");
      }
      info.classList.add("active");
      event.target.style.display = "block";
    }
    exhibit.style.transition = "1s ease-in-out";
    exhibit.classList.toggle("click");
  });

  exhibit.addEventListener("mouseenter", () => {
    exhibit.classList.add("enter");
    seeMore.style.display = "block";
    if (exhibit.classList.contains("click")) {
      seeMore.style.display = "none";
      exhibit.classList.remove("enter");
    }
  });

  exhibit.addEventListener("mouseleave", () => {
    exhibit.classList.remove("enter");
    seeMore.style.display = "none";
  });
});