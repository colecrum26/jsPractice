let number = -32;

function sumDigits(number) {
    let numArr = String(number).split('').map(Number);
    console.log(numArr);
    return numArr.reduce((a, b) => a + b, 0);
  }

console.log(sumDigits(number));