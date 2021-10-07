const butonToTop = document.querySelector(".btnToTop");
document.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > 460) {
    butonToTop.classList.add("showBtnToTop");
  } else {
    butonToTop.classList.remove("showBtnToTop");
  }
});
