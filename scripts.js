const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

let a, b, op;

const operate = function(op, a, b) {
    let ans;
    switch(op) {
        case "+":
            ans = add(a, b);
            break;
        case "-":
            ans = subtract(a, b);
            break;
        case "*":
            ans = multiply(a, b);
            break;
        case "/":
            ans = divide(a, b);
            break;
        default:
            console.log("Unknown expression!");
    }
    return ans;
}


console.log("&ES&")