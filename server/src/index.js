require('dotenv').config()
const express = require('express')
const app = express()

app.get('/api/get', (req,res) => {
    res.json('hello world')
})

const port = process.env.PORT
app.listen(port, () => console.log(`conexion in port ${port}`))