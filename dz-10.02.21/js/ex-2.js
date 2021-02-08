function nod(num,div) {
    if (div === 0) {
        return num;
    } else {
        return nod(num, num % div) 
    }
}
console.log(nod(25, 7));