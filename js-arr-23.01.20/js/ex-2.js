let shoppingCheck = [
    {
        name: "Вилка",
        quantity: 5,
        price: 2
    },
    {
        name: "Тарелка",
        quantity: 2,
        price: 20
    },
    {
        name: "Ножик",
        quantity: 10,
        price: 2
    }
];

function printCheck(obj) {
    for (let i = 0; i < obj.length; i++){
        for (value in obj[i]) {
            console.log(`${value} ${":"} ${obj[i][value]}`);
        }
    } 
}
printCheck(shoppingCheck);

function countSum(obj) {
    let res = 0;
    for (let i = 0; i < obj.length; i++){
        res += obj[i].quantity * obj[i].price;
    } 
    return res;
}
console.log(countSum(shoppingCheck));

function findTheMostExpensiveThing(obj) {
    let max = obj[0].quantity * obj[0].price;
    let k = 0;
    for (let i = 1; i < obj.length; i++){
        if ((obj[i].quantity * obj[i].price) > max) {
            max = obj[i].quantity * obj[i].price;
            k++;
        } else {
            continue;
        }
    } 
    return obj[k];
}
console.log(findTheMostExpensiveThing(shoppingCheck));

function countAverageCheck(obj) {
    let res = 0;
    for (let i = 0; i < obj.length; i++){
        res += obj[i].quantity * obj[i].price;
    } 
    return res / (obj.length);
}
console.log(countAverageCheck(shoppingCheck));