const express = require('express')
const {login, listUsers, listUser, createUser, updateUser, deleteUser} = require('./handlers')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()

const router = express.Router()

router.post('/login', jsonBodyParser, login)

router.get('/listUsers', listUsers)

router.get('/listUser/:id', listUser)

router.post('/createUser', jsonBodyParser, createUser)

router.put('/updateUser/:id', jsonBodyParser, updateUser)

router.delete('/deleteUser/:id', deleteUser)

module.exports = router