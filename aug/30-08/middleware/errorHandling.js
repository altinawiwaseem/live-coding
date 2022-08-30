import express from "express";

const app = express();

// Sync code
app.get("/", (req, res, next) => {
    console.log("this middleware is running");
    const myErr = new Error("my mistake"); // I build a custom error object
    myErr.type = "notfound" // On that custom error object, I give the type "notfound", {title: "my mistake", type: "notfound"}
    // try {
    //     throw myErr;
    // } catch (e) { // e=myErr
        next(myErr); // Whenever we run next() and pass it an error, we skip all other middleware and go to the error handling middleware
    // }
})

// This gets called on any path, if it doesnt get skipped.
app.use("/", (req, res, next) => {
    console.log("are we here?");
    next();
})

app.get("/404", (req, res) => {
    console.log("inside 404")
    res.status(404).send("<h1> 404 Site not found </h1>");
})

// Error handling middleware 
app.use((error, req, res, next) => {
    console.log("we are inside the error handling middleware");
    console.log(error);
    if(error.type === "notfound") {
        res.redirect("/404");
    }
})

app.listen(3000, () => {
    console.log("app listening on port 3000");
})