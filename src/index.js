require('dotenv').config()

const express = require('express')
const router = require('./router')
const app = express()

app.use(express())
app.use(router)
app.listen(3000)