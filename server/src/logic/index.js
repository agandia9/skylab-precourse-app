const { User, Subject, Exercise } = require('../models')
const mongoose = require('mongoose')

module.exports = {

    login(username,password){
         return Promise.resolve()
            .then( () => {
                return User.findOne({ username,password},{_id: 1, username: 1})
            }) 
            .then(user => {
                if(!user) throw Error('username and/or password wrong')

                return user
            })
    },

    listUsers(){
        return User.find({})
    },

    listUser(id){
        return User.findOne({_id:id})
    },

    createUser(name,surname,username,password,totalPercentage,photo,slackUser,units){
        return Promise.resolve()
            .then(() => {
                return User.findOne({ username })
            })
            .then(user => {

                if(user) throw Error(` ${username} already exists`)

                return User.create({name,surname,username,password,totalPercentage,photo,slackUser,units})
                    .then(user => user._id)
            })
    },

    updateUser(id,name,surname,username,password,totalPercentage,photo,slackUser,units){
        return User.findByIdAndUpdate({_id:id}, {$set:{name,surname,password,totalPercentage,photo,slackUser,units}})
    },

    deleteUser(id){
        return Promise.resolve()
            .then(user => {
                return User.findByIdAndRemove({_id:id})
                    .then(user => user._id)
            })
    },

    listSubjects(){
        return Subject.find({})
    },

    listSubject(id){
        return Subject.findOne({_id:id})
    },

    createSubject(unit,theory,exercice,resource,unitPercentage){
        return Promise.resolve()
            .then(subject => {
                return Subject.create({unit,theory,exercice,resource,unitPercentage})
                    .then(subject => subject._id)
            })
    },

    updateSubject(){
        //TODO
    },

    deleteSubject(){
        //TODO
    },

    listExercises(){
        return Exercise.find({})
    },

    listExercise(id){
        return Exercise.findOne({_id:id})
    },

    createExercice(index,title,example,status){
        return Promise.resolve()
            .then(exercise => {
                return Exercise.create({index,title,example,status})
                    .then(exercise => exercise._id)
            })
    },

    updateExercice(){
        //TODO
    },

    deleteExercice(){
        //TODO
    }

}