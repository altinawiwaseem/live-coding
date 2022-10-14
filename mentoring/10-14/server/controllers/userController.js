const User = require('../models/User')

exports.handleRegister = async (req, res) => {

    
    try {
        console.log('hello from register')
    
        // const result = await User.create(req.body)

        const newUser = new User(req.body)

        const result = newUser.save()
    
        res.send({success: true})
        
    } catch (error) {
        console.log('error in register', error.message)
    }
}