let price = +prompt("Введите сумму");
function isNumber(value){
    return typeof value === "number" && !isNaN(value);
}
if (isNumber(price)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
if (price > 0 && price < 200) {
    alert(`${"К оплате :"} ${price}`);
} else if (price >= 200 && price < 300) {
    alert(`${"К оплате :"} ${price * 0.97}`);
}
else if (price >= 300 && price < 500) {
    alert(`${"К оплате :"} ${price * 0.95}`);
} else if (price >= 500) {
    alert(`${"К оплате :"} ${price * 0.93}`);
} else {
    alert("Введите положительную сумму");
}