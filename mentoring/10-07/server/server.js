const express = require('express')

const app = express()
// console.log("🚀 ~ express", app)

require('dotenv').config()

// console.log("🚀 ~ dotenv", dotenv)

const connectDb = require('./config/db')
connectDb()

// app.use(path, cb)
app.use(() => console.log('hello'))

const port = process.env.PORT || 8000

app.listen(port, () => console.log('Server is up and running at port', port))

