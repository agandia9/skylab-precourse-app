'use strict'

require('dotenv').config()

const mongoose = require('mongoose')

const expect = require('expect')

const { env: { MONGO_HOST_TEST, MONGO_PORT_TEST, MONGO_DATABASE_TEST } } = process

const { User, Subject, Exercise } = require('./index')

describe('models (users)', () => {

    before(() => mongoose.connect(`mongodb://${MONGO_HOST_TEST}:${MONGO_PORT_TEST}/${MONGO_DATABASE_TEST}`))

    beforeEach(() => User.remove())

    describe('create user', () => {

        it('should succeed', () => {

            // Bateria de Users 

            const user = new User({
                name: 'Carlos',
                lastname: 'Ramos',
                username: 'asix94',
                password: '123',
                totalPercentage: 0,
                photo: 'https://www.knowmuhammad.org/img/noavatarn.png',
                slackUser: 'carlos.slack.com',
                isAdmin: false
            })

            // Bateria de Subjects

            const subject = new Subject({
                unit: 0,
                title: 'VARS, LOOPS, CONDITIONALS',
                theory: 'Variable: Una variable es un contenedor que sirve para almacenar datos. En javascript utilizamos la palabra reservada var para declarar una variable.',
                resource: ["https://www.w3schools.com/js/js_comparisons.asp"]
            })

            return subject.save()
                .then(subject => {

                    expect(subject).toBeDefined()
                    expect(subject._id).toBeDefined()
                    expect(subject.unit).toBe(0)
                    expect(subject.title).toBe('VARS, LOOPS, CONDITIONALS')
                    expect(subject.theory).toBe('Variable: Una variable es un contenedor que sirve para almacenar datos. En javascript utilizamos la palabra reservada var para declarar una variable.')
                    expect(subject.resource.length).toBe(1)
                    expect(subject.exercises.length).toBe(0)

                    // Bateria de exercise

                    const exercise = new Exercise({
                        unit: subject._id,
                        index: 'a',
                        statement: 'Declara tu nombre y muéstralo por consola:',
                        example: 'console.log(name) //Mark'
                    })

                    return exercise.save()
                        .then((exercise) => {

                            expect(exercise).toBeDefined()
                            expect(exercise._id).toBeDefined()
                            expect(exercise.unit).toBe(subject._id)
                            expect(exercise.index).toBe('a')
                            expect(exercise.statement).toBe('Declara tu nombre y muéstralo por consola:')
                            expect(exercise.example).toBe('console.log(name) //Mark')

                            return user.save()
                                .then(user => {

                                    //const userSubject = [{ porcentage: 0, subject: subject._id, exercises: [] }]
                                    user.subjects.push({ porcentage: 0, subject: subject._id, exercises: [{ status: 0, exercise: exercise._id }] })

                                    expect(user).toBeDefined()
                                    expect(user._id).toBeDefined()
                                    expect(user.name).toBe('Carlos')
                                    expect(user.lastname).toBe('Ramos')
                                    expect(user.username).toBe('asix94')
                                    expect(user.password).toBe('123')
                                    expect(user.totalPercentage).toBe(0)
                                    expect(user.photo).toBe('https://www.knowmuhammad.org/img/noavatarn.png')
                                    expect(user.slackUser).toBe('carlos.slack.com')
                                    expect(user.isAdmin).toBe(false)
                                    expect(user.subjects.length).toBe(1)
                                    expect(user.subjects[0].porcentage).toBe(0)
                                    expect(user.subjects[0].subject).toBe(subject._id)
                                    expect(user.subjects[0].exercises.length).toBe(1)
                                    expect(user.subjects[0].exercises[0].status).toBe(0)
                                    expect(user.subjects[0].exercises[0].exercise).toBe(exercise._id)

                                })
                        })
                })

        })

    })

    after((done) => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))

})