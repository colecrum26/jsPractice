let arr1 = [true, true, true, true, false];
function ToF(arr) {
  for (let i = 0; i < arr.length; i++) {
        if (arr[i] == false) {
          return true;
        }
      } return false;
  }


console.log(ToF(arr1));
