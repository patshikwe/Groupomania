// Fichier route utilisateur

// Importation
const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')
const validPassword = require('../middleware/valid-password')

/* Routes
   userCtrl -> chemin vers controllers/user.js
   signup -> correspond à exports.signup
   login -> correspond à exports.login
*/
router.post('/register', validPassword, userCtrl.signup)
router.post('/login', userCtrl.login)

module.exports = router
