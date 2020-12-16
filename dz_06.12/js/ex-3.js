
let num = +prompt("Enter number");
function isNumber(value){
    return typeof value === "number" && !isNaN(value);
}
if (isNumber(num)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
if (num >= 0) {
    console.log(num);
} else {
    console.log(-num);
}