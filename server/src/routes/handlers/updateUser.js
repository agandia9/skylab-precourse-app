const logic = require('../../logic')

module.exports = (req,res) => {

    const { body : { name,surname,username,password,stateallprecourse,photo,slackUser,units }} = req

    const { params : { id }} = req

    logic.updateUser(id,name,surname,username,password,stateallprecourse,photo,slackUser,units)
        .then(id => {
            res.json(user)
        })
        .catch(err => {
            res.json(err)
        })
}