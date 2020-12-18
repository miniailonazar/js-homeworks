let num = +prompt("enter first num");
let num1 = +prompt("enter second num");
let k = num <= num1 ? num : num1;
let p = num >= num1 ? num : num1;
for (let i = k; i <= p; i++){
    if (i % 4 !== 0) {
        continue;
    }

    rem = i;
    console.log(rem);
}