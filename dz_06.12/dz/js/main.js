let age = +prompt("Enter age");
function isNumber(value){
    return typeof value === "number" && !isNaN(value);
}
if (isNumber(age)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
if (age > 0 && age <= 12) {
    console.log("Ребенок");
} else if (age > 12 && age <= 18) {
    console.log("Подросток");
} else if (age > 18 && age <= 60) {
    console.log("Взрослый");
} else {
    console.log("Пенсионер");
}