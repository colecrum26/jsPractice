// higher order function
myValue = 1;

function parentFunction(){
    parentValue = 3;
    console.log("outer:", parentValue)
    return function innerFunction(){
        parentValue += myValue;
        console.log("inner:", parentValue);
    }
}

// parentFunction()
// let result = parentFunction()
// result();
// result();
// result();

// Instantly Invoked Function Expression (IIFE)
//anonymous function
carID = 1
const johnDoe = (()=>{
    carID++
    console.log("outer", carID);
    return ()=> {
        carID++
        console.log("inner", carID);
    }
})();

johnDoe();

// let closure = johnDoe();
// or
// johnDoe();
// or add one (or more) empty parentheses to line 28, matching how many functions