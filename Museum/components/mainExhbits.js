const exhibits = document.querySelectorAll(".exhibit");

exhibits.forEach((exhibit) => {
  const seeMore = exhibit.querySelector("span");

  exhibit.addEventListener("click", () => {
    exhibit.classList.toggle("click");

    exhibit.style.transition = "0.7s ease-in-out";
    seeMore.style.display = "none";
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
    exhibit.style.transition = "0.3s ease-in-out";
    exhibit.classList.remove("enter");
    seeMore.style.display = "none";
  });
});
