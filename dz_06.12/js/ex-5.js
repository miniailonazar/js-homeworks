let x = +prompt("Enter x");
let y = +prompt("Enter y");
function isNumber(value){
    return typeof value === "number" && !isNaN(value);
}
if (isNumber(x) && isNumber(y)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
if (x > 0 && y > 0) {
    console.log("Первая четверть");
} else if (x < 0 && y > 0) {
    console.log("Вторая четверть");
} else if (x < 0 && y < 0) {
    console.log("Третья четверть");
} else if (x > 0 && y < 0) {
    console.log("Четвертая четверть");
} else if (x === 0 && y < 0) {
    console.log("Четвертая четверть и Третья четверть");
} else if (x === 0 && y > 0) {
    console.log("Первая четверть и Вторая четверть");
} else if (x > 0 && y === 0) {
    console.log("Первая четверть и Четвертая четверть");
} else if (x === 0 && y === 0) {
    console.log("Первая четверть , Вторая четверть , Третья четверть , Четвертая четверть");
} else {
    console.log("Вторая четверть и Третья четверть");
}