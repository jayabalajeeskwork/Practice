let age = 18;

if (age >= 18) {
    console.log("Eligible to Vote");
}


if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

let score = 82;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
let username = "admin";
let password = "1234";

if (username == "admin") {
    if (password == "1234") {
        console.log("Login Successful");
    } else {
        console.log("Wrong Password");
    }
} else {
    console.log("Invalid Username");
}


let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid Day");
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);


for (let i = 1; i <= 10; i++) {

    if (i == 6) {
        break;
    }

    console.log(i);
}


for (let i = 1; i <= 5; i++) {

    if (i == 3) {
        continue;
    }

    console.log(i);
}