let num = +prompt(" Enter five-digit number");
function isNumber(value){
    return typeof value === "number" && !isNaN(value);
}
if (isNumber(num)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
let first = num / 10000;
let second = (num / 1000)%10;
let fourth = (num % 100) / 10;
let fifth = num % 10;
if (first.toFixed() === fifth.toFixed() && second.toFixed() === fourth.toFixed()) {
    console.log("Палиндром");
} else {
    console.log("Не палиндром");
}