let operation = '+';
let value1 = 4;
let value2 = 7;

// Switch statements require a return statement to perform an operation

function basicMath(operation, value1, value2) {
    switch(operation) {
        case '+':
            return value1 + value2;
    }
}

console.log(basicMath(operation, value1, value2));