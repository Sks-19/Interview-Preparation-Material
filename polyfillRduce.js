let ar = [1, 2, 3, 4, 5, 6];

console.log(ar.reduce((val, acc) => (acc = acc + val), 0));

Array.prototype.polyReduce = function (func, acc) {
  let accu = acc === undefined ? undefined : acc;

  for (let i = 0; i < this.length; i++) {
    if (accu !== undefined) {
      accu = func.call(undefined, accu, this[i], i, this);
    } else {
      accu = this[i];
    }
  }
  return accu;
};

console.log(ar.polyReduce((val, acc) => (acc = acc + val)));
