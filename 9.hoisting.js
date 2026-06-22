//* hoisting
// var x;

console.log(x); //

var x = 20; //
// x = 20;

console.log(x); //

//* function declaration
hoist();

function hoist() {
  console.log("Hoist");
}

//* function expression
// let b = undefined;
// b(); //! TypeError: b is not a function
// a(); //! TypeError: a is not a function

console.log(a); //

var a = function () {
  console.log("a");
};
console.log(a);
a();

// console.log(b);

let b = 10;
console.log(b);
// console.log(c); //!ReferenceError: Cannot access 'c' before initialization
const c = 12;

// d(); //!ReferenceError: Cannot access 'd' before initialization
let d = () => {
  console.log("d");
};

//* TDZ => temporal dead zone

//todo: callstack , execution context
//* phase 1: memory creation phase
//? memory allocation
//* phase 2: execution phase
//? memory initialization
//? executes code

// {x:undefined , e:(){}}
// {x:10}

console.log(x); //
var x = 10;
console.log(x); // 10

function e() {
  console.log("e");
  function f() {
    console.log("f");
    function g() {
      console.log("g");
    }
    g();
  }
  f();
}

//
//
//
// stack -> e f g

e(); //
e();
