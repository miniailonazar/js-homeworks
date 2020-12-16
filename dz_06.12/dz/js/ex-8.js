let len = +prompt("Введите длину окружности");
let per = +prompt("Введите периметр");
function isNumber(value){
    return typeof value === "number" && !isNaN(value);
}
if (isNumber(len)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
if (isNumber(per)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
if (len / Math.PI >= per / 4) {
    console.log("Можно вписать");
} else {
    console.log("Нельзя вписать");
}