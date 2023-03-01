const { Map, List, fromJS, toJS } = require("immutable");
const assert = require("assert").strict;

//Normal JavaScript
const person = {
  name: "Shubham Kumar",
  address: ["Angrahi", "Aurangabad", "BIHAR"],
};
//Immutable JS
const immutablePreson = Map({
  name: "Shubham Kumar",
  address: List(["Angrahi", "BIHAR"]),
});
//Using fromJS
const immPerson = fromJS(person);

const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set("b", 50);

// console.log(map1.get("b"), map2.get("b"));

const list1 = List([1, 2]);
const list2 = list1.push(4, 5, 6);
// console.log(list2)
const list3 = list2.unshift(0);
const list4 = list1.concat(list2, list3);

// console.log(list1);
// console.log(list2);
// console.log(list3);
// console.log(list4);
// assert.equal(list4.get(0), 1);

//Start Using Immutable

//1. Getting a nested value

//Normal JS

const data = { my: { full: { name: "Shubham" } } };
const myName = data.my.full.name;
// const myBadName = data.my.last.name;
console.log(myName);
// console.log(myBadName);

//Immutable JS

const data1 = fromJS({ my: { full: { name: "Shubham Sharma" } } });
const goodName = data1.getIn(["my", "full", "name"]);
const badName = data1.getIn(["my", "last", "name"]);

// console.log(goodName);
// console.log(badName);

//Common JS
const pets = ["cat", "dog"];
pets.push("cow");
pets.push("horse");
console.log(pets);

//Immutable JS
const pets1 = List(["cat", "dog"]);
const final = pets1.push("rat").push("snake");
console.log(pets1.toJS());
console.log(final.toJS());
