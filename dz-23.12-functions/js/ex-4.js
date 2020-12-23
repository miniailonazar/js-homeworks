let num = +prompt("Enter num");
let k = 0;
function isNumber(value){
    if (typeof value === "number" && !isNaN(value)) {
        return "Number";
    } else {
        throw "Enter number"
    }
}
console.log(isNumber(num));
function findNum(num, k) {
    for (let i = 0; i <= num; i++) {
        if (num % i !== 0) {
            continue;
        } else {
            k++;
        }
        rem = i;
        console.log(rem);
    }
    if (k === 2) {
        return "Простое";
    } else {
        return "Не простое";
    }
}
console.log(findNum(num, k));