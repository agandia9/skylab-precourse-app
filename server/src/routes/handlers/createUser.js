const logic = require('../../logic')

module.exports = (req,res) => {

    const { body : {name,surname,username,password,stateallprecourse,photo,slackUser,units}} = req

    logic.createUser(name,surname,username,password,stateallprecourse,photo,slackUser,units)
        .then(id => {
            res.json(id)
        })
        .catch(err => {
            res.json(err)
        })
}