import express from 'express';
import fs from 'fs';
// You probably want to import some stuff here that lets you write to files
const app = express();

const loggingMiddleware = async (req, res, next) => {
    const loggerLine = req.path; 
    // Task 1: include a newline character
    // Task 2: include the time and date
    fs.appendFileSync('log.txt', loggerLine);
    // Write your code here.
    next();
}

app.use(loggingMiddleware) // This gets executed on every single request

app.get('/', (req, res) => {
    console.log("home page called")
    res.send('Home Page')
})

app.get('/users', (req, res) => {
    console.log("users page called")
    res.send('Users Page')
})
app.get('/contact', (req, res) => {
    console.log("contact page called")
    res.send('Contact Page')
})


app.listen(3000, () => console.log('Server Started'))
