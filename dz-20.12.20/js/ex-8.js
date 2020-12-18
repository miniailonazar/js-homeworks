let num = +prompt("Enter num from 1 to 100");
let i = num;
let rem = 0;
do {
    i--;

    if (num % i !== 0) {
        continue;
    }

    rem = i;
    console.log(rem);
} while (i > 0);