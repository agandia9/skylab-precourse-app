const logic = require('../../logic')

module.exports = (req,res) => {
    logic.get()
        .then(gets => res.json(gets))
        .catch(err => res.json(err))
}