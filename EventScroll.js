const div = document.querySelectorAll("#MOBILITY_textbox");
let observer = new IntersectionObserver((e) => {
  e.forEach((add) => {
    if (add.isIntersecting) {
      add.target.style.opacity = 1;
      add.target.style.transform = `rotate(0deg)`;
    } else {
      add.target.style.opacity = 0;
      add.target.style.transform = `rotate(90deg)`;
    }
    add.intersectionRatio;
  });
});

observer.observe(div[0]);
observer.observe(div[1]);
observer.observe(div[2]);
