// function printUserInfo(name, age, hobbies, nickname, gender) {
//     console.log(name);
//     console.log(age);
//     console.log(hobbies);
//     console.log(nickname);
//     console.log(gender);
// }
//
// printUserInfo("Peter", 30, ["football", "chess"], "peterpeter", "male")

function printUserInfo({ name, age, hobbies, nickname, gender = "unknown" }) {
  console.log(name);
  console.log(age);
  console.log(hobbies);
  console.log(nickname);
  console.log(gender);
}

printUserInfo({
  name: "peter",
  age: 30,
  hobbies: ["football", "chess"],
  nickname: "peterpeter",
  // gender: "male",
});

// const user = {
//     age: 30,
//     hobbies: ["football", "chess"],
//     name: "Peter",
//     // gender: "male",
//     nickname: "peterpeter",
// }

// printUserInfo(user)
