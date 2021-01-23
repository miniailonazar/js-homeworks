let auditory = [
    {
        name: 1,
        places: 15,
        faculty: "Gryffindor"
    },
    {
        name: 2,
        places: 17,
        faculty: "Slytherin"
    },
    {
        name: 3,
        places: 6,
        faculty: "Hufflepuff"
    }
];

function printAuditories(obj) {
    for (let i = 0; i < obj.length; i++){
        for (value in obj[i]) {
            console.log(`${value} ${":"} ${obj[i][value]}`);
        }
    } 
}
//printAuditories(auditory);

function printAuditory(obj, fac) {
    for (let i = 0; i < obj.length; i++){
        if (obj[i].faculty === fac) {
            for (value in obj[i]) {
                console.log(`${value} ${":"} ${obj[i][value]}`);
            }
        } else {
                continue;
            }
    }
} 
//printAuditory(auditory, "Slytherin");

function printGroup(obj, group) {
    for (let i = 0; i < obj.length; i++){
        if ((obj[i].places >= group.places) && (obj[i].faculty === group.faculty)) {
            for (value in obj[i]) {
                console.log(`${value} ${":"} ${obj[i][value]}`);
            }
        } else {
                continue;
            }
    }
} 

printGroup(auditory, {
    name: "alback",
    places: 6,
    faculty: "Hufflepuff"
});


auditory.sort(function (a, b) {
    return a.places - b.places;
});
console.log(auditory);

auditory.sort(function (a, b) {
    if (a.faculty > b.faculty) {
      return 1;
    }
    if (a.faculty < b.faculty) {
      return -1;
    }
    return 0;
  });
console.log(auditory);