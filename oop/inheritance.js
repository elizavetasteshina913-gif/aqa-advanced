// Створення об'єкта "прототипу"
// const animalPrototype = {
//     speak() {
//         console.log(`${this.name} says ${this.sound}`);
//     }
// };

// Створення об'єкта, який наследует прототип
// const dog = {
//     name: "Dog",
//     sound: "Woof"
// };
// dog.__proto__ = animalPrototype;

// const dog = Object.assign(animalPrototype)
// dog.name = 'dog';
// dog.sound = 'dog';
//
// // Виклик методу від успадкованого прототипу
// dog.speak(); // Dog says Woo

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
    this.legs = 4;
  }

  speak() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "woof woof");
  }

  speak() {
    console.log(`[OVERWRITTEN] ${this.name} says ${this.sound.toUpperCase()}`);
  }

  walk() {
    console.log(`${this.name} walk`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, "meow");
  }
}

const dog = new Dog("Rex");
// dog.speak();
dog.walk();
console.log(dog.legs);

// const cat = new Cat("Tom");
// cat.speak();

const a = new Cat();
console.log(a);
