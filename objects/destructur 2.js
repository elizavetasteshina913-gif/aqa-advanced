// const user = {
//     name: "John",
//     role: "manager", //возвращает undefined и по дефолту будкм считать что это роль юзер
//     address: {
//         city: "New York",
//         zipcode: "10001"
//     }
// };
//
// const userRole = user.role
// console.log(user.role);
// // const {role} = user //деструктуризация когда вытягиваем что-то с объетка по точному названию ключа
// // console.log(role);
//
// const {role: userRoleManager} = user
// console.log(userRoleManager);
// console.log(user)
//

// const user = {
//     name: "John",
//     // role: "manager",
//     address: {
//         city: "New York",
//         zipcode: "10001"
//     }
// };
//
// const { name, role ="user" } = user;
// console.log(name);
// console.log(role);

// const people = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 }
// ];
//
// for (const { name, age } of people) {
//     console.log(`${name} is ${age} years old`);
// }

// const person = {
//     name: "John",
//     age: 30,
//     address: {
//         city: "New York",
//         country: "USA"
//     }
// };

// const {address : {city, country}} = person;
// console.log(city)
// console.log(country)

// const numbers = [1, 2, 3];
//
// const [first, second, third] = numbers;
//
// console.log(first); // 1
// console.log(second); // 2
// console.log(third);

// const numbers = [1, 2, 3, 4, 5];
//
// const [first, , third] = numbers;
//
// console.log(first); // 1
// console.log(third); // 3

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b);
