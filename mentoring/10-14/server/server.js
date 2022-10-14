const express = require('express')

const app = express()
// console.log("🚀 ~ express", app)

require('dotenv').config()

// console.log("🚀 ~ dotenv", dotenv)

const connectDb = require('./config/db')
connectDb()


app.use(express.json())

// app.use(path, cb)
// app.use((req, res) => {

//     console.log('hello')
//     res.send('hi')
// })

app.use('/posts', require('./routes/postRoutes'))
app.use('/users', require('./routes/userRoutes'))

const port = process.env.PORT || 8000

app.listen(port, () => console.log('Server is up and running at port', port))

