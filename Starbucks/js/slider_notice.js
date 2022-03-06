const noticeInner = document.querySelector(".notice__left__inner");
const noticeLists = noticeInner.querySelectorAll("li");
const listcount = noticeLists.length;

let listindex = 0;
noticeSlide(); // display first notice

function noticeSlide() {
  for (let i = 0; i < listcount; i++) {
    noticeLists[i].style.display = "none"; //true일때 실행코드
  }

  listindex++;

  listindex > listcount ? (listindex = 1) : "";

  noticeLists[listindex - 1].style.display = "block";
  setTimeout(noticeSlide, 2000); //2초마다 실행
}
