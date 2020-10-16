function findEvenNumbers(number) {
  let numStr = number.toString().split("");
  let evenNums =
    +numStr
      .filter((digit) => {
        if (+digit % 2 === 0) return +digit;
      })
      .sort((a, b) => b - a)
      .join("") || 0;
  return new Set(evenNums);
}

console.log(findEvenNumbers(1523947232032));
