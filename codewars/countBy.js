let x = 1;
let n = 10;

function countBy(x, n) {
    let arr = Array(n).fill(0);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = n-- * x;
    }
    return arr.reverse();
} 


  console.log(countBy(x, n));