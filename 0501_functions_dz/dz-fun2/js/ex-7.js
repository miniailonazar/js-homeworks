let num;
let res = 0;
function sPowerN(n,k) {
    if ((typeof k !== "number" || isNaN(k)) || (typeof n !== "number" || isNaN(n)) ) {
        throw "Please enter number";
    }
    if (k < 0 || n < 1) {
        throw "Please enter correct  number";
    }
    if (Math.sqrt(n) === k) {
        return true;
    } else {
        return false;
    }
};
num1 = +prompt("Entrer num");
for (let i = 0; i < 10; i++){
    num = +prompt("Entrer degree of num");
    if (sPowerN(num1, num) === true) {
        res++;
    }
}
alert(res);