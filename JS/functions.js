function greet() {
    console.log("Welcome to JavaScript");
}

greet();

//////////////////////////////////////////
function add(a, b) {
    console.log(a + b);
}

add(10, 20);

////////////////////////////////////////////////
function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);
console.log(result);


////////////////////////////////////////////////
const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(20, 5));

////////////////////////////////////////////////////////
const square = (n) => {
    return n * n;
};

console.log(square(6));

/////////////////////////////////////////////////////
const cube = n => n * n * n;

console.log(cube(3));


///////////////////////////////////////
function welcome(name = "Guest") {
    console.log("Welcome " + name);
}

welcome();
welcome("Rahul");


///////////////////////////////////////////
let message = function() {
    console.log("Anonymous Function");
};

message();

///////////////////////////////////
function display(name) {
    console.log("Hello " + name);
}

function process(callback) {
    callback("John");
}

process(display);



///////////////////////////////////////
function factorial(n) {
    if (n == 1)
        return 1;

    return n * factorial(n - 1);
}

console.log(factorial(5));