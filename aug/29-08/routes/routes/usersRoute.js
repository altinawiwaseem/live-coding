import express from "express";
import { Low, JSONFile } from "lowdb";


export const userRouter = express.Router();


// lowdb configuration=========================
const adapter = new JSONFile("./db.json");
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content
await db.read();

// console.log(db.data);
//===============================================

const uid = () => {
    return Date.now().toString(18);
  };


//CRUD
userRouter.get("/", (req, res) => {
  // Read

  res.send(db.data.users);
});


userRouter.post("/", async (req, res) => {
  //Create
  console.log(req.body);

  let newUser = req.body;

  const checkEmail = db.data.users.some(
    (item) => item.email === req.body.email
  );

  if (checkEmail) {
    return res.send("user with this email already exists");
  }
  newUser.id = uid(); // to create an id
  db.data.users.push(newUser); // to add the 'newUser' to the db

  await db.write();

  res.send("user added successfully");
});


userRouter.delete( "/:id", async (req, res) => {
  //Delete
  const updatedUsersArr = db.data.users.filter(
    (user) => user.id !== req.params.id
  );

  db.data.users = updatedUsersArr;

  await db.write();

  res.send(db.data.users);
});


userRouter.put( "/:id", async (req, res) => {
  //Update

  console.log(req.body);

  let updatedUsersArr = db.data.users.filter(
    (user) => user.id !== req.params.id
  );

  let updatedUser = req.body;
  updatedUser.id = req.params.id;

  updatedUsersArr.push(updatedUser);

  db.data.users = updatedUsersArr;

  await db.write();

  res.send(db.data.users);
});

