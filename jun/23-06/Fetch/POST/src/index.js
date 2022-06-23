// API: https://jsonplaceholder.typicode.com/

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "My title",
    body: "My body",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    console.log(response);

    return response.json();
  })
  .then((data) => console.log(data));
