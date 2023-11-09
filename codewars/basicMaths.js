let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(v1){
  let a = v1,
      b = a;   
  return a + b;
}

function equal2(v6, v3){
    let a =  v6, //set number value to a
        b =  v3; //set number value to b
    return a - b;
  }
  
  function equal3(v1, v5){
    let a =  v1, //set number value to a
        b =  v5; //set number value to b
    return a * b;
  }
  
  function equal4(v4, v5){
    let a =  v4, //set number value to a
        b =  v5; //set number value to b
    return a / b;
  }
  
  function equal5(v4, v2){
    let a =  v4, //set number value to a
        b =  v2; //set number value to b
    return a % b;
  }

console.log(equal1(v1));
console.log(equal2(v6, v3));
console.log(equal3(v1, v5));
console.log(equal4(v4, v5));
console.log(equal5(v2, v4));