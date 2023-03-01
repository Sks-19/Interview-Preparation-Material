let user = {
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

Function.prototype.polyBind = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not callable!");
  } else {
    obj.fn = this;
    return function () {
      return obj.fn(...args);
    };
  }
};

const dis = displayUser.bind(user, "Patna", "Bihar");
dis();

const disUser = displayUser.polyBind(user, "Aurangabad", "Bihar");
disUser();
