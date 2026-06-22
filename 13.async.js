//! synchronous programming
//

//! asynchronous programming

console.log("Start");

//!setTimeout
// setTimeout(callback,timeout,...args )
const timer_id = setTimeout(
  (a, b, c) => {
    console.log("processing", a, b, c);
  },
  2000,
  "A",
  "B",
  12,
);

// const timer_id_1 = setTimeout(() => {
//   console.log("processing 1");
// }, 2000);

// console.log(timer_id);
// console.log(timer_id._timerArgs);

// clearTimeout(timer_id_1);
clearTimeout(timer_id);
// console.log(timer_id);

//! setInterval
// setInterval(callback,timer , ...args)

// let i = 0;

// const id = setInterval(() => {
//   if (i === 10) {
//     clearInterval(id);
//   }
//   console.log(i);
//   i++;
// }, 1000);

// clearInterval(id);

console.log("end");

// 60
// 00:01:00
// 00:00:59
// 00:00:58
//....
// 00:00:00

// function(totalSeconds){
// }

// .padStart()

// console.log("200".padStart(6, "0"));

const countdownTimer = (totalSeconds) => {
  //
  const intervalId = setInterval(() => {
    totalSeconds--;
    const hoursLeft = Math.floor(totalSeconds / 3600);
    const minLeft = Math.floor((totalSeconds % 3600) / 60);
    const secLeft = totalSeconds % 60;

    const formatHour = String(hoursLeft).padStart(2, "0");
    const formatMin = String(minLeft).padStart(2, "0");
    const formatSec = String(secLeft).padStart(2, "0");

    // console.log(`${formatHour}:${formatMin}:${formatSec}`);
    console.log(
      `${String(hoursLeft).padStart(2, "0")}:${String(minLeft).padStart(2, "0")}:${String(secLeft).padStart(2, "0")}`,
    );

    if (totalSeconds <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
};

// countdownTimer(60);
// countdownTimer(20);

// countdownTimer(120);

// countdownTimer(3650);
countdownTimer(10);
