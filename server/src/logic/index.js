module.exports = {

    get() {
        return Promise.resolve()
            .then( () => {
                return 'Hello GET'
            })
    },

    post() {
        return Promise.resolve()
            .then( () => {
                return 'Hello POST'
            })
    },

    put() {
        return Promise.resolve()
            .then( () => {
                return 'Hello PUT'
            })
    },

    delete(){
        return Promise.resolve()
            .then( () => {
                return 'Hello DELETE'
            })
    }

}