
function AddRightDigit(k, d) {
    if ((typeof k !== "number" || isNaN(k)) || (typeof d !== "number" || isNaN(d)) ) {
        throw "Please enter number";
    }
    if (k < 0 || d < 0) {
        throw "Please enter positive number";
    }
    return k * 10 + d;
}
console.log(AddRightDigit(231, 5));
console.log(AddRightDigit(478, 9));