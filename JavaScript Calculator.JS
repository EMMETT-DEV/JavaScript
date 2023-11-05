function calculate(num1,num2,operator){
    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid operator,please input +,/,-,*";


    }
}

let sum = calculate(20, 40, "+");
let difference = calculate(34, 22, "-");
let product = calculate(2, 4, "*");
let quotient = calculate(80, 20, "/");

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("product:", product);
console.log("Quotient:", quotient);
