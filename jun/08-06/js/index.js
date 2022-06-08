// password gen upon a user input
const box = document.querySelector(".box");

const changeBg = () => {
  box.style.backgroundColor = "orange";
};
box.addEventListener("click", changeBg);
