//! promise  ->  {}
//* is a object that represents eventual completion or failure of async task

// states of promise
//* pending
//* fulfilled / resolved
//* rejected

// const promise = new Promise((resolve, reject) => {
//   // fetch user
//   setTimeout(() => {
//     resolve({ message: "Promise resolved" });
//     // reject({ message: "Promise rejected" });
//   }, 3000);
// });

console.log("start");

// console.log(promise);

//? handling promise

// promise
//   .then((data) => {
//     console.log(data);
//     console.log(promise);
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log(promise);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// const promiseFunc = () => {
//   return new Promise((resolve, reject) => {
//     // fetch user
//     setTimeout(() => {
//       resolve({ message: "Promise resolved" });
//       // reject({ message: "Promise rejected" });
//     }, 3000);
//   });
// };

// const add = (a, b) => {
//   return a + b;
// };

// const c = add(12, 3);

// promiseFunc()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// a.then

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      console.log("user fetched");
      if (error) {
        reject({ message: "User fetch failed" });
      } else {
        resolve({ _id: 1, name: "John Doe", email: "john@gmail.com" });
      }
    }, 4000);
  });
};

const fetchPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      console.log("posts fetched");
      if (error) {
        reject({ message: "Posts fetch failed" });
      } else {
        resolve([
          {
            _id: 1,
            userId: userId,
            title: "post 1",
          },
          {
            _id: 2,
            userId: userId,
            title: "post 2",
          },
          {
            _id: 3,
            userId: userId,
            title: "post 3",
          },
        ]);
      }
    }, 3000);
  });
};

//? handling promise
// fetchPosts(1)
//   .then((posts) => {
//     console.log(posts);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//fetchComments
const fetchComments = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      console.log("posts fetched");
      if (error) {
        reject({ message: "Comments fetch failed" });
      } else {
        resolve([
          {
            _id: 1,
            postId: postId,
            title: "comment 1",
          },
          {
            _id: 2,
            postId: postId,
            title: "comment 2",
          },
          {
            _id: 3,
            postId: postId,
            title: "comment 3",
          },
        ]);
      }
    }, 3000);
  });
};

//! promise chaining
// fetchUser()
//   .then((user) => {
//     console.log(user);
//     return fetchPosts(user._id);
//   })
//   .then((posts) => {
//     console.log(posts);
//     return fetchComments(posts[0]._id);
//   })
//   .then((comments) => {
//     console.log(comments);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! fetch api
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     // console.log(response);
//     return response.json(); // [{},{}]  , {}
//   })
//   .then((posts) => {
//     console.log(posts);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* async function
//* async/await
//* try/catch block

// syntactic sugar over promises

const fetchData = async () => {
  try {
    console.log("async start");
    const user = await fetchUser();
    console.log(user);
    const posts = await fetchPosts(user._id);
    console.log(posts);
    const comments = await fetchComments(posts[1]._id);
    console.log(comments);
    console.log("async end");
  } catch (error) {
    console.log("catch");
    console.log(error);
  } finally {
    console.log("finally");
  }
};
fetchData(); //

console.log("end");
