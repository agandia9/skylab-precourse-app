const express = require('express')
const {listUsers, listUser, createUser, updateUser, deleteUser} = require('./handlers')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()

const router = express.Router()

router.get('/listUsers', listUsers)

router.get('/listUser/:id', listUser)

router.post('/createUser', jsonBodyParser, createUser)

router.put('/updateUser/:id', jsonBodyParser, updateUser)

router.delete('/deleteUser/:id', deleteUser)

module.exports = router