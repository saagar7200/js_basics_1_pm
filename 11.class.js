//! class

// let user = {
//   name: "",
//   email: "",
//   password: "",
// };

// let user1 = {
//   name: "",
//   email: "",
//   password: "",
// };

class User {
  // name;
  // email;
  // password;
  #password; //? private property

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password; //
  }

  getPassword() {
    return this.#password;
  }

  getEmail() {
    return this.email;
  }

  introduce() {
    console.log("This is User class");
  }
}

const john = new User("John Doe", "john@gmail.com", "12345678");
const ram = new User("Ram Doe", "ram@gmail.com", "12345678");
console.log(john);
console.log(ram);
console.log(john.getPassword());
john.introduce();
// const john1 = User();

//! Student
// name email password faculty , batch , roll

//* inheritance
class Student extends User {
  // super()  =>   new User()

  constructor(name, email, password, faculty, batch, roll) {
    super(name, email, password);
    this.faculty = faculty;
    this.batch = batch;
    this.roll = roll;
  }

  introduce() {
    console.log("This is Student class");
  }
}

const student1 = new Student(
  "student  one",
  "stu1@gmail.com",
  "123456543",
  "BCT",
  2017,
  66,
);

console.log(student1);
console.log(student1.getPassword());
console.log(student1.getEmail());
student1.introduce();

//! Abstraction

class MakeCoffee {
  start() {
    console.log("Starting");

    this.#grinding();

    this.#heating();

    this.#processing();

    this.#despatch();
  }

  #grinding() {
    console.log("Grinding");
  }

  #heating() {
    console.log("Heating water");
  }

  #processing() {
    console.log("Processing");
  }

  #despatch() {
    console.log("Coffee is ready");
  }
}

const cm = new MakeCoffee();
// cm.start();

//getter / setter

class Circle {
  #r;

  constructor(radius) {
    this.#r = radius;
  }

  set radius(r) {
    this.#r = r;
  }

  get area() {
    return (Math.PI * Math.pow(this.#r, 2)).toFixed(3);
  }
}

const c1 = new Circle(10);
console.log(c1.area);

c1.radius = 12;

console.log(c1.area);

//! static methods =>
//! this keyword
