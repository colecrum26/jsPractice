let arr = ['Hello', 'Goodbye', 'Hello Again']

function removeEveryOther(arr){
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      console.log(i);
      let res = arr.slice(0);
      return res;
    }
  }
}

console.log(removeEveryOther(arr));