const Post = require('../models/Post')

async function handleList(req, res) {

    const posts = await Post.find()

    res.send(posts)
}

const  handleSearch = (req, res) => {

    res.send('hello from search')
}

module.exports = {handleList, handleSearch}