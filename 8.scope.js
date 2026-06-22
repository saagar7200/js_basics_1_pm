//! scope

//* global scope
let global_let = "global let";
const global_const = "global const";
var global_var = "global var";

//* block scope {}
if (true) {
  let block_let = "block let";
  const block_const = "block const";
  var block_var = "block var";
  console.log(block_const, block_let, block_var); //* block const block let block var
}
// console.log(block_const); //! ReferenceError: block_const is not defined
// console.log(block_let); //! ReferenceError: block_let is not defined
// console.log(block_var); //* block var

//* function
function scope() {
  let function_let = "Function let";
  const function_const = "Function const";
  var function_var = "Function var";
  //   console.log(global_const, global_let, global_var);
}
// scope();
// console.log(function_let); //! ReferenceError: function_let is not defined
// console.log(function_const); //! ReferenceError: function_const is not defined
// console.log(function_var); //! ReferenceError: function_var is not defined

//* lexical scope
// function a() {
//   let x = 10;
//   console.log(x); //
//   function b() {
//     x = 110;
//     console.log(x); //
//     function c() {
//       console.log(x);
//     }
//     c();
//   }
//   b();
// }
// a();

//* scope chain
// let x = 100;
// function a() {
//   //   let x = 10;
//   console.log(x); // 100
//   function b() {
//     let x = 110;
//     console.log(x); //110
//     function c() {
//       console.log(x); //110
//     }
//     c();
//   }
//   b();
// }
// a();

// var x = "global x";

if (true) {
  let x = "x";
  if (true) {
    let x = 20;
    if (true) {
      console.log(x); // 20 ,
      x = 40;
    }
    console.log(x); // 40
  }
  console.log(x); // x
}

// console.log(x); // global x //
