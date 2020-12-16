let hours = +prompt("Enter hours");
let min = +prompt("Enter minutes");
let sec = +prompt("Enter seconds");
function isNumber(value){
    return typeof value === "number" && !isNaN(value);
}
if (isNumber(hours) && isNumber(min) && isNumber(sec)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
if (hours > 0 && hours < 24) {
    console.log("Корректно введены часы");
} else {
    console.log("Не корректно введены часы");
}
if (min > 0 && min < 60) {
    console.log("Корректно введены минуты");
} else {
    console.log("Не корректно введены минуты");
}
if (sec > 0 && sec < 60) {
    console.log("Корректно введены секунды");
} else {
    console.log("Не корректно введены секунды");
}