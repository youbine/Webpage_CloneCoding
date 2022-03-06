const images = document.querySelectorAll(".favorite__text");
const favWrap = document.querySelector(".favorite");
const magazineWrap = document.querySelector(".magazine");
const sbstoreWrap = document.querySelector(".sbstore");
const sbstorePics = document.querySelectorAll(".sbstore__slide");

function scrollImages() {
  images.forEach((image) => {
    const scrollAt = window.scrollY;
    const windowHeight = window.innerHeight;
    const allHeight = scrollAt + windowHeight;
    const favHeight = favWrap.offsetTop;
    const magazineHeight = magazineWrap.offsetTop;

    allHeight > favHeight
      ? image.classList.add("scrollIn")
      : image.classList.remove("scrollIn");

    allHeight > magazineHeight
      ? document.querySelector(".magazine__pic").classList.add("scrollIn")
      : document.querySelector(".magazine__pic").classList.remove("scrollIn");

    sbstorePics.forEach((pic) => {
      const sbstoreHeight = sbstoreWrap.offsetTop;

      if (allHeight > sbstoreHeight) {
        pic.classList.add("scrollIn");
        document.querySelector(".sbstore__btn").classList.add("scrollIn");
      } else {
        pic.classList.remove("scrollIn");
        document.querySelector(".sbstore__btn").classList.remove("scrollIn");
      }
    });
  });
}

window.addEventListener("scroll", scrollImages);
