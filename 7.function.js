//! function
// reusable block of code.

// sum

//! function declaration
//* syntax

// function function_name (){
// function body
// }

//* function invocation / call
// function_name() //
// function_name() //
// function_name() //

// greet

// function greet() {
//   console.log("hello world");
// }

//* function with input
//? parameter & argument
// function greet(user) {
//   console.log("hello ", user);
// }

// x -> f(x) -> y  , x + 1

//* function with default parameter
// function greet(user = "Guest") {
//   console.log("hello ", user);
// }

//* function with multiple parameter/input
// function greet(user = "Guest", role = "GUEST") {
//   console.log("hello ", user, "You are ", role);
// }

// greet("John", "USER"); //  hello  John
// greet("Ram", "ADMIN"); // hello  Ram
// greet("Bob"); //
// greet();

//* function with return type
//   const message = "Hello" + " " + user + ".You are" + " " + role + ".";
// function greet(user = "Guest", role = "GUEST") {
//   const msg = `Hello ${user}.You are ${role}.`;
//   //   console.log(msg);
//   return msg;
// }

// const message = greet("John", "USER"); //  hello  John
// console.log(message);
// console.log(greet("Ram", "ADMIN")); // hello  Ram
// console.log(greet("Bob")); //
// console.log(greet());

//! add(a,b) return sum -> a + b

//* function expression

var greet = function (user = "Guest", role = "GUEST") {
  const msg = `Hello ${user}.You are ${role}.`;
  //   console.log(msg);
  return msg;
};

console.log(greet());

// let add = function (a, b) {
//   // let sum = a + b;
//   // return sum;

//   return a + b;
// };

const add1 = function (a, b) {
  // let sum = a + b;
  // return sum;

  return a + b;
};
const x = add1(12, 3);

// console.log(add(12, 3));

//* arrow function

// const add = (a, b) => {
// let sum = a + b;
//   return a + b;
// };

// const add = (a, b) => a + b;

// console.log(add(34, 5));

// isEven(num) arrow  / return boolean

// isOdd(num) exp with function keyword

// const isEven = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

const isEven = (num) => num % 2 === 0;

// 12();
// const a = isEven(12); //
// console.log("a", a());

// const isOdd = function (num) {
//   if (num % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const isOdd = (num) => num % 2 !== 0;

// console.log(isEven(20));
// console.log(isEven(23));
// console.log(isOdd(31));

//* callback function
const parent = function (a) {
  console.log(a);
  console.log("parent");
  a(1234); //
};

const child = function (b) {
  console.log("child");
  console.log(b);
};

parent(child); //   let a =  child
// parent(child()); // let a =  undefined

//* higher order function

// const add = () => {
//   return 10;
// };

// const a = add();

const outer = () => {
  console.log("outer");
  const inner = () => {
    console.log("Inner");
  };
  return inner;
};

// const x = outer(); //
// console.log(x);
// x();

//todo: IIFE
// (function () {
//   console.log("IIFE");
// })();

//! calculate(a,b,operation)
// calculate(10,2,add)  // 12
// calculate(10,2,sub)  // 8
// calculate(10,2,mul)  // 20

const calculate = (a, b, operation) => {
  const res = operation(a, b);
  console.log("Result is: ", res);
};

const add = (a, b) => {
  return a + b;
};

calculate(10, 2, add);
calculate(12, 2, (a, b) => {
  return a * b;
});

calculate(12, 2, (a, b) => {
  return a / b;
});

calculate(12, 2, (a, b) => {
  return a - b;
});

// function factory
// const isOdd = (num) => num % 2 !== 0;

// const factory = (a) => {
//   return (b) => {
//     return a + b;
//   };
// };

// const factory = (a) => (b) => a + b;

// const add5 = factory(5);
// const add10 = factory(10);
// console.log(add5(10));
// console.log(add5(20));
// console.log(add10(12));

//todo: generator function  * , yield

// function* GenerateCount() {
//   yield 1;
//   console.log("start");
//   yield 2;
//   console.log("mid");
//   yield 3;
//   console.log("end");
// }

function* GenerateCount() {
  let count = 1;
  while (true) {
    yield count++;
  }
}
const count = GenerateCount();
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());

//! async function

//todo: scope
