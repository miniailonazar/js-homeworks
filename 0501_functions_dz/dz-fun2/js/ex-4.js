let num;
let res = 0;
function Even(k) {
    if (typeof k !== "number" || isNaN(k) ) {
        throw "Please enter number";
    }
    if (k % 2 === 0) {
        return true;
    } else {
        return false;
    }
};
for (let i = 0; i < 10; i++){
    num = +prompt("Entrer num");
    if (Even(num) === true && num > 0) {
        res++;
    }
}
alert(res);