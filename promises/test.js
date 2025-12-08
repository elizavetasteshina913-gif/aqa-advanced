function fetchPostById(id) {
  return fetch(`https://jsonplaceho1lder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log("INNER fetch error:", err.message);
      throw err;
    });
}

fetchPostById(1)
  .then((post) => console.log(post))
  .catch((err) => {
    console.log("OUTER fetch error:", err.message);
  });
