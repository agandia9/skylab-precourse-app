require('dotenv').config()
const express = require('express')
const app = express()

app.get('/api/get', (req,res) => {
    res.json('hello get')
})

app.post('/api/post', (req,res) => {
    res.json('hello post')
})

const port = process.env.PORT
app.listen(port, () => console.log(`conexion in port ${port}`))