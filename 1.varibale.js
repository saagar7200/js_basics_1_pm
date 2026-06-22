// console.log("Hello world");
//!js-> dynamic typed , interpreted & single threaded language

//! variables

//* variable declaration methods
// int a;
//? var , let , const

// console.log(12);

var a = 12;

a = "hello";
console.log(a); //12
a = 56;
console.log(a); //56

var a = "var";

console.log(a);

let b = 45;

// let b;

b = true;

b = 78;

// let b = 456; //? SyntaxError: Identifier 'b' has already been declared

console.log(b);

const c = 67;
// const c = 89; //? SyntaxError: Identifier 'c' has already been declared

c = 56; //? TypeError: Assignment to constant variable.

var d;
let e;
//const f; //? SyntaxError: Missing initializer in const declaration
console.log("end");
