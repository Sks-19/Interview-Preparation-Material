const arr = [1, 2, 3, 4, 5, [2, 3, [1, [2, [3, [4]]]]]];

console.log(arr.flat(5));

function flattenArray(array, res = []) {
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      res.push(array[i]);
    } else {
      flattenArray(array[i], res);
    }
  }
  return res;
}

Array.prototype.polyFlat = function () {
  let res = [];
  let arr = this;

  function flat(arr, res) {
    for (let i = 0; i < arr.length; i++) {
      if (!Array.isArray(arr[i])) {
        res.push(arr[i]);
      } else {
        flat(arr[i], res);
      }
    }
    return res;
  }
  return flat(arr, res);
};
console.log("flattery", flattenArray(arr));

console.log("flat", arr.polyFlat());
