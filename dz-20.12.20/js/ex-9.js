let num = +prompt("на какое число должны быть делимы ?");
for (let i = 0; i <= 100; i++){
    if (i % num !== 0) {
        continue;
    }

    rem = i;
    console.log(rem);
}