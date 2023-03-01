let name = {
  name: "Shubham Kumar",
  age: 23,
};

const displayUser = function (city, state) {
  console.log(
    this.name +
      " is " +
      this.age +
      " years old and lives in " +
      city +
      ", " +
      state
  );
};

Function.prototype.polyApply = function (obj = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not callable!");
  } else if (!Array.isArray(args)) {
    throw new Error("Invalid Arguments");
  } else {
    obj.fn = this;
    obj.fn(...args);
  }
};

displayUser.apply(name, ["Patna", "Bihar"]);
displayUser.polyApply(name, ["Auranabad", "Bihar"]);
