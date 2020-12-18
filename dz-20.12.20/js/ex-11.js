let num = +prompt("Enter num");
let k = 0;
for (let i = 0; i <= num; i++){
    if (num % i !== 0 ) {
        continue;
    } else {
        k++;
    }
    rem = i;
    console.log(rem);
}
if (k === 2) {
    alert("Простое");
} else {
    alert("Не простое");
}