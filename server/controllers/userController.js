const User = require('../models/userModel') // we use this to interact with our users collections in our database
const jwt = require('jsonwebtoken') // will be used to assign tokens to user to determine logged-in status


// This generates a token with the input id (which, in what follows, will be the same id MongoDB gives the associated element), 
// a secret string, and a login time limit
const createToken = (id) => {
    return jwt.sign({ {id}, process.env.SECRET, { expiresIn: '4h' } })
}


// login user - only structure for now
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

// signup user 
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)

        // create a token assigned to user
        const token = createToken(user.id)

        res.status(200).json({email, token}) // if theres is no error, User.signup returns a user object created in mongoDB
    } catch (error) {
        res.status(400).json({error: error.mssg})
    }

    // res.json({mssg: 'signup user'}) // this was here when I just wanted to test API requests using Postman, before the logic implemented above
}

// This allows us to export the above functions for use
// in other files, particularly in the user.js routes file
module.exports = {signupUser, loginUser}