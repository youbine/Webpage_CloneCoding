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
var scene2 = new ScrollMagic.Scene({
  triggerElement: ".sec__two__textContainer",
  duration: "100%",
  offset: 0,
  triggerHook: 0.5,
})
  .setClassToggle(".sec__two__textContainer", "textToggle")
  .addTo(controller);

var maxSpread = TweenMax.to(".sec__three__proMax", 1, {
  left: "5%",
});
var maxSpread2 = TweenMax.to(".sec__three__proMax", 1, {
  left: "11%",
});

var spreadAni1 = new ScrollMagic.Scene({
  triggerElement: ".sec__three",
  duration: "100%",
  offset: -180,
  triggerHook: 0.5,
})
  .setTween(maxSpread)
  .addTo(controller);

var spreadAni2 = new ScrollMagic.Scene({
  triggerElement: ".sec__three",
  duration: "100%",
  offset: 570,
  triggerHook: 0.5,
})
  .setTween(maxSpread2)
  .addTo(controller);

var proSpread = TweenMax.to(".sec__three__pro", 1, {
  right: "5%",
});
var proSpread2 = TweenMax.to(".sec__three__pro", 1, {
  right: "11%",
});

var spreadAni1 = new ScrollMagic.Scene({
  triggerElement: ".sec__three",
  duration: "100%",
  offset: -180,
  triggerHook: 0.5,
})
  .setTween(proSpread)
  .addTo(controller);

var spreadAni2 = new ScrollMagic.Scene({
  triggerElement: ".sec__three",
  duration: "100%",
  offset: 570,
  triggerHook: 0.5,
})
  .setTween(proSpread2)
  .addTo(controller);
