require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes')

const mongo = {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_DATABASE 
}

with (mongo) {
    mongoose.connect(`mongodb://${host}:${port}/${database}`)
        .then(() => {
            const app = express()

            app.use(cors())

            app.use('/api', router)

            const port = process.env.PORT

            app.listen(port, () => console.log(`conexion in port ${port}`))
        })
        .catch(err => {
            console.error('App started error:', err.stack);
            process.exit(1);
        }) 
}