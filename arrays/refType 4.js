//это происходит для всех типов данных string number bool undefined null symbol bigint
// let user1 = "Anton"
// let user2 = user1
//
// console.log(user1)
// console.log(user2)
// console.log("------------")
//
// user1 = "Maria"
//
// console.log(user1)
// console.log(user2)
// console.log("------------")

// array objects
const usersList1 = ["Anton", "Maria"];
const usersList2 = structuredClone(usersList1);

console.log(usersList1);
console.log(usersList2);
console.log("------------");

usersList1[0] = "Andriy";

console.log(usersList1);
console.log(usersList2);
console.log("------------");
