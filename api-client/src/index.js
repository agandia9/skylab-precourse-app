'use strict'

const rp = require('request-promise')

const api = {

    _baseUrl(){
        return `${this.protocol}://${this.host}:${this.port}/api`
    },

    _call(method,path,body){

        const options = {
            method,
            url: `${this._baseUrl()}/${path}`,
            json: true
        }

        return rp(options)
    },

    login(username,password){
        return this._call('post', 'login', {username,password})
    },

    listUsers(){
        return this._call('get', 'listUsers')
    },

    listUser(id){
        return this._call('get', `listUser/${id}`)
    },

    createUser(name,surname,username,password,stateallprecourse,photo,slackUser,units){
        return this._call('post', 'createUser', {name,surname,username,password,stateallprecourse,photo,slackUser,units})
    },

    updateUser(id,name,surname,username,password,stateallprecourse,photo,slackUser,units){
        return this._call('put', `updateUser/${id}`, {name,surname,username,password,stateallprecourse,photo,slackUser,units})
    },

    deleteUser(id){
        return this._call('delete', `deleteUser/${id}`)
    }

}

module.exports = api