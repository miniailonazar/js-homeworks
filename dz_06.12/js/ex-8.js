let num = +prompt("Enter number");
let num1 = +prompt("Enter number");
function isNumber(value){
    return typeof value === "number" && !isNaN(value);
}
if (isNumber(num) && isNumber(num1) ) {
    console.log("Number");
} else {
    console.log("Please enter number");
}

let ans = num > num1 ? num : num1;
alert(ans);