const spans = document.querySelectorAll(".sec__two__wrap > span");
var controller = new ScrollMagic.Controller();

for (i = 0; i <= spans.length; i++) {
  var scene1 = new ScrollMagic.Scene({
    triggerElement: spans[i],
    duration: i === 1 ? "30%" : i === 0 ? "50%" : "20%",
    offset: i === 0 ? -200 : 50,
    triggerHook: 0.5,
  })
    .setClassToggle(spans[i], "textToggle")
    .addTo(controller);
  // .addIndicators({
  //   name: "(box) " + i,
  // });
}
new ScrollMagic.Scene({
  triggerElement: ".sec__two__textContainer",
  duration: "100%",
  offset: 0,
  triggerHook: 0.5,
})
  .setClassToggle(".sec__two__textContainer", "textToggle")
  .addTo(controller);

var maxSpread = TweenMax.to(".sec__three__proMax", 1, {
  transform: "matrix(1, 0, 0, 1, 50, 0)",
});
var maxSpread2 = TweenMax.to(".sec__three__proMax", 1, {
  transform: "matrix(1, 0, 0, 1, 100, 0)",
});

new ScrollMagic.Scene({
  triggerElement: ".sec__three",
  duration: "50%",
  offset: -100,
  triggerHook: 0.5,
})
  .setTween(maxSpread)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".sec__three",
  duration: "80%",
  offset: 450,
  triggerHook: 0.5,
})
  .setTween(maxSpread2)
  .addTo(controller);

var proSpread = TweenMax.to(".sec__three__pro", 1, {
  transform: "matrix(1, 0, 0, 1, -50, 0)",
});
var proSpread2 = TweenMax.to(".sec__three__pro", 1, {
  transform: "matrix(1, 0, 0, 1, -100, 0)",
});

new ScrollMagic.Scene({
  triggerElement: ".sec__three",
  duration: "50%",
  offset: -100,
  triggerHook: 0.5,
})
  .setTween(proSpread)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".sec__three",
  duration: "80%",
  offset: 450,
  triggerHook: 0.5,
})
  .setTween(proSpread2)
  .addTo(controller);

const slides = document.querySelectorAll(".sec__four__row");

for (let i = 0; i < slides.length; i++) {
  var scene = new ScrollMagic.Scene({
    triggerElement: slides[i],
    duration: i === 3 ? "1" : "100%",
    triggerHook: "onLeave",
  })
    .setPin(slides[i], { pushFollowers: false })
    .addTo(controller);
}

new ScrollMagic.Scene({
  triggerElement: ".sec__four__row.color",
  offset: 0,
  duration: "100%",
})
  .setTween(".iPhone__color > div, .sec__four__column.color.bgBlack > div", {
    transform: "matrix(1, 0, 0, 1, 0, -100)",
    ease: Linear.easeNone,
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".sec__four__row.steel",
  offset: 0,
  duration: "100%",
})
  .setTween(".steelPhone, .steelSide", {
    transform: "matrix(1, 0, 0, 1, 0, -100)",
    ease: Linear.easeNone,
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".sec__four__row.shield",
  offset: 0,
  duration: "100%",
})
  .setTween(".shieldfront, .shieldside", {
    transform: "matrix(1, 0, 0, 1, 0, -100)",
    ease: Linear.easeNone,
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".sec__four__row.shield",
  offset: 100,
  duration: "100%",
})
  .setTween(".shieldside__item > video", {
    play: true,
    ease: Linear.easeNone,
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".sec__four__row.water",
  offset: -200,
  duration: "70%",
})
  .setTween(".sec__four__row.water > div", {
    y: "-20%",
    ease: Linear.easeNone,
  })
  .addTo(controller);

function moblie() {
  if (window.innerWidth <= 1024) {
    return;
  } else {
    const height = document.querySelector(".sec__five__section.Text");

    new ScrollMagic.Scene({
      triggerElement: ".sec__five__section.Text",
      duration:
        window.innerWidth <= 1370
          ? height.offsetHeight - 400
          : height.offsetHeight - 500,
      triggerHook: 0.8,
    })
      .setPin(".sec__five__section.Text > div", { pushFollowers: true })
      .addTo(controller);
  }
}
moblie();
var sec__fiveAni = [
  ".photoText",
  ".contents > video",
  ".sec__five1",
  ".sec__five2",
  ".sec__five3",
  ".sec__five5",
  ".sec__five6",
];
var sec__fiveEle = [
  ".photoText > div:last-child",
  ".videoText",
  ".sec__five1__text > p:last-child",
  ".sec__five2__text",
  ".sec__five3__text",
  ".sec__five5__text",
  ".sec__five6__text",
];
var offset = [0, 700, 0, 100, 100, 0, -120];
var duration = ["30%", "30%", "40%", "40%", "40%", "40%", "40%"];

for (var i = 0; i < sec__fiveAni.length; i++) {
  var currentAni = sec__fiveAni[i];
  var currentEle = sec__fiveEle[i];
  let currentOffset = offset[i];
  let currentDuration = duration[i];

  var text = TweenMax.fromTo(
    currentEle,
    1,
    {
      transform: "matrix(1, 0, 0, 1, 0, 100)",
      opacity: 0.3,
      ease: Linear.easeNone,
    },
    {
      transform: "matrix(1, 0, 0, 1, 0, 0)",
      opacity: 1,
      ease: Linear.easeNone,
    }
  );

  new ScrollMagic.Scene({
    triggerElement: currentAni,
    offset: currentOffset,
    duration: currentDuration,
  })
    .setTween(text)
    .addTo(controller);
}

new ScrollMagic.Scene({
  triggerElement: ".sec__five1",
  offset: 0,
  duration: "100%",
})
  .setTween(".sec__five1 > img", {
    transform: "matrix(1, 0, 0, 1, 0, -150)",
    ease: Linear.easeNone,
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".sec__five3",
  offset: 0,
  duration: "100%",
})
  .setTween(".sec__five3 > img", {
    transform: "matrix(1, 0, 0, 1, 0, -150)",
    ease: Linear.easeNone,
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".zoom__sec1",
  offset: -200,
  duration: "150%",
})
  .setTween(".zoom__sec1 > img", {
    transform: "matrix(1, 0, 0, 1, 0, -100)",
    ease: Linear.easeNone,
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".zoom__sec2",
  offset: -120,
  duration: "40%",
})
  .setTween(".zoom__sec2 > p", {
    top: "0",
    opacity: 1,
    ease: Linear.easeNone,
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".zoom__sec3",
  offset: 0,
  duration: "40%",
})
  .setTween(".zoom__sec3 > div > p:first-child", {
    top: "0",
    opacity: 1,
    ease: Linear.easeNone,
  })
  .addTo(controller);
new ScrollMagic.Scene({
  triggerElement: ".zoom__sec3",
  offset: 200,
  duration: "40%",
})
  .setTween(".zoom__sec3 > div > p:last-child", {
    top: "0",
    opacity: 1,
    ease: Linear.easeNone,
  })
  .addTo(controller);

const images = [
  ".iPhone__color > div",
  ".sec__four__column.color.bgBlack > div",
  ".steelPhone",
  ".steelSide",
  ".shieldfront",
  ".shieldside",
];

// window.addEventListener("resize", () => {

//   for (i = 0; i <= images.length; i++) {
//     document.querySelector(images[i]).style.transform = "none";
//   }

// for (i = 0; i <= sec__fiveEle.length; i++) {
//   (document.querySelector(sec__fiveEle[i]).style.opacity = 1),
//     (document.querySelector(sec__fiveEle[i]).style.transform =
//       "matrix(1, 0, 0, 1, 0, 0)");
// }
// });
