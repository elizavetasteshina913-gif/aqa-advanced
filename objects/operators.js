// const users = [
//     {
//         name: "Anton",
//         age: 30,
//         permissions: {
//             read_article: 0,
//             write_article: 1,
//         }
//     },
//     {
//         name: "Alice",
//         age: 30,
//     },
//     {
//         name: "Andrii",
//         age: 30,
//         permissions: {}
//     },
//     {
//         name: "Peter",
//         age: 30,
//         permissions: {
//             read_article: 1,
//             write_article: 1,
//         }
//
// }
// ]

//
// // for (const user of users) {
// //     console.log(user.name, user.permissions?.read_article)  //если у юзера нет пермишенс, то ставим знак вопроса и будет понятно,
// //     // что если нет этого поля - возвращаем undefined
// // }
//
// for (const user of users) {
//     const readPermission = user.permissions?.read_article
//     if (readPermission === 1) {
//         console.log(`read permission granted for user ${user.name}`)
//     } else {
//         console.log(`read permission NOT granted for user ${user.name}`)
//     }
// }

// const calculator = {
//     operations: {
//         add: function (a, b) {
//             return a + b;
//         }
//     }
// };

// З оператором опціонального доступу
// const resultOptional = calculator.operations.add(5, 3);
// console.log(resultOptional);

// const calculator = {
//         add: function (a, b) {
//             return a + b;
//         }
//
// };
//
// const resultOptional = calculator.operations?.add(5, 3);
// console.log(resultOptional);  // если метода не существует - вернется undefined

const user = {
  name: "John",
  // role: "manager", возвращает undefined и по дефолту будкм считать что это роль юзер
  address: {
    city: "New York",
    zipcode: "10001",
  },
};

const userRole = user.role ?? "user";
console.log(userRole);

// ?? оператор возвращает второй аргумент только если первый аргумент явлется 0 или undefined
// во всех других случаях вернет первый аргумент
