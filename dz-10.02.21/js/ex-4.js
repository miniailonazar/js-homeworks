function simpleNum(number, divider) {
    if (number / 2 < divider) {
        return true;
    }
    if (number % divider === 0) {
        return false;
    }
    return simpleNum(number, divider + 1);		
}
if (simpleNum(7, 2) === true) {
    console.log("Простое");
} else {
    console.log("не простое");
}