import express from "express";
import { Low, JSONFile } from "lowdb";

const app = express();

const PORT=4000;

app.listen(PORT, () =>
  console.log(`server is running on port ${PORT}`)
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
// endpoint 1: sends all films
app.get("/films", (req, res) => {
  // Read
  res.send(db.data.films);
});

// endpoint 2: sends all music
app.get("/music", (req, res) => {
  // Read
  res.send(db.data.music);
});

// a function to create a unique id
const uid = () =>{
    return Date.now().toString(18);
  }

// endpoint 3: expects a POST request to the path localhost:4000/films/new with a body that contains the data of the new film, adds it to the database (db.json) and then sends a response "film added successfully" to the client.
app.post("/films/new", async (req, res) => {
  //Create
  console.log(req.body);

  let newFilm = req.body;

  const checkFilm = db.data.films.some(item=> item.title === req.body.title );

  if(checkFilm){
   return res.send("this movie already exists")
  }
  newFilm.id = uid(); // to create an id
  db.data.films.push(newFilm); // to add the 'newFilm' to the db

  await db.write();

  res.send("film added successfully");
});


// endpoint 4: expects a POST request to the path localhost:4000/music/new with a body that contains the data of the new music, adds it to the database (db.json) and then sends a response "music added successfully" to the client.
app.post("/music/new", async (req, res) => {
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