const div = document.querySelectorAll(".text");
let observer = new IntersectionObserver((e) => {
  e.forEach((add) => {
    if (add.isIntersecting) {
      add.target.style.opacity = 1;
      add.target.style.transform = `translateX(0px)`;
    } else {
      add.target.style.opacity = 0;
      add.target.style.transform = `translateX(50px)`;
    }
    add.intersectionRatio;
  });
});

observer.observe(div[0]);
observer.observe(div[1]);
observer.observe(div[2]);
observer.observe(div[3]);
observer.observe(div[4]);