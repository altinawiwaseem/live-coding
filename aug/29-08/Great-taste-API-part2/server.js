import express from "express";
import { filmsRouter } from "./routes/filmsRouter.js";
import { musicRouter } from "./routes/musicRouter.js";

const app = express();

const PORT=4000;

app.listen(PORT, () =>
  console.log(`server is running on port ${PORT}`)
);

//!Important to be able to read the body of the request req.body
app.use(express.json());

app.use("/films", filmsRouter);
app.use("/music", musicRouter);