let x = 'hello';

function isPalindrome(x) {
    let chars = x.toLowerCase().split('');
    let revChars = x.toLowerCase().split('').reverse();
    console.log(chars);
    // console.log(revChars);
    
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === revChars[i]) {
        return true;
      } else {
        return false;
      }
    }
  }

console.log(isPalindrome(x));