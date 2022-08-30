import express from "express";
import { Low, JSONFile } from "lowdb";


export const musicRouter = express.Router();


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
musicRouter.get("/", (req, res) => {
  // Read

  res.send(db.data.music);
});


musicRouter.post("/", async (req, res) => {
  //Create
  console.log(req.body);
  
  let newMusic = req.body;

  const checkMusic = db.data.music.some(item=> item.album === req.body.album );

  if(checkMusic){
   return res.send("this album already exists")
  }
  newMusic.id = uid(); // to create an id
  db.data.music.push(newMusic); // to add the 'newMusic' to the db

  await db.write();

  res.send("album added successfully");
});


musicRouter.delete( "/:id", async (req, res) => {
  //Delete
  const updatedMusicArr = db.data.music.filter(
    (album) => album.id !== req.params.id
  );

  db.data.music = updatedMusicArr;

  await db.write();

  res.send(db.data.music);
});


musicRouter.put( "/:id", async (req, res) => {
  //Update

  console.log(req.body);

  let updatedMusicArr = db.data.music.filter(
    (album) => album.id !== req.params.id
  );

  let updatedMusic = req.body;
  updatedMusic.id = req.params.id;

  updatedMusicArr.push(updatedMusic);

  db.data.music = updatedMusicArr;

  await db.write();

  res.send(db.data.music);
});

