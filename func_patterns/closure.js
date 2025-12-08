// замыкание - функция в которм она запоминает контекст в котором она была создана и
// запоминает в том числе лексическое окружение , то есть все переменные с отцовской функции

// function makeCounter() {
//     let counter = 0;
//
//     return function() {
//         console.log(counter);
//         counter++
//     }
// }

// const count = makeCounter()
// count()
// count()

function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}

// const double = multiplier (2)
// console.log(double(5))

const trieple = multiplier(3);
console.log(trieple(8));

// const isAdult = (age) => {
//     return age >= 18
// }
//
// const isUserAdult = isAdult(19) = true
//
