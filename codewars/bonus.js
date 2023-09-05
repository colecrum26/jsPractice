let salary = 10000;
let bonus = false;


function bonusTime(salary, bonus) {
    if (bonus) {
      let t = (salary * 10).toString();
      return '\u00A3' + t;
    } else {
      return '\u00A3' + salary;
    }
  }

console.log(bonusTime(salary, bonus));