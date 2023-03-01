const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then((res) => {
    console.log("1 second pass");
    return wait(1);
  })
  .then((res) => {
    console.log("2 second pass");
    return wait(1);
  })
  .then((res) => {
    console.log("3 second pass");
    return wait(1);
  })
  .then((res) => {
    console.log("4 second pass");
    return wait(1);
  });
