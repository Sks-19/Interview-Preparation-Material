//to calculate square of any number

const memoSquare = (num) => {
  let cache = {};

  if (cache[num]) {
    return cache[num];
  } else {
    let sq = num ** 2;
    cache[num] = sq;
    return sq;
  }
};

let s = Date.now();
console.log(memoSquare(888));
let timeTaken = Date.now() - s;
console.log(timeTaken);

let st = Date.now();
console.log(memoSquare(888));
let timeTaken1 = Date.now() - st;
console.log(timeTaken1);
