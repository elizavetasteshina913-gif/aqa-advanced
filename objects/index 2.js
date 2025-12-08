// const user = {
//     name: "Alice",
//     age: 35,
//     isMarried: false,
//     hobbies: ["voleyball", "chess"],
//     address: {
//         personalAddr: {
//             street: "lorem ipsum",
//             city: "London" ,
//         },
//         workAddr: {
//             street: "Berlin ipsum",
//             city: "Berlin",
//         }
//     }
// }
//
// // console.log(user.address.workAddr.city)
// console.log(user["address"]["workAddr"]["street"])

// console.log(user.name)
// console.log(user.hobbies[0])
// console.log(user["hobbies"][0])

// const permissions = ["read_article", "write_article"]; // fetch manager permissions via API
// const user = {
//     name: "Peter",
//     "last name": "Parker",
//     permissions: {
//         read_article: 1,
//         write_article: 1,
//     }
// }
//
// console.log(user["last name"])
//
// for (const permission of permissions) {
//     if (!user.permissions[permission]) {
//         throw new Error(`Permission "${permission}" not found`)
//     }
// }

const user = {
  name: "Peter",
  age: 30,
  "last name": "Parker",
  permissions: {
    read_article: 1,
    write_article: 1,
  },
};

user.name = "Anton";
user.permissions.read_article = 0;
user.permissions.add_members = 1;
delete user.age;

console.log(JSON.stringify(user, null, 2));
