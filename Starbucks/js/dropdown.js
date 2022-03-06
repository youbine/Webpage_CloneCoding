const nav = document.querySelector(".sub__nav__inner");
const list = nav.querySelectorAll(".sub__list");

function handleMouseEnter() {
  const dropdown = this.querySelector(".dropdown");
  const link = this.querySelector("a");
  
  dropdown.style.display = "block";
  link.style.color = "#669900";
  link.style.background = "#2c2a29";
}

function handleMouseLeave() {
  const dropdown = this.querySelector(".dropdown");
  const link = this.querySelector("a");

  dropdown.style.display = "none";
  link.style.color = "black";
  link.style.background = "#f6f5ef";
}

list.forEach((a) => a.addEventListener("mouseenter", handleMouseEnter));
list.forEach((a) => a.addEventListener("mouseleave", handleMouseLeave));
