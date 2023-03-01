function getPromise(i) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(i), Math.random() * 5000);
  });
}

const arr = [];

for (let i = 1; i < 11; i++) {
  arr.push(getPromise(i));
}

console.log(arr);
// function printInOrder(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     Promise.resolve(arr[i]).then((val) => {
//       console.log(val);
//     });
//   }
// }

function printInOrder(arr) {
  Promise.all(arr).then((val) => {
    console.log(val);
  });
}

// printInOrder(arr);

class MyPromise {
  static all(promises) {
    let res = [];
    return new Promise((resolve, reject) => {
      if (promises.length === 0) {
        resolve([]);
      } else {
        promises.forEach((promise, index) => {
          if (promise instanceof Promise) {
            promise
              .then((value) => {
                res[index] = value;

                if (res.length === promises.length) {
                  resolve(res);
                }
              })
              .catch(function (error) {
                reject(error);
              });
          } else {
            res[index] = promise;
          }
          if (res.length === promises.length) {
            resolve(res);
          }
        });
      }
    });
  }
}

function printInOrder(arr) {
  MyPromise.all(arr).then((val) => {
    console.log(val);
  });
}

printInOrder(arr);
