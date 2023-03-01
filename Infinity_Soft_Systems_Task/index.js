let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
  //   x[slideIndex].style.display = "block";
}

let timeline = document.querySelector(".timeline");
console.log(timeline);
window.addEventListener("scroll", function (e) {
  let y = this.window.scrollY;
  let scrollHeight = this.document.body.scrollHeight * 0.3;
  console.log(y, scrollHeight);
  if (y >= scrollHeight) {
    timeline.classList.add("show");
  }
});
