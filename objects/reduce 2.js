const users = [
  {
    name: "Peter",
    rating: 4.5,
  },
  {
    name: "Alice",
    rating: 4.7,
  },
  {
    name: "John",
    rating: 4.2,
  },
];

// const avgRating = (users.reduce((acc, {rating}) => {
//     acc += rating * 100;
//     return acc;
//
// }, 0) / 100 / users.length).toFixed(2);
// console.log(avgRating)

const ratingList = users.reduce((acc, { rating }) => {
  acc.push(rating);
  return acc;
}, []);
console.log(ratingList);
