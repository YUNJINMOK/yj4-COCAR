const div = document.querySelectorAll(".text");

// Check if the device is not a mobile device or window width is greater than 760px
if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || window.innerWidth > 760) {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = `translateX(0px)`;
      } else {
        entry.target.style.opacity = 0;
        entry.target.style.transform = `translateX(50px)`;
      }
      entry.intersectionRatio;
    });
  });

  observer.observe(div[0]);
  observer.observe(div[1]);
  observer.observe(div[2]);
  observer.observe(div[3]);
  observer.observe(div[4]);
} else {
  // Disable the Intersection Observer for mobile devices or small screens
  div.forEach((element) => {
    element.style.opacity = '';
    element.style.transform = '';
  });
}
