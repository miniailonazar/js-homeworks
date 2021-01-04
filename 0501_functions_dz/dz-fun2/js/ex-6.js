let num;
let res = 0;
function isSimple(num) {
    let digitDivider = 0;
    for (let i = 0; i <= num; i++){
        if (num % i === 0) {
            digitDivider++;
        }
        else {
            continue;
        }
    }
    return digitDivider;
}
function IsPrime(k) {
    if (typeof k !== "number" || isNaN(k) ) {
        throw "Please enter number";
    }
    if (k <= 1) {
        throw "Please enter number wich will be greather than 1";
    }
    if (isSimple(k) === 2) {
        return true;
    } else {
        return false;
    }
};
for (let i = 0; i < 10; i++){
    num = +prompt("Entrer num");
    if (IsPrime(num) === true && num > 0) {
        res++;
    }
}
alert(res);