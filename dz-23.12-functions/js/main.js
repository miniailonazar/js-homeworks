let num = +prompt("Entrer first num");
let num1 = +prompt("Entrer second num");
function isNumber(value){
    if (typeof value === "number" && !isNaN(value)) {
        return "Number";
    } else {
        throw "Enter number"
    }
}
console.log(isNumber(num));
console.log(isNumber(num1));
function doComparison(num, num1) {
    if (num > num1) {
        return "1";
    } else if (num1 > num) {
        return "2";
    } else {
        return "0";
    }
}
alert(doComparison(num, num1));