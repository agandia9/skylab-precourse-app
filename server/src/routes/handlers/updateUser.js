const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {

    const { body : { name,surname,username,password,stateallprecourse,photo,slackUser,units }} = req

    const { params : { id }} = req

    logic.updateUser(id,name,surname,username,password,stateallprecourse,photo,slackUser,units)
        .then(id => {
            res.json(success(user))
        })
        .catch(err => {
            res.json(fail(err))
        })
}