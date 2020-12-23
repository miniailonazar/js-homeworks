let num = +prompt("Enter first num in diapason");
let num1 = +prompt("Enter second num in diapason");
let n = num <= num1 ? num : num1;
let p = num >= num1 ? num : num1;
function doAlert(i) {
    alert(i);
}
function isNumber(value){
    if (typeof value === "number" && !isNaN(value)) {
        return "Number";
    } else {
        throw "Enter number"
    }
}
console.log(isNumber(num));
function findNum(num) {
    let k = 0;
    for (let i = 0; i <= num; i++){
        if (num % i !== 0 ) {
            continue;
        } else {
            k++;
        }
    }
    if (k === 2) {
        return("Простое");
    } else {
        return("Не простое");
    }
}
function dodiap(diap, diap1) {
    for (let i = diap; i <= diap1; i++){
    if(findNum(i) === "Простое"){
        doAlert(i);
    } else {
        continue;
    }
    }
}
dodiap(n, p);