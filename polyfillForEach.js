let arr = [1, 2, 3, 4, 5];

arr.forEach((val) => console.log(val));

Array.prototype.polyForEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

arr.polyForEach((val) => console.log(val));
