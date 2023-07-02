const express = require('express')
const Router = express.Router()
const useCase = require('../useCase/useCase')

Router.post('/',useCase.signup)