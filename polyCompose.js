const person = {
  name: "Shubham Kumar",
};

compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);

const getName = (person) => person.name;
// console.log(getName(person));

const upperCase = (str) => str.toUpperCase();

// console.log(upperCase(getName(person)));

const reverse = (str) => str.split("").reverse().join("");

// console.log(reverse(upperCase(getName(person))));

const res = compose(reverse, upperCase, getName)(person);

console.log("res", res);
