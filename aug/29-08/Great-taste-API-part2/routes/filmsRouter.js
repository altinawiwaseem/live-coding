import express from "express";
import { Low, JSONFile } from "lowdb";


export const filmsRouter = express.Router();


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
filmsRouter.get("/", (req, res) => {
  // Read

  res.send(db.data.films);
});


filmsRouter.post("/", async (req, res) => {
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


filmsRouter.delete( "/:id", async (req, res) => {
  //Delete
  const updatedFilmsArr = db.data.films.filter(
    (film) => film.id !== req.params.id
  );

  db.data.films = updatedFilmsArr;

  await db.write();

  res.send(db.data.films);
});


filmsRouter.put( "/:id", async (req, res) => {
  //Update

  console.log(req.body);

  let updatedFilmsArr = db.data.films.filter(
    (film) => film.id !== req.params.id
  );

  let updatedFilm = req.body;
  updatedFilm.id = req.params.id;

  updatedFilmsArr.push(updatedFilm);

  db.data.films = updatedFilmsArr;

  await db.write();

  res.send(db.data.films);
});

