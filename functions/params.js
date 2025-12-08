// // function Declaration
// function printGreeting(age, name = "Anonymous") {
//     console.log(`Hi ${name}! your age is ${age}`);
// }
// //age - обязательный параметр, а имя опциональный параметр
// // опциональный идет всегда после обязательного
// // опциональный имеет дефолтное значение
//
//
// const userName = "John";
// printGreeting(18)

// в чем разница между параметром и аргументом функции?
// когда мы объявляем функцию и все что пишем в круглых скобках является параметрами функции
// а когда мы вызываем функцию, то что мы передаем является аргументами

//...nums используем этот оператор , когда точно не знаем сколько будет аргументов
// function calculateSum(...nums) {
//     let sum = 0;
//
//     for (let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i];
//     }
//     return sum
// }

// console.log (calculateSum(1,2,3))
// console.log (calculateSum(1))
// console.log (calculateSum(1,9))
// console.log (calculateSum(1,2,3,77,55,66,23,45,6))

// const calculateSum = (...nums) => {
//     let sum = 0;
//
//     for (let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i];
//     }
//     return sum
// }
//
// console.log (calculateSum(1,2,3,77,55,66,23,45,6))

// function printPersonalInfo (name, grade, ...additionalInfo) {
//     console.log(`it's ${name} from ${grade}, additionalInfo: ${additionalInfo.join(`, `)}`);
//
// }
// printPersonalInfo("Elizaveta", "12A", "loves basketball", "plays chees")

//
// function calculateSum() {
//     console.log(arguments);
// }
// calculateSum(1,2,3);
//
//

// function calculateSum() {
// let sum = 0;
//
// for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
// }
// return sum
// }
// console.log(calculateSum(1,2,3));

// const calculateSum = () => arguments.reduce((sum, num) => sum + num, 0);
// console.log(calculateSum(1,2,3));

function printUserInfo({ name, age }) {
  console.log(`Hi ${name}! ${age}`);
}

printUserInfo({ name: "John", age: 15 });
