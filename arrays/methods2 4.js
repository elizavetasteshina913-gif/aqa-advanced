// const numbers = [1, 2, 3, 4, 5];
//
// // const printNum = (num) => console.log(num);
// // numbers.forEach(printNum);
//
// numbers.forEach((num) => console.log(num));
//
// ["яблуко", "банан"].forEach((fruit) => console.log(fruit));

// const numbers = [1, 2, 3, 4, 5];
// const oddNumbers =  numbers.filter(number => number % 2 !== 0);
// console.log(oddNumbers)

//
// const fruits = ["яблуко", "банан", "полуниця"];
// const someFruits =  fruits.filter(fruit => fruit.includes("о")); //вернет массив
// console.log(someFruits);

// const fruits = ["яблуко", "банан", "полуниця"];
// const someFruit =fruits.find(fruit => fruit.includes("о")) // вернет первый элемент который удольтворяет условие
// console.log(someFruit);

// const fruits = ["яблуко", "банан", "полуниця"];
// const upperFruits = fruits.map(fruit => fruit.toUpperCase());
// console.log(fruits);
// console.log(upperFruits);
// разница с фор ичем в том, что фор ич ничего не возвращает, а map всегда возвращает массив той самой длины как исходный массив

// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const flatArray = nestedArray.flat(); // [1, 2, 3, 4, 5, 6]
// console.log(flatArray);

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort(); // по алфавиту сортирует
// console.log(months);

// const months = ['March', 'Jan', 'jeb', 'Dec'];
// months.sort((a, b) => a.localeCompare(b));
// console.log(months);

const numbers = [1, 2, 3, 4, 5, 11, 221];
numbers.sort((a, b) => a - b);
console.log(numbers);
