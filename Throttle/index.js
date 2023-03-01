const bttn = document.getElementById("btn");

const throttle = (func, delay) => {
  let flag = true;

  return function (...args) {
    if (flag) {
      func(...args);
      flag = false;

      timer = setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const handleClick = throttle(() => console.count("clicked"), 3000);

bttn.addEventListener("click", handleClick);
