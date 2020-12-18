let num = +prompt("Enter num");
let num1 = +prompt("Enter num");
let i = num <= num1 ? num : num1;
let rem = 0;

while (i > 0) {
    i--;

    if (num % i !== 0 || num1 % i !== 0 ) {
        continue;
    }

    rem = i;
    console.log(rem);
}