const express = require('express')
const router = express.Router();
const Post = require('../models/Post')

const postsController = require('../controllers/postsController')
// const handleSearch = require('../controllers/postsController')

router.get('/list', postsController.handleList)
router.get('/search', postsController.handleSearch)


router.post('/add', async (req, res) => {

    try {
        
        console.log('Body is', req.body)
    
        const response = await Post.create({message: req.body.message, owner: req.body.user})
        console.log("🚀 ~ router.post ~ response", response)
    
        // const newPost = new Post(req.body);
    
        // const post = await newPost.save()
    
        res.send({success: true, response})
    } catch (error) {
        
        console.log('Error adding post', error.message)
        res.send({success: false, error: 1})
    }

})

module.exports = router