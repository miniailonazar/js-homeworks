let usd = +prompt("Введите сумму в долларах");
let num = +prompt("Для перевода в EUR - нажмите 1; Для перевода в UAN - нажмите 2; Для перевода в AZN - нажмите 3;");
let ans;
const EUR = 0.82;
const UAN = 27.86;
const AZN = 1.70;
switch (num) {
    case 1:
        ans = usd * EUR;
        console.log(ans);
        break;
    case 2:
        ans = usd * UAN;
        console.log(ans);
        break;
    case 3:
        ans = usd * AZN;
        console.log(ans);
        break;
}