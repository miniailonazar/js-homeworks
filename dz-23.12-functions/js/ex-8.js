let sec = +prompt("Enter seconds");
function isNumber(value){
    if (typeof value === "number" && !isNaN(value)) {
        return "Number";
    } else {
        throw "Enter number"
    }
}
console.log(isNumber(sec));
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
doIntime(sec);