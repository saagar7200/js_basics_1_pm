//! control flow

//! control statements

//* conditionals
//? if
// let age = 17;
// if (age >= 18) {
//   //
//   console.log("Can vote");
// }

//? if-else
// if (age >= 18) {
//   //
//   console.log("Can vote");
// } else {
//   console.log("Can not vote");
// }

//? else-if ladder
// age >= 60  -> major
// age >=18 -> adult
//  <18 -> minor

// let age = 17;

// if (age >= 60) {
//   console.log("Major");
// } else if (age >= 18) {
//   console.log("Adult");
// } else if (age >= 1) {
//   console.log("Minor");
// } else {
//   console.log("enter valid age");
// }

//todo:  unit = 250

//? switch-case
let day = 1;

// switch (day) {
//   case 1: {
//     console.log("Sunday");

//     break;
//   }
//   case 2: {
//     console.log("Monday");
//     break;
//   }
//   case 3: {
//     console.log("Tuesday");
//     break;
//   }

//   case 4: {
//     console.log("Wednesday");
//     break;
//   }
//   case 5: {
//     console.log("Thursday");
//     break;
//   }
//   case 6: {
//     console.log("Friday");
//     break;
//   }
//   case 7: {
//     console.log("Saturday");
//     break;
//   }
//   default: {
//     console.log("Enter day between 1-7");
//   }
// }

switch (day) {
  case 1:
  case 7: {
    console.log("Weekend");
    break;
  }
  case 2:
  case 3:
  case 4:
  case 5:
  case 6: {
    console.log("Work day");
    break;
  }
  default: {
    console.log("Enter day between 1-7");
  }
}

//! day : 1 , 7 -> weekend , 2-6 -> work day

//* loops
//? while
// let i = 11;
// while (i <= 10) {
//   console.log(i); // 0
//   i++;
// }

//? do while

// console.log("----do while-----");
// let j = 11;

// do {
//   console.log(j);
//   j++;
// } while (j <= 10);

//? for

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
//? for in

//? for of

//* jump / branching keyword
//? break

//? continue

//? return
