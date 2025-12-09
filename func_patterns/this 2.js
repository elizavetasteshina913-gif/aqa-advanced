// global this...
// this в глобальном уровне является undefined
// а если так this.myPrint() то на глобальный контекст

// object context
// this в объекте будет ссылаться на контекст объекта

// const person = {
//     name: 'Alice',
//     printThis: function(){
// console.log(this)
//     },
//     greet: function() {
//         console.log (`Hello , ${this.name}!`)
//     }
// };

// const person2 = {
//     name: 'Peter',
//     printThis: function(){
//         console.log(this)
//     },
//     greet: function() {
//         console.log (`Hello , ${this.name}!`)
//     }
// };
// console.log(person.name)
// person.printThis()

// person.greet()

// const myPrint = person.printThis
// myPrint.call(person2)

// const myGreet = person.greet.bind(person2); //это если мы хотим привязать навсегда какой-то контекст к функции
// // myGreet.call(person)
//
// person2.greet();
// myGreet();
// myGreet();
// myGreet();
//

// const myGreet = person.greet
// myGreet()

// const person = {
//     name: 'Alice',
//     greet: function() {
//         console.log (`Hello , ${this.name}!`)
//     }
// };

// стрелочная функция всегда ссылается на глобальный объект
// const person = {
//   name: "Alice",
//   greet: () => {
//     console.log(`Hello , ${this.name}!`);
//   },
// };
