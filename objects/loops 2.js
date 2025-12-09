// const user = {
//     name: "Peter",
//     age: 30,
//     permissions: {
//         read_article: 1,
//         write_article: 1,
//     }
// }
//
// for (const key in user) {
//     console.log(`key is ${key} , value is ${JSON.stringify(user[key])}`);
// }

//
// const animal = {
//     legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Duke";
//
// // console.log(dog);// {name: 'Duke'}
// // console.log(dog.name);// 'Duke'
// // console.log(dog.legs)
//
// if (dog.hasOwnProperty("legs")) {
//     console.log(dog.legs);
// } else {
//     console.log("property is missing");
// }

const user = {
  name: "Peter",
  age: 30,
  permissions: {
    read_article: 1,
    write_article: 1,
  },
};

// const keys = Object.keys(user);
// const values = Object.values(user);
// console.log(keys);
// console.log(values);

// const userPermissions = Object.keys(user.permissions);
// console.log(userPermissions);

// expect userPermissions to equal [ 'read_article', 'write_article' ]

const userPermissions = Object.entries(user.permissions);
// console.log(userPermissions)

for (const userPermission of userPermissions) {
  console.log(userPermission[1]);
}
