import axios from "axios";

// testing our endpoints that we made in server.js
const getUsers = async () => {
  const res = await axios.get("http://localhost:8080/users");

  console.log(res.data);
};

const addUser = async () => {
  const res = await axios.post("http://localhost:8080/signup", {
    nam: "John",
    username: "Doe",
    email: "john@doe",
  });

  console.log(res.data);
};

addUser();
getUsers();
