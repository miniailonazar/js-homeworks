let num = +prompt("Entrer num");
let res = 1;
function isNumber(value){
    if (typeof value === "number" && !isNaN(value)) {
        return "Number";
    } else {
        throw "Enter number"
    }
}
console.log(isNumber(num));
function dofactorial(num, res) {
    while(num>0){
        res=res*num;
        num--;
    }
    return res;
}
alert(dofactorial(num, res));