const mongoose = require('mongoose')
const {Schema} = mongoose;

const bcrypt = require('bcrypt')
const saltRounds = 30;

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

userSchema.pre('save', function() {

    

    const user = this

    if (user.isModified('pass') ) {

        console.log('pre here!PASS is being modified')
        
        bcrypt.genSalt(saltRounds, function(err, salt) {

            console.log('SALT is', salt)
            // $2b$30$D2Zudwx5qtNgHdsAASrRtO
            // bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
            //     // Store hash in your password DB.
            // })
            
        })
    }

})

module.exports = mongoose.model('User', userSchema);