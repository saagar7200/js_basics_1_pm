//! Object

//
// let user_name = "John";
// let user_email = "john@gmail.com";
// let password = "12345";

//? Object constructor   / new keyword
// const obj = new Object({ name: "abc" });

//? object literal -> {}
// const user = {
//   name: "John doe",
//   email: "john@gmail.com",
// };

// user = {};

//* accessing object properties
//! dot notation
// let name = user.name;

// console.log(name);
// console.log(user.email);
// console.log(user.password); //

//! bracket notation []
// console.log(user["email"]);
// console.log(user["password"]);

// console.log(user.full name)
// console.log(user["full name"]);

// let user_key = "email";
// console.log(user.user_key); // undefined
// console.log(user[user_key]); // user['email']

//! adding new properties
// user.password = "12345";
// user["password"] = "123455";

// console.log(user);

//! modify object properties
// user.password = "password";

//! delete object properties
// delete user.password;

// console.log(user);

//! object methods
// const keys = Object.keys(user);

// console.log(keys);
// const values = Object.values(user);
// console.log(values);

// entries()
// console.log(Object.entries(user));

// let x = 10;
// let y = x;

// y = 23;

// console.log(x, y);

let user = { name: "John doe", email: "john@gmail.com", password: "password" };
// let user1 = user;

// console.log(user, user1);

// user1.name = "Alice";

// console.log(user, user1);

// main memory
//&23g3 ->   x:10
// &123 ->  y:10
//&124 -> user:&321
//&125 -> user1:&321

//? heap memo
//&321 -> { name: "John doe", email: "john@gmail.com", password: "password" }

//! Object.seal()

// Object.seal(user);

// user.age = 10;

// user.password = "12345";

// console.log(user);

//! Object.freeze()
Object.freeze(user);
user.age = 26;

user.password = "12345";

console.log(user);

//todo: spread operator ... , rest operator , destructuring
//? spread op ...

let u = {
  name: "Alice",
};
// let user1 = { ...user, ...u };
// console.log(user1);

//!  destructuring

// let name = user.name;
// let email = user.email;

// let { name, email } = user;
// let { name: u_name } = u;
// console.log(name, email);
// console.log(u_name);

//! rest op ...

let { name, email, password, ...x } = user;

console.log(name, x);
