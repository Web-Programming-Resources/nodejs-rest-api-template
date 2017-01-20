'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./router/api')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// request log를 console에 print
app.use(morgan('dev'))

// /api/v1 하위로 요청되는 request 다음 router에서 수행
app.use('/api/v1', router)

module.exports = app
