let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.filter((val) => val % 2 === 0));

Array.prototype.polyFilter = function (func) {
  let res = [];
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(arr.polyFilter((val) => val % 2 === 0));
