require('dotenv').config()
const express = require('express')
const router = require('./routes')

const app = express()

app.use('/api', router)

const port = process.env.PORT

app.listen(port, () => console.log(`conexion in port ${port}`))