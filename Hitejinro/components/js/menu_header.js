const header = document.querySelector(".navs__menu");
const navs = header.querySelectorAll("li");

navs.forEach((nav) =>
  nav.addEventListener("mouseenter", () => {
    span = nav.children[1];
    span.className = "bottom_line";
  })
);

navs.forEach((nav) =>
  nav.addEventListener("mouseleave", () => {
    span = nav.children[1];
    span.className = "";
  })
);
