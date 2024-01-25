// scroll.js

let prevScrollpos = window.scrollY || window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.scrollY || window.pageYOffset;
  let navbar = document.getElementById("nav_bar");

  if (prevScrollpos > currentScrollPos) {
    // 스크롤을 올릴 때
    navbar.style.top = "0";
  } else {
    // 스크롤을 내릴 때
    navbar.style.top = "-60px"; // 네비게이션 바를 숨김
  }

  prevScrollpos = currentScrollPos;
};
