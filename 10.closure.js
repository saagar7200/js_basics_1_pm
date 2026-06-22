//! closure

// console.log(x); //
// var x = 10;
// console.log(x); // 10

// function a() {
//   console.log(b); //
//   var b = 101;
//   console.log(b); //
// }

// a();

// a();
// global: {x:10, a:(){}}
//

//
// GEC
// stack

//! closure

const Parent = () => {
  let x = "parent var";

  const children = () => {
    console.log(x); //
  };

  return children;
};

const inner = Parent(); //{}
const inner1 = Parent(); //{}

// inner();
// inner();
// inner();
// inner1();

// const Counter = () => {
//   let count = 0;

//   const increment = () => {
//     count++;
//     console.log(count);
//   };

//   return increment;
// };

// const c1 = Counter(); // {count:3}
// const c2 = Counter(); // { count: 2}
// c1(); // 1
// c2(); // 1
// c1(); // 2
// c2(); // 2
// c1(); // 3
// c1(); // 4
// c1(); // 5
// c2(); // 3

const Counter = () => {
  let count = 0;

  const increment = () => {
    count++;
    console.log(count);
  };

  // ! decrement
  const decrement = () => {
    count--;
    console.log(count);
  };
  //! getCount
  const getCount = () => {
    return count;
  };

  return {
    increment,
    decrement,
    getCount,
  };
};

//
const c1 = Counter();

console.log(c1);
c1.increment();
c1.increment();
c1.increment();
c1.increment(); // 4
c1.decrement(); // 3
console.log(c1.getCount()); // 3

//! Account(acc_name ,initial_amt)
//! deposit , withdraw , balance_inq

const Account = (acc_name, initial_amt = 1000) => {
  const name = acc_name;
  let balance = initial_amt;

  //* deposit
  const deposit = (amt) => {
    if (amt <= 0) {
      console.log("Invalid deposit amount", amt);
      return;
    }
    balance = balance + amt;
    console.log("New balance is: ", balance);
  };
  //* withdraw
  const withdraw = (amt) => {
    if (amt <= 0) {
      console.log("Invalid withdraw amount", amt);
      return;
    }
    if (balance - amt < 500) {
      console.log("Insufficient balance.Available balance: ", balance - 500);
      return;
    }

    balance = balance - amt;
    console.log("New balance is: ", balance);
  };
  //* balance_inq
  const balance_inq = () => {
    return balance;
  };

  return {
    deposit,
    withdraw,
    balance_inq,
  };
};

const acc1 = Account("John Doe", 1500);
acc1.deposit(500); // 2000
acc1.deposit(-1500); //  2000
acc1.deposit(0); //  2000
acc1.withdraw(2500); // 1500
console.log("balance: ", acc1.balance_inq());

const acc2 = Account("User 2", 1000);

//! function factory
const add = (a) => {
  return (b) => {
    return a + b;
  };
};

const add5 = add(5); // {a:5}
const add10 = add(10); // {a:10}

//! caching
const outer = () => {
  let cache = {};

  return (a) => {
    if (cache[a]) {
      return cache[a];
    }

    console.log("calculating");
    for (let i = 0; i <= 9000000000; i++) {}
    cache[a] = a * a;
    return cache[a];
  };
};

const square = outer();
console.log(square(2));
console.log(square(2));
console.log(square(20));
console.log(square(20));
console.log(square(20));
console.log(square(20));
console.log(square(3));
