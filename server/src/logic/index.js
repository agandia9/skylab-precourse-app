const { User } = require('../models')
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

    createUser(name,surname,username,password,stateallprecourse,photo,slackUser,units){
        return User.create({name,surname,username,password,stateallprecourse,photo,units})
    },

    updateUser(id,name,surname,username,password,stateallprecourse,photo,slackUser,units){
        return User.findByIdAndUpdate({_id:id}, {$set:{name,surname,password,stateallprecourse,photo,slackUser,units}})
    },

    deleteUser(id){
        return User.findByIdAndRemove({_id:id})
    }

}