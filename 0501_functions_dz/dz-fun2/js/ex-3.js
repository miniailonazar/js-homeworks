function countDigits(value) {
    let digitsCount = 0;
    if (value === 0) {
        return 1;
    }

    while (value >= 1) {
        digitsCount++;
        value /= 10;
    }

    return digitsCount;
}
function AddLeftDigit(k, d) {
    if ((typeof k !== "number" || isNaN(k)) || (typeof d !== "number" || isNaN(d)) ) {
        throw "Please enter number";
    }
    if (k < 0 || d < 0) {
        throw "Please enter positive number";
    }
    return d * Math.pow(10, countDigits(k)) + k;
}
console.log(AddLeftDigit(231, 5));
console.log(AddLeftDigit(1, 9));