const { User, Subject, Exercise } = require('../models')
const mongoose = require('mongoose')

module.exports = {

    login(username, password) {
        return Promise.resolve()
            .then(() => {
                return User.findOne({ username, password }, { _id: 1, username: 1 })
            })
            .then(user => {
                if (!user) throw Error('username and/or password wrong')

                return user
            })
    },

    listUsers() {
        return User.find({})
            .populate({
                path: 'subjects.exercises.exercise'
            })
            .populate({
                path: 'subjects.subject'
            })

    },

    listUser(id) {
        return User.findOne({ _id: id })
            .populate({
                path: 'subjects.exercises.exercise'
            })
            .populate({
                path: 'subjects.subject'
            })
    },

    changeTotalStatus(id, idSubject, idExercise, value) {

        return this.changeStatus(id, idSubject, idExercise, value)
            .then(() => {
                return this.changePorcentage(id, idSubject)
                    .then(() => {
                        return this.changeTotalPorcentage(id)
                            .then(() => {
                                return this.listUser(id)
                            })
                    })
            })
    },

    changeStatus(id, idSubject, idExercise, value) {

        return this.listUser(id)
            .then(user => {
                user.subjects.forEach(subject => {
                    if (subject._id == idSubject) {
                        subject.exercises.forEach(exercise => {
                            if (exercise._id == idExercise) {
                                exercise.status = value
                            }
                        })
                    }
                })

                return user.save()
            })

    },

    changePorcentage(id, idSubject) {

        const statusArray = []

        return this.listUser(id)
            .then(user => {
                user.subjects.forEach(subject => {
                    if (subject._id == idSubject) {
                        subject.exercises.forEach(exercise => {
                            statusArray.push(exercise.status)
                        })
                    }
                })

                total = statusArray.length
                spect = statusArray.filter(status => status === 1)
                total2 = spect.length
                porcentage = (total2 * 100) / total
                return porcentage
            })
            .then(res => {

                return User.findOneAndUpdate(
                    {
                        _id: id,
                        subjects: {
                            $elemMatch: {
                                _id: idSubject
                            }
                        }
                    },
                    { $set: { 'subjects.$.porcentage': res } });
            })

    },

    changeTotalPorcentage(id) {

        const percentageArray = []

        return this.listUser(id)
            .then(user => {
                user.subjects.forEach(subject => {
                    percentageArray.push(subject.porcentage)
                })

                total = (percentageArray.length * 100)
                total2 = percentageArray.reduce(function (van, vac, i, v) {
                    return van + vac
                })

                return media = (total2 * 100) / total

            })
            .then(res => {
                return User.findByIdAndUpdate({ _id: id }, { $set: { totalPercentage: res } })
            })
    },

    createUser(name, surname, username, password, slackUser, isAdmin) {
        console.log(name, surname, username, password, slackUser, isAdmin)
        return Promise.resolve()
            .then(() => {
                return User.findOne({ username })
            })
            .then(user => {

                //if(user) throw Error(` ${username} already exists`)

                this.arraySubject()
                    .then(subjects => {
                        return User.create({ name, surname, username, password, slackUser, isAdmin, subjects })
                            .then(user => {
                                console.log(user)
                                return user._id
                            })
                    })
                /*if(user) throw Error(` ${username} already exists`)
                
                subjects = []

                return this.listSubjects()
                .then(data => {
                    for(i = 0; i < data.length; i++){
                        subjects.push({porcentage:0,subject:data[i]._id})
                    }
                })
                .then(() => User.create({name,surname,username,password,totalPercentage,photo,slackUser,subjects}))
                .then(user => user._id)*/

            })
    },

    arrayExercise(unit) {

        const exercises = []

        return Promise.resolve()
            .then(() => this.listExercisesUnit(unit))
            .then(practises => {
                for (i = 0; i < practises.length; i++) {
                    exercises.push({ status: 0, exercise: practises[i]._id })
                }
                return exercises
            })
    },

    arraySubject() {

        const subjects = []

        return Promise.resolve()
            .then(() => {
                return this.listSubjects()
                    .then(units => {
                        return Promise.all(units.map(unit => {
                            return this.arrayExercise(unit._id)
                                .then(practises => {
                                    subjects.push({ porcentage: 0, subject: unit._id, exercises: practises })
                                })
                        }))

                    })
                    .then(() => {
                        return subjects
                    })
            })
    },

    /*updateUser(id,name,surname,username,password,photo,slackUser){
        return User.findByIdAndUpdate({_id:id}, {$set:{name,surname,password,photo,slackUser}})
    },*/

    updateUser(id, username, newUsername, password, newPassword) {

        return Promise.resolve()
            .then(() => {

                if (typeof username !== 'string') throw Error('username is not a string')

                if (!(username = username.trim()).length) throw Error('username is empty or blank')

                if (newUsername === undefined) newUsername = username

                if (typeof newUsername !== 'string') throw Error('newUsername is not a string')

                if (!(newUsername = newUsername.trim()).length) throw Error('newUsername is empty or blank')

                if (typeof password !== 'string') throw Error('password is not a string')

                if (!(password = password.trim()).length) throw Error('password is empty or blank')

                if (newPassword === undefined) newPassword = password

                if (typeof newPassword !== 'string') throw Error('newPassword is not a string')

                if (!(newPassword = newPassword.trim()).length) throw Error('newPassword is empty or blank')

                return User.findById({ _id: id })

            })
            .then(user => {

                if (!user) throw Error('user not found')

                if (user.username !== username) throw Error('this username is invalid')

                if (user.password !== password) throw Error('this password is invalid')

                return User.findByIdAndUpdate({ _id: id }, { username: newUsername, password: newPassword }, { new: true }).select({ password: 0 })

            })
            .then(user => {

                if (!user) throw Error('user not found')

                return user

            })
    },

    deleteUser(id) {
        return Promise.resolve()
            .then(user => {
                return User.findByIdAndRemove({ _id: id })
                    .then(user => user._id)
            })
    },

    listSubjects() {
        return Subject.find({})
    },

    listSubject(unit) {
        return Subject.findOne({ unit: unit }).populate('exercises')
    },

    createSubject(unit, title, theory, resource, unitPercentage, exercises) {
        return Promise.resolve()
            .then(subject => {
                return Subject.create({ unit, title, theory, resource, unitPercentage, exercises })
                    .then(subject => subject._id)
            })
    },

    updateSubject(id, unit, title, theory, resource, unitPercentage, exercises) {
        return Promise.resolve()
            .then(subject => {
                return Subject.findByIdAndUpdate({ _id: id }, { $set: { unit, title, theory, resource, unitPercentage, exercises } })
                    .then(subject => subject._id)
            })
    },

    deleteSubject(id) {
        return Promise.resolve()
            .then(subject => {
                return Subject.findByIdAndRemove({ _id: id })
                    .then(subject => subject._id)
            })
    },

    listExercises() {
        return Exercise.find({})
    },

    listExercise(id) {
        return Exercise.findOne({ _id: id })
    },

    listExercisesUnit(unit) {
        return Exercise.find({ unit: unit })
    },

    /*createExercice(unit,index,title,example,status){
        return Promise.resolve()
            .then(exercise => {
                const unit = mongoose.mongo.ObjectId(id)
                return Exercise.create({unit,index,title,example,status})
                    .then(exercise => exercise._id)
            })
    },*/

    createExercice(unit, index, statement, example, status) {
        return Promise.resolve()
            .then(() => {
                this.listSubject(unit)
                    .then(subject => {
                        if (!subject) throw Error(` unit ${unit} doesnt exist`)

                        const unit = mongoose.mongo.ObjectId(subject._id)
                        Exercise.create({ unit, index, statement, example, status })
                            .then(exercise => {
                                return Subject.findByIdAndUpdate({ _id: exercise.unit }, { $push: { exercises: exercise._id } })
                                then(exercise => exercise._id)
                            })
                    })
            })
    },

    updateExercice(id, unit, index, statement, example, status) {
        return Promise.resolve()
            .then(exercice => {
                return Exercise.findByIdAndUpdate({ _id: id }, { $set: { unit, index, statement, example, status } })
                    .then(exercice => exercice._id)
            })
    },

    deleteExercice(id) {
        return Promise.resolve()
            .then(exercice => {
                return Exercise.findByIdAndRemove({ _id: id })
                    .then(exercice => exercice._id)
            })
    }

}