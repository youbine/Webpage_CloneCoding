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
    .addTo(controller)
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

new ScrollMagic.Scene({
  triggerElement: ".sec__five__section.Text ",
  offset: 0,
  duration: "120%",
})
  .setTween(".sec__five__section.Text > div", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    ease: Linear.easeNone,
  })
  .addTo(controller)

new ScrollMagic.Scene({
  triggerElement: ".photoText",
  offset: -350,
  duration: "30%",
})
  .setTween(".fade-in", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    opacity: 1,
    ease: Linear.easeNone,
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".contents > video",
  offset: 700,
  duration: "30%",
})
  .setTween(".videoText", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    opacity: 1,
    ease: Linear.easeNone,
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".sec__five1",
  offset: 0,
  duration: "30%",
})
  .setTween(".sec__five1__text > p:last-child", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    opacity: 1,
    ease: Linear.easeNone,
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".sec__five1",
  offset: 0,
  duration: "100%",
  reverse: true,
})
  .setTween(".sec__five1 > img", {
    transform: "matrix(1, 0, 0, 1, 0, -150)",
    ease: Linear.easeNone,
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".sec__five2",
  offset: 100,
  duration: "40%",
})
  .setTween(".sec__five2__text", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    opacity: 1,
    ease: Linear.easeNone,
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".sec__five3",
  offset: 100,
  duration: "40%",
})
  .setTween(".sec__five3__text", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    opacity: 1,
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
  triggerElement: ".sec__five5",
  offset: 100,
  duration: "40%",
})
  .setTween(".sec__five5__text", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    opacity: 1,
    ease: Linear.easeNone,
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".sec__five6",
  offset: -120,
  duration: "40%",
})
  .setTween(".sec__five6__text, .sec__five6__text > p:last-child", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    opacity: 1,
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
