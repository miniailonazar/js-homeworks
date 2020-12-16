function isNumber(value){
    return typeof value === "number" && !isNaN(value);
}
let age = +prompt("Enter your age");
if (isNumber(age)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
if (age > 0 && age < 120) {
    console.log("OK");
} else {
    console.log("NO");
}