//! operators
//* arithmatic op
//? + , - , * , / , ** , %

// console.log(12 + 5);
let a = 10;
let b = 12;
// console.log(a + b); //

// console.log("Hello" + " " + "World");

let sum = a + b;

// console.log(sum);

//* assignment
//? = , += , -= ,
// let a = 10;
// let b = 12;
// a += 5; // a = a + 5;

// a += b; // a = a + b;

//* comparision
//? == , === , < ,> <=, >=, != , !==
//? returns boolean
// console.log(10 < 10); // false
// console.log(10 <= 10); // true

let c = 10;
let d = "10";
// console.log(c == d);
// console.log(c === d);

// console.log(c != d); // false
// console.log(c !== d); // true

//* logical
//? AND [ && ] , OR [ || ] , NOT [ ! ]
//? returns boolean
// console.log(true && true);
// console.log(false && true);
// console.log(false || true);
// console.log(false || false);
// console.log(!true); //

//* unary
//? increment ++ / decrement --

let i = 1;

//! pre
console.log(++i); // 2

//!post
console.log(i++); // 2 ,
console.log(i); //3

//* ternary
// condition  ? exp_1 : exp_2
// let age = 17;
// age >= 18 ? console.log("Can vote") : console.log("Can not vote");

// let canVote = age >= 18 ? "Can vote" : "Can not vote";
// console.log(canVote);

//! typeof

// console.log(typeof canVote);

canVote = 45;

// console.log(typeof canVote === "string");

// console.log(typeof 12);
// console.log(typeof 1.452);

// console.log(typeof null);

// 1 -> object
// 2  -> number

//*  type conversion
//? explicit conversion
// String()
console.log(String(12));
console.log(Number("123"));
console.log(Number("abc")); // NaN
console.log(Boolean(""));

//? implicit conversion
//! type coercion

console.log(12 + "12"); //
console.log(12 - "6");

//* truthy & falsy values
//! falsy values: 0 ,  -0 , null , undefined , false , '' , NaN  -> false
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));

let age = 0;

// let canVote = age >= 18 ? "Can vote" : "Can not vote";
if (age) {
  console.log("age is ", age);
} else {
  console.log("Age not found");
}
