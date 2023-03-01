const user = {
  name: "Shubham Kumar",
  age: 23,
};

const displayName = function (city, state) {
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

Function.prototype.polyCall = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not callable");
  } else {
    obj.fn = this;
    obj.fn(...args);
  }
};

displayName.call(user, "Patna", "Bihar");
displayName.polyCall(user, "Aurangabad", "Bihar");
