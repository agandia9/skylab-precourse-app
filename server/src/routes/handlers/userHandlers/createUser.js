const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {

    const { body : {name,surname,username,password,slackUser,isAdmin,units}} = req

    logic.createUser(name,surname,username,password,slackUser,isAdmin,units)
        .then(id => {
            res.json(success({id}))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}