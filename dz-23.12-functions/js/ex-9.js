let hours = +prompt("Enter hours");
let min = +prompt("Enter minutes");
let sec = +prompt("Enter seconds");
let hours1 = +prompt("Enter hours");
let min1 = +prompt("Enter minutes");
let sec1 = +prompt("Enter seconds");
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
function inSeconds(h, m, s) {
    return verifyHour(h) * 3600 + verifyMin(m) * 60 + verifySeconds(s);
}
let resInsec = inSeconds(hours, min, sec) - inSeconds(hours1, min1, sec1);
function doIntime(s) {
    hours = Math.floor(s / 3600);
    min = Math.floor((s % 3600) / 60);
    sec = s - hours * 3600 - min * 60;
    if (hours == 0 & min === 0 & sec === 0) {
        throw "Enter correct values";
    } else{
        alert(hours + ":" + min + ":" + sec);
    }
}
doIntime(resInsec);