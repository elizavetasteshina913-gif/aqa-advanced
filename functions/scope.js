// const userName = "Liza"
// //антипаттерн
// function printName (name) {
//     console.log (name)
// }
//
// printName("John")

//антипаттерн 2
// let name = "Liza"
//
// function printName (name) {
//     console.log (name)
//     name = "Elizaveta"
// }
//
// printName("John")

// сначала выведется лиза, потому  что мы сначал выводим то что нашли
// и только потом выводим

// let name = "Liza"
//
// function printName () {
//     console.log (name)
//     name = "Elizaveta"
// }
// // ТАК ДЕЛАТЬ НЕЛЬЗЯ
// printName()
// console.log(name)

//
// let name = "Liza"
//
// function printName (name) {
//     const age = name.length
//     console.log(name)
//     console.log(age)
// }
//
// printName("Liza")

// // export default function printAverageGrade(averageGrade){
// function printAverageGrade(averageGrade) {
//     if (typeof averageGrade !== 'number'){
//         // throw new Error(`The averageGrade must be a number`);
//         console.log(`The averageGrade must be a number`)
//         return;
//     }
//
//      if (averageGrade < 0 || averageGrade > 100){
//          // throw new Error(`The averageGrade must be between 0 and 100`);
//          console.log(`The averageGrade must be between 0 and 100`);
//          return
//     }
//
//     let grade
//
//     if (averageGrade < 60) {
//         grade = "Незадовільно"
//     } else if (averageGrade <= 70) {
//         grade = "Задовільно"
//     } else if (averageGrade <= 80) {
//         grade = "Добре"
//     } else if (averageGrade <= 90) {
//         grade = "Дуже добре"
//     } else  {
//         grade = "Відмінно"
//     }
//
//     return grade;
// }

import printAverageGrade from "./printGrade.js";

printAverageGrade("160");
console.log("AFTER");
