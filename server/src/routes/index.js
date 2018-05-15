const express = require('express')
const {login, listUsers, listUser, createUser, updateUser, deleteUser} = require('./handlers/userHandlers')
const {listSubjects, listSubject, createSubject, updateSubject, deleteSubject} = require('./handlers/subjectHandlers')
const {listExercises, listExercise, createExercise, updateExercise, deleteExercise, listExercisesUnit, changeStatus} = require('./handlers/exerciseHandlers')
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

router.get('/listExercises', listExercises)

router.get('/listExercise/:id', listExercise)

router.post('/createExercise', jsonBodyParser, createExercise)

router.put('/updateExercise/:id', jsonBodyParser, updateExercise)

router.delete('/deleteExercise/:id', deleteExercise)

router.get('/listExercisesUnit/:unit', listExercisesUnit)

router.put('/changeStatus', [jwtValidator,jsonBodyParser], changeStatus)

module.exports = router