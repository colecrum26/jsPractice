let letter = 'a';

function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    console.log(alphabet.indexOf(letter) + 1);
    console.log( 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1));
  }

console.log(position(letter));