import dotenv from 'dotenv'
import 'dotenv/config'
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/discord',(req,res)=>{
    res.send('Aadityacom')
})

app.get('/login',(req,res)=>{
    res.send(' <h1>username<h1>')
})

app.get('/youtube',(req,res)=>{
    res.send(' <h2>Aaditya Kumar<h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})