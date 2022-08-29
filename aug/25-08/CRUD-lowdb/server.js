import express from "express";
import "dotenv/config"; // require("dotenv").config();
import { Low, JSONFile } from "lowdb";

const app = express();

app.listen(process.env.PORT, () =>
  console.log(`server is running on port (from .env) ${process.env.PORT}`)
);

//!Important to be able to read the body of the request req.body
app.use(express.json());

// lowdb configuration=========================
const adapter = new JSONFile("./db.json");
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content
await db.read();

// console.log(db.data);
//===============================================
//CRUD
// endpoint 1: sends all users
app.get("/users", (req, res) => {
  // Read
  res.send(db.data.users);
});

// endpoint 2: sends all products
app.get("/products", (req, res) => {
  // Read
  res.send(db.data.products);
});

// endpoint 3: expects a POST request to the path localhost:8080/users/signup with a body that contains the data of the new user, adds it to the database (db.json) and then sends a response "user added successfully" to the client.
app.post("/users/signup", async (req, res) => {
  //Create
  console.log(req.body);

  let newUser = req.body;

  const checkEmail = db.data.users.some(
    (item) => item.email === req.body.email
  );

  if (checkEmail) {
    return res.send("user with this email already exists");
  }
  newUser.id = db.data.users.length + 1; // to create an id
  db.data.users.push(newUser); // to add the 'newUser' to the db

  await db.write();

  res.send("user added successfully");
});

