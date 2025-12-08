class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log(`${this.name} wof wof`);
  }
}

const dog1 = new Dog("Duke", 7);
const dog2 = new Dog("Rex", 6);

// console.log(dog1);
// console.log(dog2);

dog1.bark();
dog2.bark();

// class Dog {
//     constructor () {}
