let num = 1;

function countSheep(num) {
  let arr = Array(num).fill(0);
  if (num === 0) {
    return "";
  } else {
    for (let i = 0; i < arr.length; i++) {
        arr.push(i + 'sheep...' );
    }
  } 
  return arr.join('');
}
console.log(countSheep(num));
