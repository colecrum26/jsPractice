let string = "The quick brown fox jumps over the lazy dog.";

function isPangram(string) {
    return string.toLowerCase().match(/\w/g) ? true : false;
  }

console.log(isPangram(string));