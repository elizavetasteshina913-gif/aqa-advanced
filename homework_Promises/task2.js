// function fetchTodoById(id) {
//     return fetch(
//         `https://jsonplaceholder.typicode.com/todos/${id}`,
//     )
//         .then((res) => res.json())
//         .catch((err) => console.log(err));
// }
//
// function fetchUserById(id) {
//     return fetch(
//         `https://jsonplaceholder.typicode.com/users/${id}`,
//     )
//         .then((res) => res.json())
//         .catch((err) => console.log(err));
// }
//
// const responses = await Promise.all([
//     fetchTodoById('1'),
//     fetchUserById('1'),
// ]);
// console.log(responses);
//
// const firstResponse = await Promise.race([
//     fetchTodoById('1'),
//     fetchUserById('1'),
// ]);
// console.log(firstResponse);



async function fetchTodoById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return response.json();
    } catch (err) {
    console.log('Fetch error:', err.message);
}
}
// //
// const post = await fetchTodoById(1)
// console.log(post);



async function fetchUserById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return response.json();
    } catch (err) {
        console.log('Fetch error:', err.message);
    }
}

// const post = await fetchUserById(1)

// console.log(post);


const results = await Promise.all([
    fetchTodoById(1),
    fetchUserById(1),
]);
console.log( results);



