let num = +prompt("Entrer length");
let num1 = +prompt("Entrer length");
function isNumber(value){
    if (typeof value === "number" && !isNaN(value)) {
        return "Number";
    } else {
        throw "Enter number"
    }
}
console.log(isNumber(num));
console.log(isNumber(num1));
function countSquare(ln, ln1){
    if ((typeof ln === "number" && !isNaN(ln) && ln !== 0) && (typeof ln1 === "number" && !isNaN(ln1) && ln1 !== 0)) {
        return ln * ln1;
    } else if (ln === 0) {
        return ln1 * ln1;
    } else if (ln1 === 0) {
        return ln * ln;
    }
}
alert(countSquare(num, num1));