let shoppingList = [
    {
        name: "Вилка",
        quantity: 5,
        availability: true
    },
    {
        name: "Тарелка",
        quantity: 0,
        availability: false
    },
    {
        name: "Ножик",
        quantity: 10,
        availability: true
    }
];

function printList(obj) {
    for (let i = 0; i < obj.length; i++){
        for (value in obj[i]) {
            console.log(`${value} ${":"} ${obj[i][value]}`);
        }
    } 
}
printList(shoppingList);

function addInList(obj, obj2) {
    for (let i = 0; i < obj.length; i++){
        if (obj[i].name === obj2.name) {
            obj[i].quantity += obj2.quantity;
            obj[i].availability = true;
        } else {
            obj.push(obj2);
            obj2.availability = true;
            break;
        }
    } 
}
addInList(shoppingList,    {
    name: "Вилкаhhhhhhhhhh",
    quantity: 5
});
addInList(shoppingList,    {
    name: "Стул",
    quantity: 1
});
printList(shoppingList);

function buy(obj, name) {
    for (let i = 0; i < obj.length; i++){
        if (obj[i].name === name && obj[i].availability === true) {
            obj[i].quantity--;
            break;
        } else if ((obj[i].name === name && obj[i].availability === false) || (obj[i].name !== name)) {
            throw "Товара нет в наличии";
        }
    } 
}
buy(shoppingList,"Вилка");
printList(shoppingList);
