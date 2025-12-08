// async await

// function fetchPostById(id) {
//     return fetch(
//         `https://jsonplaceholder.typicode.com/posts/${id}`,
//     )
//         .then((res) => {
//             return res;
//         })
//         .then((res) => {
//             return res.json();
//         })
//         .then((jsonData) => {
//             return jsonData;
//         })
//         .catch((err) => {
//             console.log('Fetch error:', err.message);
//         });
// }

async function getPostById(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    return response.json();
  } catch (err) {
    console.log("Fetch error:", err.message);
  }
}

const post = await getPostById(1);
// const post = await fetchPostById(1);
console.log(post);
