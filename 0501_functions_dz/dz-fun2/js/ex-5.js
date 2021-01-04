let num;
let res = 0;
function IsSquare(k) {
    if (typeof k !== "number" || isNaN(k) ) {
        throw "Please enter number";
    }
    if (k < 0) {
        throw "Please enter positive number";
    }
    if (Number.isInteger(Math.sqrt(k))) {
        return true;
    } else {
        return false;
    }
};
for (let i = 0; i < 10; i++){
    num = +prompt("Entrer num");
    if (IsSquare(num) === true && num > 0) {
        res++;
    }
}
alert(res);