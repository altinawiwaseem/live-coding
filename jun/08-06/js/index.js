// password gen upon a user input
// var
const arr = [];
// html elements
const box = document.querySelector(".box");
const h2 = document.querySelector(".result h2");
const userData = document.querySelector("#user-name");
const form = document.querySelector("form");
// functions
const whiteBg = () => {
  box.style.backgroundColor = "white";
};
const orangeBg = () => {
  box.style.backgroundColor = "orange";
};
// EventListeners
box.addEventListener("click", () => console.log("cool"));
box.addEventListener("mouseenter", orangeBg);
box.addEventListener("mouseleave", whiteBg);

const sayHi = () => {
  // alert("Hey, happy to have you again");
};
window.addEventListener("load", sayHi);
// userData.addEventListener("keyup", () => console.log(userData.value));
const newUser = (e) => {
  e.preventDefault();
  console.log(e);
  h2.innerHTML += `${userData.value} <br>`;
};
form.addEventListener("submit", newUser);
//form.addEventListener("reset",()=>);
