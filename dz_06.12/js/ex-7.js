let num = +prompt("Enter number");
let num1 = +prompt("Enter number");
let sign = prompt("Enter sign");
let help = 0;
let ans;
if (sign == "+") {
    help = 1;
} else if (sign == "-"){
    help = 2;
} else if (sign == "*"){
    help = 3;
} else if (sign == "/"){
    help = 4;
}
switch (help) {
    case 1:
        ans = num + num1;
        console.log(ans);
        break;
    case 2:
        ans = num - num1;
        console.log(ans);
        break;
    case 3:
        ans = num * num1;
        console.log(ans);
        break;
    case 4:
        ans = num / num1;
        console.log(ans);
        break;

    
}