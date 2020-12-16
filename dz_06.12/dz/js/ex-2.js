let num = +prompt("Enter num from 0 to 9");
function isNumber(value){
    return typeof value === "number" && !isNaN(value);
}
if (isNumber(num)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
switch (num) {
    case 1:
        console.log("!");
        break;
    case 2:
        console.log("@");
        break;
    case 3:
        console.log("#");
        break;
    case 4:
        console.log("$");
        break;
    case 5:
        console.log("%");
        break;
    case 6:
        console.log("^");
        break;
    case 7:
        console.log("&");
        break;
    case 8:
        console.log("*");
        break;
    case 9:
        console.log("(");
        break;
        case 0:
        console.log(")");
        break;
}