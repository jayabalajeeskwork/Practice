// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b);   // 15
console.log(a - b);   // 5
console.log(a * b);   // 50
console.log(a / b);   // 2
console.log(a % b);   // 0
console.log(a ** b);  // 100000

// Relational (Comparison) Operators
console.log(a == b);   // false
console.log(a != b);   // true
console.log(a > b);    // true
console.log(a < b);    // false
console.log(a >= b);   // true
console.log(a <= b);   // false
console.log(a === b);  // false
console.log(a !== b);  // true


// Logical Operators
let x = true;
let y = false;
console.log(x && y);   // false
console.log(x || y);   // true
console.log(!x);       // false


// Assignment Operators
let n = 10;
n += 5;
console.log(n);   // 15
n -= 2;
console.log(n);   // 13
n *= 2;
console.log(n);   // 26
n /= 2;
console.log(n);   // 13
n %= 5;
console.log(n);   // 3
n **= 2;
console.log(n);   // 9


// Unary Operators

let c = 5;
console.log(c++); // 5
console.log(c);   // 6
console.log(++c); // 7
console.log(c--); // 7
console.log(c);   // 6
console.log(--c); // 5

// Bitwise Operators
let p = 5; // 0101
let q = 3; // 0011
console.log(p & q);   // 1
console.log(p | q);   // 7
console.log(p ^ q);   // 6
console.log(~p);      // -6
console.log(p << 1);  // 10
console.log(p >> 1);  // 2


// Ternary Operator
let age = 20;
let result = age >= 18 ? "Eligible" : "Not Eligible";
console.log(result);   // Eligible