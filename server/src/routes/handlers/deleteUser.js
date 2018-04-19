const logic = require('../../logic')

module.exports = (req,res) => {

    const { params : { id }} = req

    logic.deleteUser(id)
        .then(id => {
            res.json(user)
        })
        .catch(err => {
            res.json(err)
        })
}