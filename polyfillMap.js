let arr = [1, 2, 3, 4, 5];

let mappedArr = arr.map((val) => val * val);
console.log(mappedArr);

Array.prototype.polyMap = function (func) {
  let res = [];
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i]));
  }
  return res;
};

console.log(arr.polyMap((val) => val * val));
