const express = require('express')
const {login, listUsers, listUser, createUser, updateUser, deleteUser} = require('./handlers/userHandlers')
const {listSubjects, listSubject, createSubject, updateSubject, deleteSubject} = require('./handlers/subjectHandlers')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()
const jwtValidator = require('./handlers/jwtValidator')

const router = express.Router()

router.post('/login', jsonBodyParser, login)

router.get('/listUsers', listUsers)

router.get('/listUser', jwtValidator, listUser)

router.post('/createUser', jsonBodyParser, createUser)

router.put('/updateUser/:id', jsonBodyParser, updateUser)

router.delete('/deleteUser/:id', deleteUser)

router.get('/listSubjects', listSubjects)

router.get('/listSubject/:unit', listSubject)

router.post('/createSubject', jsonBodyParser, createSubject)

router.put('/updateSubject/:id', jsonBodyParser, updateSubject)

router.delete('/deleteSubject/:id', jsonBodyParser, deleteSubject)

module.exports = router