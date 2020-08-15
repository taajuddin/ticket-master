const express = require('express')
const router = express.Router()

const {aunthenticateUser} = require('../app/middlewares/authentication')

const usersController = require('../app/controllers/usersController')
const customersController = require('../app/controllers/customersController')

router.post('/users/registration',usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', aunthenticateUser, usersController.account)
router.delete('/users/logout', aunthenticateUser, usersController.logout)

router.get('/customers',aunthenticateUser, customersController.list)
router.get('/customers/:id',aunthenticateUser, customersController.show)
router.post('/customers',aunthenticateUser, customersController.create)
router.put('/customers/:id',aunthenticateUser, customersController.update)
router.delete('/customers/:id',aunthenticateUser, customersController.delete)

module.exports = router
