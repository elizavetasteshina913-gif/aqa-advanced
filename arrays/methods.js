// const sentence = "это предложение имеет несколько слов"
// const words = sentence.split(" ");
// console.log(words)
//
// const newSentence = words.join("_")
// console.log(newSentence)
//
//
//
// const fruits = ["яблуко", "банан", "полуниця"];
// const fruitString = fruits.join(", ");
// console.log(fruitString);

// const fruits = ["яблуко", "банан", "полуниця"];
// console.log(fruits.indexOf("яблуко"));
// console.log(fruits.indexOf("gyguu")); // -1 этого элемента в массиве нет

// const fruits = ["яблуко", "банан", "полуниця"];
// console.log(fruits.includes("банан"))

// const fruits = ["яблуко", "банан", "полуниця"];
// fruits.push("манго") // добавить элемент массива в конец
// console.log(fruits)
//
//
// const lastEl = fruits.pop() //удалить последний элемент массива
// console.log(fruits)
// console.log(lastEl)

// const fruits = ["яблуко", "банан", "полуниця"];
// fruits.unshift("манго") // добавить в начало массива элемент
// console.log(fruits)
//
//
// const firstEl = fruits.shift() // удалить с начала массива
// console.log(firstEl)
// console.log(fruits)

// const fruits = ["яблуко", "банан", "полуниця"];
// const someFruits = fruits.slice(1) // делает копию с элемента и по какой нам нужно; возвращает всегда новый массив
// console.log(someFruits)

// const fruits = ["яблуко", "банан", "полуниця"];
// fruits.splice(1,1); //если нужно удалить
// console.log(fruits);

// const fruits = ["яблуко", "банан", "полуниця"];
// const fruitsCopy = structuredClone(fruits)
// fruitsCopy.splice(1,0, "mango", "berry"); //если нужно удалить элемент и на его место поставить другой(или другие)
// console.log(fruitsCopy);

const array1 = [1, 2];
const array2 = [3, 4];
const concatenatedArray = array1.concat(array2);
const concatenatedArray2 = [...array1, ...array2];

console.log(concatenatedArray);
console.log(concatenatedArray2);
