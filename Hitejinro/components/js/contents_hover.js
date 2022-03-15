const contents = document.querySelectorAll(".content");

contents.forEach((content) =>
  content.addEventListener("mouseenter", () => {
    describe = content.querySelector(".describe");
    p = content.querySelector(".describe > p");
    if (content.classList[1] === "__6" || content.classList[1] === "__8") {
      describe.style.animation = "scaleup_top 0.2s";
    } else {
      describe.style.animation = "scaleup 0.2s";
    }
    describe.style.opacity = "1";
    p.style.opacity = "1";
  })
);
contents.forEach((content) =>
  content.addEventListener("mouseleave", () => {
    describe = content.querySelector(".describe");
    p = content.querySelector(".describe > p");
    if (content.classList[1] === "__6" || content.classList[1] === "__8") {
      describe.style.animation = "scaledown_top 0.2s";
    } else {
      describe.style.animation = "scaledown 0.1s";
    }
    describe.style.opacity = "0";
    p.style.opacity = "0";
  })
);
