const side = document.querySelector("aside");
const sideMenuTitle = side.querySelectorAll(".liquor");
const colors = [
  "#ffc100",
  "#99cc41",
  "#f68a0a",
  "#7436b5",
  "#2dabdf",
  "#ff617f",
  "#727272",
];
sideMenuTitle.forEach((title) =>
  title.addEventListener("mouseenter", (event) => {
    const sideMenuSub = event.target.querySelector(".side__menu__sub");
    const SubListArray = Array.prototype.slice.call(sideMenuTitle);
    const currentMouse = event.target;
    const indexNum = SubListArray.indexOf(currentMouse);

    currentMouse.style.backgroundColor = colors[indexNum];
    sideMenuSub.style.backgroundColor = colors[indexNum];
    sideMenuSub.style.display = "inline-block";
    side.style.width = "12.5rem";
  })
);

sideMenuTitle.forEach((title) =>
  title.addEventListener("mouseleave", (event) => {
    const sideMenuSub = event.target.querySelector(".side__menu__sub");
    const currentMouse = event.target;

    currentMouse.style.backgroundColor = "";
    sideMenuSub.style.backgroundColor = "";
    sideMenuSub.style.display = "none";
    side.style.width = "6.25rem";
  })
);
