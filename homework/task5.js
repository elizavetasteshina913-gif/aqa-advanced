
const users = [
    { name: "Anna", email: "anna@mail.com", age: 28 },
    { name: "Boris", email: "boris@mail.com", age: 34 },
    { name: "Clara", email: "clara@mail.com", age: 21 }
];


for (const user of users) {

    const { name, email, age } = user;

    console.log(name, email,  age)
}
