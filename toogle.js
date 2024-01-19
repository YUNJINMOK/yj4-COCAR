document.querySelector(".nabar_toogleBtn").addEventListener("click", () => {
  const navbar_meun = document.querySelector(".navbar_meun");
  const icon = document.querySelector(".icon");

  navbar_meun.classList.toggle("visible");
  icon.classList.toggle("visible");
});
