let age = 16;

function drink(age) {
    return age < 14 ? 'drink toddy' :
            14 <= age && age < 18 ? 'drink coke':
              18 <= age && age < 21 ? 'drink beer': 'drink whisky';
  };

console.log(drink(age));