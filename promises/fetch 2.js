// function fetchPostById(id) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(res => res.json())
// }

// Promise.all( [
//     fetchPostById(1),
//     fetchPostById(2),
// ] ) .then((posts) => console.log(posts))

// Promise.race([
//     fetchPostById(1),
//     fetchPostById(2)
// ]) .then((post) => console.log(post))

// GET запит
// const response = await fetch("https://api.example.com/users/1");
// const data = await response.json();

// POST запит
// const newUser = {
//     name: 'Alice',
//     email: 'alice@example.com'
// };
//
// const response = await fetch('https://api.example.com/users/1', {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//    body: JSON.stringify(newUser)
// })

// PUT запит
const updatedUser = {
  name: "Alice Smith",
};

fetch("https://api.example.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedUser),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("PUT Response:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// async function updateUser(updatedUser) {
//   try {
//     const options = {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedUser),
//     };
//     const updatedUserData = await fetchData(
//       "https://api.example.com/users/1",
//       options,
//     );
//     console.log("PUT Response:", updatedUserData);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
