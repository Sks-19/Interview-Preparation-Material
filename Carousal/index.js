let first = 0;

let displayCarousal = (val) => {
  let showCarousal = document.querySelectorAll(".carousal-item");

  for (let i = 0; i < showCarousal.length; i++) {
    showCarousal[i].style.display = "none";
  }
  showCarousal[val].style.display = "block";
};

displayCarousal(first);

const prevClicked = () => {
  f = (first - 1) % 3;
  f < 0 ? (first = 2) : (first = f);
  displayCarousal(Math.abs(first));
};

const nextClicked = () => {
  first = (first + 1) % 3;
  displayCarousal(first);
};
