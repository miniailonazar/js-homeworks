let num = +prompt("Enter three-digit num");
function isNumber(value){
    return typeof value === "number" && !isNaN(value);
}
if (isNumber(num)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
let third = num % 10;
let second = (num - third) / 10 % 10;
let first = ((num - third) / 10 - second) / 10;
if (first === second || first === third || third === second) {
    console.log("Есть одинаковые цифры");
} else {
    console.log("Нет одинаковых цифр");
}