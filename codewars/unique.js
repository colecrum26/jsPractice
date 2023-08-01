let arr = [ 1, 1, 1, 2, 1, 1 ];

function findUniq(arr) {
    for (let i = 0; i < arr.length; i++){
      if (arr[i] != arr[i + 1] && arr[i] > arr[i + 1]){
        return arr[i];
      } else {
        return arr[i + 1];
      }
    }
  }
  
console.log(findUniq(arr));