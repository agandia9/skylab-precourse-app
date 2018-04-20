const { success, fail} = require('./api-utils')
const logic = require('../../logic')
const jwt = require('jsonwebtoken')

const { JWT_SECRET : secret} = process.env

module.exports = (req,res) => {

    const { body : {username,password}} = req

    logic.login(username,password)
        .then( user => {
            const token = jwt.sign({ id: user._id}, secret)

            res.json(success({ token }))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}