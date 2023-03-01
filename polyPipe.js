const person = {
  name: "Shubham Kumar",
};

let pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);
// let compose =
//   (...fns) =>
//   (x) =>
//     fns.reduceRight((v, f) => f(v), x);

const getName = (person) => person.name;
// console.log(getName(person));

const upperCase = (str) => str.toUpperCase();

// console.log(upperCase(getName(person)));

const reverse = (str) => str.split("").reverse().join("");

// console.log(reverse(upperCase(getName(person))));

const res = pipe(getName, upperCase, reverse)(person);

console.log("res", res);
