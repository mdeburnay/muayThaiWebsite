const divideByNextNumber = (strNum) => {
  return (
    strNum
      .split("")
      .map((n, i, arr) => {
        return n === arr[arr.length - 1] ? +n : Math.round(+n / +arr[i + 1]);
      })
      .join("") || 0
  );
};

console.log(divideByNextNumber("4381"));
