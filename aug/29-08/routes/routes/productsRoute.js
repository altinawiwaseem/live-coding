import express from "express";
import { Low, JSONFile } from "lowdb";


export const productsRouter = express.Router();


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
productsRouter.get("/", (req, res) => {
  // Read

  res.send(db.data.products);
});


productsRouter.post("/", async (req, res) => {
  //Create
  console.log(req.body);

  let newProduct = req.body;

  
  newProduct.id = uid(); // to create an id
  db.data.products.push(newProduct); // to add the 'newProduct' to the db

  await db.write();

  res.send(db.data.products);
});


productsRouter.delete( "/:id", async (req, res) => {
  //Delete
  const updatedProductsArr = db.data.products.filter(
    (product) => product.id !== req.params.id
  );

  db.data.products = updatedProductsArr;

  await db.write();

  res.send(db.data.products);
});


productsRouter.put( "/:id", async (req, res) => {
  //Update

  console.log(req.body);

  let updatedProductsArr = db.data.products.filter(
    (product) => product.id !== req.params.id
  );

  let updatedProduct = req.body;
  updatedProduct.id = req.params.id;

  updatedProductsArr.push(updatedProduct);

  db.data.products = updatedProductsArr;

  await db.write();

  res.send(db.data.products);
});

