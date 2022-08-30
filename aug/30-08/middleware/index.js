import express from "express";

const app = express();

// Middleware is sequential, it gets executed from top to bottom.
// It runs until the response cycle is done or the process exits. 

/* 
    Middleware has 4 jobs:
    1. Run Code
    2. Change the request and response object
    3. end the request-response cycle
    4. Call the next middleware function
*/
// body parsing middleware, so we can look at json
app.use(express.json());

app.use((req, res, next) => {
    console.log("we are inside middleware");
    console.log(req.body);
    req.body.stuff = "niels"; // We can change the request object
    console.log(req.body);
    next(); // Call the next middleware. (usually the one below)
});

app.use((req, res, next) => {
    console.log(req.path);
    next();
})

// We can register middleware just on specific paths
app.get("/api", (req, res, next) => {
    console.log("we are on the api path");
})

app.listen(3000, () => {
    console.log("app is listening on port 3000");
})