const reverseString = (str) => {
  let arr = str.split(" ");
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    const rev = arr[i].split("").reverse().join("");
    res.push(rev);
  }
  console.log(res.join(" "));
};

reverseString("Welcome to the Javascript World!");
