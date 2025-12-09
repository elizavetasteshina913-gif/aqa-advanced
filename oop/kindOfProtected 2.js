class Animal {
  _name;
  constructor(name) {
    this._name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

const dog = new Dog("Rex");
console.log(dog._name); // внешне так вызывать нельзя

// class Animal {
//      #name
//     constructor(name) {
//          this.#name = name;
//      }
//  }
//
//  class Dog extends Animal {
//     constructor(name) {
//         super(name);
//      }
//
//      get dogName() {
//          return this.#name
//      }
//  }
//
// const dog = new Dog("Rex")
//  console.log(dog.dogName); // к дочернему классу не можем обратиться
