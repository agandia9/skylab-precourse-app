require('dotenv').config()

const api = require('../src')
const assert = require('assert')

const { API_PROTOCOL, API_HOST, API_PORT } = process.env

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT

describe('api', () => {

    it('should listUsers', done => {
        api.listUsers()
            .then(res => {
                assert.equal(res.status, 'OK', `results should be ok but got errors ${res.error}`)
                
                assert(res.data && res.data.length > 0, 'should results data array')

                done()

            })
            .catch(done)
    })

    it('should listUser', done => {
        api.listUser('5ad758c9db42300668a6648b')
            .then(res => {
                assert.equal(res.status, 'OK', `results should be ok but got errors ${res.error}`)

                assert.equal(res.data._id, '5ad758c9db42300668a6648b')
                
                assert(res.data, 'should results data array')

                done()
            })
            .catch(done)
    })
})