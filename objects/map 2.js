// console.log([...new Set([1,2,2,3,4,4,5,6,7,8,8,9])]);

// const user = {
//     name: "John",
// }
//
// const user1 = new Map();
// user1.set(user, "John");
// console.log(user1.get(user));

function foo() {
  console.log("foo");
}

const user1 = new Map();
user1.set(foo, "John");

console.log(user1.get(foo));

// const user2 = {
//   name: "John",
// };
