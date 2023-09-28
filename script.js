const navBar = document.querySelector(".navbar");

let prevScollpos = window.scrollY;

window.addEventListener("scroll", function () {
  let currScrollpos = window.scrollY;

  if (currScrollpos > prevScollpos) {
    navBar.style.transform = `translateY(-105%)`;
  } else {
    navBar.style.transform = `translateY(0%)`;
  }
  prevScollpos = currScrollpos;
});
