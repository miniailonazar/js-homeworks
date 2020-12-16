let num = +prompt("Enter number");
function isNumber(value){
    return typeof value === "number" && !isNaN(value);
}
if (isNumber(num)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
let ans = num % 5 === 0 ? "Кратно" : "Не кратно";
alert(ans);