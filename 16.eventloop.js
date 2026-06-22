//! event loop

//? 1. callstack
//? 2. web apis: timer [setTimeout , ..] , dom events , promises:{onResolve:(){},onReject:(){}, finally:(){}} , fetch , geolocation
//? 3. task queue  -> FIFO
//*     a. macro task queue  2 // callback  -> last
//*     b. micro task queue  0  -> 1st priority
//? 4. event loop

console.log("start");

setTimeout(() => {
  console.log("processing 1");
}, 2000);

// fetchPosts(1)
//   .then((posts) => {
//     console.log(posts);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

console.log("end");
