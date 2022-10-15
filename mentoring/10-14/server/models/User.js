const mongoose = require('mongoose')
const {Schema} = mongoose;

const bcrypt = require('bcrypt')
const saltRounds = 10;

const jwt = require('jsonwebtoken')

require('dotenv').config()

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
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

userSchema.pre('save', function(next) {

    const user = this

    if (user.isModified('pass') ) {

        
        bcrypt.genSalt(saltRounds, function(err, salt) {

            console.log('SALT is', salt)
            // $2b$30$D2Zudwx5qtNgHdsAASrRtO

            bcrypt.hash(user.pass, salt, function(err, hash) {
            //     // Store hash in your password DB.

            user.pass = hash
            
            console.log("🚀 ~ bcrypt.hash ~ hash", user)

            next()
            })
            
        })
    } else {
        next()
    }

})

userSchema.methods.generateToken = async function () {

    const user = this;

    const token = jwt.sign({id: user._id}, process.env.SECRET, {
        expiresIn: '1d'
    })

    console.log('token is', token)
    return token
}

userSchema.statics.genStaticsToken = async function () {

    const token = jwt.sign({id: 123123}, process.env.SECRET, {
        expiresIn: '1d'
    })

    console.log('token is', token)
    return token
}

module.exports = mongoose.model('User', userSchema);