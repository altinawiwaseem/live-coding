import express from "express";

const app = express();

// for every request that comes in
// check the public folder first
app.use(express.static('public'));

app.listen(3000, () => {
    console.log("app is listening on port 3000")
})