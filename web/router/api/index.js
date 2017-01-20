'use strict'

const express = require('express')
const router = express.Router()
const users = require('./users')

// router
router.get('/', function (req, res) {
  res.send('welcome')
})

router.use('/users', users)

module.exports = router
