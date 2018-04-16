const logic = require('../../logic')

module.exports = (req,res) => {
    logic.post()
        .then(posts => res.json(posts))
        .catch(err => res.json(err))
}