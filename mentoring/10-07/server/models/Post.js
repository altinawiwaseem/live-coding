const mongoose = require('mongoose')

const {Schema} = mongoose

const postSchema = new Schema({

    message: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    likes: {type: Number},
    dateCreated: {
        default: Date.now,
        type: Date
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post