const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {

    const { body : {name,surname,username,password,totalPercentage,photo,slackUser,units}} = req

    logic.createUser(name,surname,username,password,totalPercentage,photo,slackUser,units)
        .then(id => {
            console.log(id)
            res.json(success({id}))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}