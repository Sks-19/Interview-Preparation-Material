const bttn = document.getElementById("btn");

const throttle = (func, delay) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const handleClick = debounce(() => console.count("clicked"), 3000);

bttn.addEventListener("click", handleClick);
