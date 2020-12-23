let hours = +prompt("Enter hours");
let min = +prompt("Enter minutes");
let sec = +prompt("Enter seconds");
function isNumber(value){
    if (typeof value === "number" && !isNaN(value)) {
        return "Number";
    } else {
        throw "Enter number"
    }
}
console.log(isNumber(hours));
console.log(isNumber(min));
console.log(isNumber(sec));
function verifyHour(h) {
    if (h < 0 || h >= 24) {
        throw "Enter correct hour";
    } else {
        return h;
    }
}
function verifyMin(m) {
    if (m < 0 || m >= 60) {
        throw "Enter correct minutes";
    } else {
        return m;
    }
}
function verifySeconds(s) {
    if (s < 0 || s >= 60) {
        throw "Enter correct seconds";
    } else {
        return s;
    }
}
function doTime(h, m, s) {
    if (m === 0 & s === 0) {
        alert(verifyHour(h) + ":00");
    } else{
        alert(verifyHour(h) + ":" + verifyMin(m) + ":" + verifySeconds(s));
    }
}
doTime(hours, min, sec);