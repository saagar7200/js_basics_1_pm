//! this  -> object

// commonjs ->
// this.name = "abc";
// module.exports.name = "abc"; //! modifying same object

// module.exports = {
//   name: "abc",
// }; //! reassign

console.log(this); //

// module.exports = {} = this
// this => {}
// module.exports = {name:''}

// function a() {
//   console.log(this);
// }
// a(); //? global object

// const a = () => {
//   console.log(this);
// };

// a();

//! object method
// const user = {
//   name: "John Doe",
//   email: "john@gmail.com",
//   getName: function () {
//     // console.log(this.name);
//     console.log(this); //
//   },
// };

// const user = {
//   name: "John Doe",
//   email: "john@gmail.com",
//   getName: function () {
//     const b = () => {
//       // console.log(this.name);
//       console.log(this); //
//     };
//     b();
//   },
// };

const user = {
  name: "John Doe",
  email: "john@gmail.com",
  getName: function () {
    console.log(this.name);
    console.log(this); //
  },
};

// user.getName(); //

// const fn = user.getName;

// fn();

class User {
  constructor(name, email, pass) {
    this.name = name;
    this.email = email;
    this.password = pass;
  }

  getName() {
    return this.name;
  }
}

const u1 = new User("Ram", "ram@gmail.com", "123454328");
const u2 = new User("Ram 1", "ram1@gmail.com", "123454328");

//?   {}  <- this
// {name:''}
// {name:'',email:''}

// console.log(u1.getName()); //
// console.log(u2.getName()); //

//* function object

// function introduce() {
//   console.log("introduces");
//   console.log(this);
// }

// introduce.age = 10;

// // introduce();
// console.log(introduce.name);
// console.log(introduce.age);
// introduce();

let ob = {
  c: "c",
  d: "d",
};

let ob1 = {
  a: "a",
  b: "b",
};

// console.log(introduce.length);

//! apply, call & bind

function introduce(a, b) {
  console.log("introduce");
  console.log(this.name, a, b); //
}
// introduce()

introduce.call(user, 12, 23); // user.name
// introduce.call(ob); //  ob.name

introduce.apply(user, [23, 45]);

const boundFn = introduce.bind(user, 321, 456567);
boundFn();
