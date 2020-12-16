let day = +prompt("Enter day");
let month = +prompt("Enter month");
let year = +prompt("Enter year");
function isNumber(value){
    return typeof value === "number" && !isNaN(value);
}
function doShortDate(day, mon, year) {
    if (day>0 && day <= 29) {
        day++;
        alert(`${day} ${mon} ${year} `);
    } else if (day === 30) {
        day = 1;
        mon++;
        alert(`${day} ${mon} ${year} `);
    }
}
function doDate(day, mon, year) {
    if (day>0 && day <= 30) {
        day++;
        alert(`${day} ${mon} ${year} `);
    } else if (day === 31 && mon !== 12 ) {
        day = 1;
        mon++;
        alert(`${day} ${mon} ${year} `);
    } else if (day === 31 && mon === 12) {
        day = 1;
        mon = 1;
        year++;
        alert(`${day} ${mon} ${year} `);
    }
}
function doShortestDate(day, mon, year) {
    if (day>0 && day <= 27) {
        day++;
        alert(`${day} ${mon} ${year} `);
    } else if (day === 28 && ((year % 400 !== 0) && (year % 4 !== 0))) {
        day = 1;
        mon++;
        alert(`${day} ${mon} ${year} `);
    } else if (day === 28 && ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0))) {
        day = 29;
        alert(`${day} ${mon} ${year} `);
    }
}
if (isNumber(year)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
if (isNumber(day)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
if (isNumber(month)) {
    console.log("Number");
} else {
    console.log("Please enter number");
}
switch (month) {
    case 1:
        doDate(day, month, year);
        break;
    case 2:
        doShortestDate(day, month, year);
        break;
    case 3:
        doDate(day, month, year);
        break;
    case 4:
        doShortDate(day, month, year);
        break;
    case 5:
        doDate(day, month, year);
        break;
    case 6:
        doShortDate(day, month, year);
        break;
    case 7:
        doDate(day, month, year);
        break;
    case 8:
        doDate(day, month, year);
        break;
    case 9:
        doShortDate(day, month, year);
        break;
    case 10:
        doDate(day, month, year);
        break;
    case 11:
        break;
    case 12:
        doDate(day, month, year);
        break;
}