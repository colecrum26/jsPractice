let weight = 80;
let height = 1.8;

function bmi(weight, height) {
    let idx = (weight/height ** 2);
    console.log(idx);
    return idx <= 18.5 ? "Underweight" :
            idx <= 25 ? "Normal" :
              idx <= 30 ? "Overweight": "Obese";         
  }

  console.log(bmi(weight, height))