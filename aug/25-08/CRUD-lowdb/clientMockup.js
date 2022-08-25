import axios from "axios";
import fetch from "node-fetch";

// testing our endpoints that we made in server.js
const getUsers = async () => {
  const { data } = await axios.get("http://localhost:8080/users");

  console.log(data);
};


const addUser = async () => {
  const res = await axios.post("http://localhost:8080/signup", {
    name: "John",
    username: "Doe",
    email: "john@doe"
  });

  console.log(res.data);
};

addUser();
//getUsers();
