// console.log("Hello 1")
//
// console.log("Hello 2")
//
// console.log("Hello 3")

function printHello(number) {
  console.log(`Hello ${number}`);
}

function printHelloAsync(number) {
  setTimeout(() => console.log(`Hello ${number}`), 2000);
}

printHello(1);
printHelloAsync(2);
for (let i = 0; i < 100; i++) {
  console.log(`Loop ${1}`);
}
printHello(3);
