// class Dog {
//     constructor(name,age) {
//         this._name = name;
//         this._age = age;
//     }
//
//     get name() {       // не можем поменять данные, только получить
//         return this._name;
//     }
//     set name(newName) {
//         if (newName.length < 2) {
//             return ;
//         }
//         this._name = newName;
//
//
//     }
// }
// const dog = new Dog("Rex");
// console.log(dog.name);
// dog.name = "D";
// console.log(dog.name);

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  get area() {
    return Math.PI * this._radius ** 2;
  }
  calculateArea() {
    return Math.PI * this._radius ** 2;
  }
}

const circle1 = new Circle(2);
const circle2 = new Circle(3);

console.log(circle1.area);
console.log(circle2.area);
// console.log(circle1.calculateArea());
