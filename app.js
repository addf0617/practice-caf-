let nav = document.querySelector("nav");

function handleScroll() {
  if (window.scrollY == 0) {
    nav.style.backgroundColor = "";
  } else {
    nav.style.backgroundColor = "#212529cc";
  }
}

window.addEventListener("scroll", function () {
  requestAnimationFrame(handleScroll);
});
