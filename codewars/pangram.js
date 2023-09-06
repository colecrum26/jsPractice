let string = "This is not a pangram.";

function isPangram(string) {
    return string.match(/([a-z])(?!.*\1)/gi).length === 26 ? true : false;
  }

//   var regex = /([a-z])(?!.*\1)/gi;
//   return (str.match(regex) || []).length === 26

console.log(isPangram(string));