'use strict';

var rp = require('request-promise');

var api = {
    _baseUrl: function _baseUrl() {
        return this.protocol + '://' + this.host + '/api';
    },
    _call: function _call(method, path, body, token) {

        var options = {
            method: method,
            url: this._baseUrl() + '/' + path,
            json: true
        };

        if (body) options.body = body;

        if (token) options.headers = { authorization: 'Bearer ' + token };

        return rp(options);
    },
    login: function login(username, password) {
        return this._call('post', 'login', { username: username, password: password });
    },
    listUsers: function listUsers() {
        return this._call('get', 'listUsers');
    },
    listUser: function listUser(token) {
        return this._call('get', 'listUser', undefined, token);
    },
    createUser: function createUser(name, surname, username, password, slackUser, isAdmin) {
        return this._call('post', 'createUser', { name: name, surname: surname, username: username, password: password, slackUser: slackUser, isAdmin: isAdmin });
    },
    updateUser: function updateUser(id, username, newUsername, password, newPassword) {
        return this._call('put', 'updateUser/' + id, { username: username, newUsername: newUsername, password: password, newPassword: newPassword });
    },
    deleteUser: function deleteUser(id) {
        return this._call('delete', 'deleteUser/' + id);
    },
    listSubjects: function listSubjects() {
        return this._call('get', 'listSubjects');
    },
    listSubject: function listSubject(unit) {
        return this._call('get', 'listSubject/' + unit);
    },
    createSubject: function createSubject(unit, theory, resource, unitPercentage) {
        return this._call('post', 'createSubject', { unit: unit, theory: theory, resource: resource, unitPercentage: unitPercentage });
    },
    updateSubject: function updateSubject(id, unit, theory, resource, unitPercentage) {
        return this._call('put', 'updateSubject/' + id, { unit: unit, theory: theory, resource: resource, unitPercentage: unitPercentage });
    },
    deleteSubject: function deleteSubject(id) {
        return this._call('delete', 'deleteSubject/' + id);
    },
    listExercises: function listExercises() {
        return this._call('get', 'listExercises');
    },
    listExercise: function listExercise(id) {
        return this._call('get', 'listExercise/' + id);
    },
    createExercise: function createExercise(index, title, example, status) {
        return this._call('post', 'createExercise', { index: index, title: title, example: example, status: status });
    },
    updateExercise: function updateExercise(id, index, title, example, status) {
        return this._call('put', 'updateExercise/' + id, { index: index, title: title, example: example, status: status });
    },
    deleteExercise: function deleteExercise(id) {
        return this._call('delete', 'deleteExercise/' + id);
    },
    changeStatus: function changeStatus(token, idSubject, idExercise, value) {
        return this._call('put', 'changeStatus', { idSubject: idSubject, idExercise: idExercise, value: value }, token);
    },
    changePorcentage: function changePorcentage(token, idSubject) {
        return this._call('put', 'changePorcentage', { idSubject: idSubject }, token);
    },
    changeTotalPorcentage: function changeTotalPorcentage(token) {
        return this._call('put', 'changeTotalPorcentage', undefined, token);
    },
    changeTotalStatus: function changeTotalStatus(token, idSubject, idExercise, value) {
        return this._call('put', 'changeTotalStatus', { idSubject: idSubject, idExercise: idExercise, value: value }, token);
    }
};

module.exports = api;
