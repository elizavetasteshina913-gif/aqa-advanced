// let counter = 0
// while (counter < 10) {
//     console.log (counter)
//     counter = counter + 1
// }
// console.log(counter)
//

// отличие от for в том, что мы не знаем условное количество итераций,
//     поэтому код выполняется до тех пор, пока правдивое условие counter < 10

let counter = 10;

while (counter < 10) {
  console.log("WHILE", counter);
  counter++;
}

// цикл while - сначала проверяется условие и только потом он выполняется

let counter2 = 10;
do {
  console.log("DO WHILE", counter2);
  counter2++;
} while (counter2 < 10);

// цикл do while - выполнится независимо от того, сбывается ли условие или нет хотя бы 1 раз , пример с let 10
