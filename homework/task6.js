const numbersList = [1,10,14,2,4,5,43,34]

const listCopy = structuredClone(numbersList)
listCopy.sort((a, b) => a - b)
console.log(listCopy)
