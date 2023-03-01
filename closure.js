//Print value 1 - 10

//The issue
const displayNum = () => {
  for (var i = 0; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
};
// displayNum();

//Solution using Let
const disLetNum = () => {
  for (let i = 0; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
};
// disLetNum();

//Solution using Var
const disVarNum = () => {
  for (let i = 0; i <= 5; i++) {
    function dis(val) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    dis(i);
  }
};
disVarNum();
