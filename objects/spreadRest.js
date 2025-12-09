// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5];
//
// console.log(newNumbers);

// ОПЕРАТОР SPREAD когда мы распыляем массив в массив/ объект в объект

const memberPermissions = {
  read: "read",
  write: "write",
};

const managerPermissions = {
  ...memberPermissions,
  invite: "invite",
  read: "READ",
};

console.log(memberPermissions);
console.log(managerPermissions);

// /// REST
// function sum(...numbers) {
//     // console.log(...numbers);
//     return numbers.reduce((total, num) => total + num, 0);
// }
//
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const nums2 = [9,8, 7]
//
// console.log(sum(...nums,...nums2));
//
