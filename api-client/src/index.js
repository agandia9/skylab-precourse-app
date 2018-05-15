'use strict'

const rp = require('request-promise')

const api = {

    _baseUrl(){
        return `${this.protocol}://${this.host}:${this.port}/api`
    },

    _call(method,path,body,token){

        const options = {
            method,
            url: `${this._baseUrl()}/${path}`,
            json: true
        }

        if(body) options.body = body

        if(token) options.headers = { authorization: `Bearer ${token}` }

        return rp(options)
    },

    login(username,password){
        return this._call('post', 'login', {username,password})
    },

    listUsers(){
        return this._call('get', 'listUsers')
    },

    listUser(token){
        return this._call('get', `listUser`, undefined, token)
    },

    createUser(name,surname,username,password,stateallprecourse,photo,slackUser,units){
        return this._call('post', 'createUser', {name,surname,username,password,stateallprecourse,photo,slackUser,units})
    },

    updateUser(id,name,surname,username,password,stateallprecourse,photo,slackUser,units){
        return this._call('put', `updateUser/${id}`, {name,surname,username,password,stateallprecourse,photo,slackUser,units})
    },

    deleteUser(id){
        return this._call('delete', `deleteUser/${id}`)
    },

    listSubjects(){
        return this._call('get', 'listSubjects')
    },

    listSubject(unit){
        return this._call('get', `listSubject/${unit}`)
    },

    createSubject(unit,theory,resource,unitPercentage){
        return this._call('post', 'createSubject', {unit,theory,resource,unitPercentage})
    },

    updateSubject(id,unit,theory,resource,unitPercentage){
        return this._call('put', `updateSubject/${id}`, {unit,theory,resource,unitPercentage})
    },

    deleteSubject(id){
        return this._call('delete', `deleteSubject/${id}`)
    },

    listExercises(){
        return this._call('get', 'listExercises')
    },

    listExercise(id){
        return this._call('get', `listExercise/${id}`)
    },

    createExercise(index,title,example,status){
        return this._call('post', 'createExercise', {index,title,example,status})
    },

    updateExercise(id,index,title,example,status){
        return this._call('put', `updateExercise/${id}`, {index,title,example,status})
    },

    deleteExercise(id){
        return this._call('delete', `deleteExercise/${id}`)
    },

    changeStatus(token, idSubject, idExercise, value){
        return this._call('put', 'changeStatus', {idSubject, idExercise, value}, token)
    }
    
}

module.exports = api