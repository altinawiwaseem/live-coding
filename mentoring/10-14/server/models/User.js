const mongoose = require('mongoose')
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true,
    }

})

module.exports = userSchema.module('User', userSchema);