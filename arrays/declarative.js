const numbers = [1, 2, 3, 4, 5];

// imperative
const doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// declarative

const doubled = numbers.map((x) => x * 2);
console.log(doubled);
