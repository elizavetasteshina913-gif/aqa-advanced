// функция используется для создания шаблонных объектов и всегда с большой буквы
function User(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello , my name is ${this.name}!`);
  };
}

const alice = new User("Alice", 19);
alice.sayHello();
// console.log(alice.name);
// console.log(alice.age);

const peter = new User("Peter", 29);
peter.sayHello();
// console.log(peter.name);
// console.log(peter.age);
