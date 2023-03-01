let user = {
  name: "Shubham Kumar",
  address: {
    personal: {
      city: "Aurangabad",
      state: "Bihar",
    },
    office: {
      city: "Patna",
      area: {
        landmark: "A G Colony",
      },
    },
  },
};

let resObj = {};
const magic = (obj, parent) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      magic(obj[key], parent + "_" + key);
    } else {
      resObj[parent + "_" + key] = obj[key];
    }
  }
};
magic(user, "user");

console.log(resObj);
