import express from "express";
import "dotenv/config"; // require("dotenv").config();
import { Low, JSONFile } from "lowdb";

const app = express();

app.listen(process.env.PORT, () =>
  console.log(`server is running on port (from .env) ${process.env.PORT}`)
);

// lowdb configuration=========================
const adapter = new JSONFile("./db.json");
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content
await db.read();

console.log(db.data.products);
//===============================================

// endpoint 1: sends all users
app.get("/users", (req, res) => {
  res.send(db.data.users);
});

// endpoint 2: sends all products
app.get("/products", (req, res) => {
  res.send(db.data.products);
});


