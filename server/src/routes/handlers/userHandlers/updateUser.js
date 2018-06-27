const { success, fail } = require('../utils/api-utils')
const logic = require('../../../logic')

module.exports = (req,res) => {

    const { body : { username,newUsername,password,newPassword }} = req

    const { params : { id }} = req

    logic.updateUser(id,username,newUsername,password,newPassword)
        .then(id => {
            res.json(success({id}))
        })
        .catch(err => {
            res.json(fail(err))
        })
}