const mongoose = require('mongoose')

require('dotenv').config()

module.exports = () => {

    try {
        
        mongoose.connect(process.env.DB_URI)
        console.log('Connected to db!')
    } catch (error) {
        console.log("🚀 ~ error", error)
        
    }

}

