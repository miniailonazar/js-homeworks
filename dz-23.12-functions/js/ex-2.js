let num = +prompt("Entrer num");
let num1 = +prompt("Entrer num");
let num2 = +prompt("Entrer num");
function isNumber(value){
    if (typeof value === "number" && !isNaN(value)) {
        return "Number";
    } else {
        throw "Enter number"
    }
}
console.log(isNumber(num));
console.log(isNumber(num1));
console.log(isNumber(num2));
function doNum(num, num1, num2) {
    return num * 100 + num1 * 10 + num2;
}
alert(doNum(num, num1, num2));