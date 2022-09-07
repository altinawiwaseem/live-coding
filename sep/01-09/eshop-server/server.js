import express from "express";
import "dotenv/config";
import { Low, JSONFile } from "lowdb";
import cors from "cors";

const app = express();

// app.use(cors({origin: "http://localhost:3000"})); // allows only the mentioned website to make requests to the server

app.use(cors()); // allows any website to make requests to the server

app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port 5000");
});

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

app.post("/api/signup", async (req, res) => {
  req.body;

  // const checkEmail =   db.data.users.some(item=> item.email === req.body.email);

  const user = db.data.users.find((user) => user.email === req.body.email);

  if (user) {
    return res.send({ user: user, msg: "user already exists", success: false });
  }

  let newUser = req.body;
  newUser.id = uid();
  db.data.users.push(newUser);

  await db.write();

  res.send({ user: newUser, msg: "user added to db", success: true });
});
