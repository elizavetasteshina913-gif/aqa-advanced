const car1 = {
    brand : "bmw",
    model : "x6",
    year: 2007,

}

const car2 = {
    brand : "audi",
    model : "rs7",
    owner: 2013,
}

const car3 = {
    ...car1, ...car2
}


console.log(car3);