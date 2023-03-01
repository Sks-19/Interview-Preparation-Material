// import { parallel } from "async";

const promise1 = Promise.resolve(5);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Shubham");
});
const promise3 = 45;

const promises = [promise1, promise2, promise3];

Promise.all(promises).then((val) => {
  console.log(val);
});

// parallel(
//     [
//       function (callback) {
//         callback(null, "one");
//       },
//       function (callback) {
//         callback(null, "two");
//       },
//       function (callback) {
//         callback(null, "three");
//       },
//     ],
//     function (err, results) {
//       cosole.log("done");
//     }
//   );
