let year = +prompt(" Enter year");
function isNumber(value){
    return typeof value === "number" && !isNaN(value);
}
if (isNumber(year)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Высокосный");
} else {
    console.log("Не высокосный");
}