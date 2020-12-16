let planet = prompt("Enter planet's name");
function isNumber(value){
    return typeof value === "string" && !isNaN(value);
}
if (isNumber(planet)) {
    console.log("string");
} else {
    console.log("Please enter string");
}
let ans = planet === "земля"||  planet === "Земля" ? "Привет землянин!" : "Привет, инопланетянин!";
alert(ans);