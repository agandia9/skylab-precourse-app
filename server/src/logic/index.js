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

    createUser(name,surname,username,password,totalPercentage,photo,slackUser){
        return Promise.resolve()
            .then(() => {
                return User.findOne({ username })
            })
            .then(user => {

                if(user) throw Error(` ${username} already exists`)

                return User.create({name,surname,username,password,totalPercentage,photo,slackUser})
                    .then(user => user._id)
            })
    }, 

    updateUser(id,name,surname,username,password,totalPercentage,photo,slackUser){
        return User.findByIdAndUpdate({_id:id}, {$set:{name,surname,password,totalPercentage,photo,slackUser}})
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

    listSubject(unit){
        return Subject.findOne({unit:unit})
    },

    createSubject(unit,title,theory,resource,unitPercentage,exercises){
        return Promise.resolve()
            .then(subject => {
                return Subject.create({unit,title,theory,resource,unitPercentage,exercises})
                    .then(subject => subject._id)
            })
    },

    updateSubject(id,unit,title,theory,resource,unitPercentage,exercises){
        return Promise.resolve()
            .then(subject => {
                return Subject.findByIdAndUpdate({_id:id}, {$set:{unit,title,theory,resource,unitPercentage,exercises}})
                    .then(subject => subject._id)
            })
    },

    deleteSubject(id){
        return Promise.resolve()
            .then(subject => {
                return Subject.findByIdAndRemove({_id:id})
                    .then(subject => subject._id)
            })
    },

    listExercises(){
        return Exercise.find({})
    },

    listExercise(id){
        return Exercise.findOne({_id:id})
    },

    /*createExercice(unit,index,title,example,status){
        return Promise.resolve()
            .then(exercise => {
                const unit = mongoose.mongo.ObjectId(id)
                return Exercise.create({unit,index,title,example,status})
                    .then(exercise => exercise._id)
            })
    },*/

    createExercice(unit,index,title,example,status){
        return Promise.resolve()
            .then(() => {
                this.listSubject(unit)
                    .then(subject => {
                        if(!subject) throw Error(` unit ${unit} doesnt exist`)

                        const unit = mongoose.mongo.ObjectId(subject._id)
                        Exercise.create({unit,index,title,example,status})
                            .then(exercise => {
                                return Subject.findByIdAndUpdate({ _id : exercise.unit },{ $push: { exercises : exercise._id }})
                                    then(exercise => exercise._id)
                            })
                    })
            })
    },

    updateExercice(id,unit,index,title,example,status){
        return Promise.resolve()
            .then(exercice => {
                return Exercise.findByIdAndUpdate({_id:id},{$set:{unit,index,title,example,status}})
                    .then(exercice => exercice._id)
            })
    },

    deleteExercice(id){
        return Promise.resolve()
            .then(exercice => {
                return Exercise.findByIdAndRemove({_id:id})
                    .then(exercice => exercice._id)
            })
    }

}