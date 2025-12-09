const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mike", age: 40 },
];

// console.log(people[0]); // { name: "John", age: 30 }
// console.log(people[0].name); // John

people.push({ name: "Anna", age: 28 });
people[people.length - 1].name = "Peter";

console.log(people);

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}
