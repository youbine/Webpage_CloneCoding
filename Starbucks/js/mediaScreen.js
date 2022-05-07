const favorites = document.querySelectorAll(".favorite__text");
if (matchMedia("(max-width: 960px)").matches) {
  favorites.forEach((favorite) => {
    unique = favorite.classList[0];
    unique === "first"
      ? (favorite.src =
          "https://www.starbucks.co.kr/common/img/main/mobile_menu_txt01.png")
      : unique === "second"
      ? (favorite.src =
          "https://www.starbucks.co.kr/common/img/main/mobile_menu_txt02.png")
      : "";
  });
}

const reserveImg = document.querySelector(".reserve__wrap > img");
if (matchMedia("(max-width: 930px)").matches) {
  reserveImg.src =
    "https://image.istarbucks.co.kr/img/event/2022/m_reserve_2022_indonesia_visual.jpg";
}

const sbstores = document.querySelectorAll(".sbstore__slide");
if (matchMedia("(max-width: 960px)").matches) {
  sbstores.forEach((sbstore) => {
    unique = sbstore.classList[1];
    unique === "first"
      ? (sbstore.src =
          "https://www.starbucks.co.kr/common/img/main/mobile_store_txt01.png")
      : unique === "second"
      ? (sbstore.src =
          "https://www.starbucks.co.kr/common/img/main/mobile_store_txt02.png")
      : "";
  });
}

const visual = document.querySelector(".visual");
const mobileImages = visual.querySelectorAll("img");
if (matchMedia("(max-width: 640px)").matches) {
  mobileImages.forEach((mImage) => {
    if (mImage.className === "img__drink1") {
      mImage.src =
        "https://image.istarbucks.co.kr/upload/common/img/main/2022/m_2022_Summer1_main_punchgraffiti2.png";
    } else if (mImage.className === "img__drink2") {
      mImage.src =
        "https://image.istarbucks.co.kr/upload/common/img/main/2022/m_2022_Summer1_main_rollinmint.png";
    } else if (mImage.className === "img__drink3") {
      mImage.src =
        "https://image.istarbucks.co.kr/upload/common/img/main/2022/m_2022_Summer1_main_pomeloflow.png";
    }
  });
}

const rewardsText = document.querySelector(".rewards__text");
const rewardsGiftText = document.querySelector(".rewards__gift__text");
if (matchMedia("(max-width: 819px)").matches) {
  rewardsText.innerHTML =
    "\n                <h2>\n                  스타벅스만의 특별한 혜택, <br><strong>스타벅스 리워드</strong>\n                </h2>\n\n                <p>\n                  <strong>스타벅스 회원이세요?</strong><br>\n                  로그인을 통해 나만의 리워드를 확인해보세요.\n                </p>\n                <p>\n                  <strong>스타벅스 회원이 아니세요?</strong><br>\n                  가입을 통해 리워드 혜택을 즐기세요.\n                </p>\n              ";

  rewardsGiftText.innerHTML =
    '\n                <p>\n                  회원 가입 후, 스타벅스 e-Gift Card를<br>\n                  <strong>"나에게 선물하기"로 구매하시고,<br> 편리하게\n                    등록하세요!</strong>\n                  <br>\n                  카드를 등록하여 스타벅스 리워드 회원이 되신 후,<br> 첫 구매를\n                  하시면 무료 음료쿠폰을 드립니다!\n                </p>\n              ';
}

const magazine = document.querySelector(".magazine__wrap");
if (matchMedia("(max-width: 930px)").matches) {
  const magazineImg = document.createElement("img");
  magazineImg.className = "mobile__magazine";
  magazineImg.src =
    "https://image.istarbucks.co.kr/img/event/2022/reserve_visual_m_220119.jpg";
  magazine.appendChild(magazineImg);
}
