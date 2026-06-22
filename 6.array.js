//! array
//? numbered indexed  -> start from 0
//! array constructor / new keyword
// const arr = new Array(3,3,4,56);

//! array literal
const numbers = [5, 4, 5, 6, 45]; //

//
const el = numbers[0];
// console.log(el);
// console.log(numbers[numbers.length - 1]);
// console.log(numbers[-1]);
// console.log(numbers.length);

//* adding new element
// from end
//* push()
const res = numbers.push(100, 45, 67);
console.log(res);

//unshift()
numbers.unshift(12, 32);

//* removing element
// ? from end index
// pop()
console.log(numbers);
// const result = numbers.pop();
// console.log(result);

//? from start index
// shift()
numbers.shift();

console.log(numbers);

//splice()

//! searching
//* includes  -> return boolean
console.log(numbers.includes(100));
console.log(numbers.includes(200));

//* indexOf
console.log(numbers.indexOf(100));
console.log(numbers.indexOf(200));

//! at()
console.log(numbers.at(0)); // numbers[0]
console.log(numbers.at(-1));
console.log(numbers.at(-2));

//! splice
//* arr_name.splice(start_index , delete_count , item1,item2,....item)
const x = numbers.splice(2, 0, 456, 768, 897);
console.log(numbers);
console.log(x);
