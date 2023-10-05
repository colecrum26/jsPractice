let number = -32;

function sumDigits(number) {
    let numArr = Math.abs(number).toString().split('').map(Number);
    return numArr.reduce((a, b) => a + b, 0);
  }

console.log(sumDigits(number));