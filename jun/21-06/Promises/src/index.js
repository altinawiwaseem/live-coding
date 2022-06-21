// console.log("First log");

// // Macrotask
// setTimeout(() => {
//   console.log("I am setTimeout with 3000ms");
// }, 3000);

// setTimeout(() => {
//   console.log("I am setTimeout with 0ms");
// }, 0);

// // Microtask
// Promise.resolve([{ friend: "John" }]).then((val) => console.log(val));

// console.log("I am the last log");

const div = document.getElementById("root");
const users = ["Matt", "John", "Maria"];

function getUsers() {
  setTimeout(() => {
    users.forEach((user) => {
      const p = document.createElement("p");
      p.innerText = user;
      div.appendChild(p);
    });
  }, 1500);
}

function addUser(user, callback) {
  setTimeout(() => {
    users.push(user);
    callback();
  }, 2500);
}

addUser("Steve", getUsers);

const availableDrinks = ["Coffee", "Tea", "Water"];

// Promise example
function orderDrink(drink) {
  return new Promise((resolve, reject) => {
    if (availableDrinks.includes(drink)) {
      resolve(`Here is your ${drink}`);
    } else {
      reject(`Unfortunately, we do not have ${drink}`);
    }
  });
}

orderDrink("Orange juice")
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
