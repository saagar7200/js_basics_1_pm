// const outer = (cb) => {
//   console.log("outer");
//   cb(10);
// };

// const child = (x) => {
//   console.log("child", x);
// };
// outer(child);
// outer((a) => {
//   console.log("child-1", a);
// });

// outer((y) => {
//   console.log(y);
// });

//!
const getUser = (callback) => {
  console.log("fetching user");
  setTimeout(() => {
    console.log("user fetched");
    callback(null, { _id: 1, name: "John Doe", email: "john@gmail.com" });

    // callback({ message: "User fetch failed" });
  }, 4000);
};

const getPosts = (userId, callback) => {
  setTimeout(() => {
    console.log("posts fetched");
    callback(null, [
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
  }, 3000);
};

const getComments = (postId, callback) => {
  setTimeout(() => {
    console.log("comments fetched");
    callback(null, [
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
  }, 3000);
};

console.log("start");
getUser((error, user) => {
  if (error) {
    console.log("error");
    console.log(error);
    return;
  }
  console.log(user);
  getPosts(user._id, (error, posts) => {
    if (error) {
      console.log("error");
      console.log(error);
      return;
    }
    console.log(posts);
    getComments(posts[0]._id, (error, comments) => {
      if (error) {
        console.log("error");
        console.log(error);
        return;
      }
      console.log(comments);
    });
  });
});

//! callback hell  -> solution : promise
//! pyramid of doom
// getPosts();
console.log("end");
