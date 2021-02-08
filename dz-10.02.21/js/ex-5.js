let str = [];
function nod(num, k) {
    if (num === 1) {
        return str.join(" * ");
    }
    if (num % k === 0) {
        str.push(k);
        return nod(num / k, k);
    } else {
        k++;
        return nod(num, k);
    }
}
console.log(nod(27, 2));