// Fichier route utilisateur

// Importation
const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')
const validPassword = require('../middleware/valid-password')
const userController = require('../controllers/user-controller')

/* Routes
   userCtrl -> chemin vers controllers/user.js
   signup -> correspond à exports.signup
   login -> correspond à exports.login
   validPassword -> chemin vers validation de mot de passe
*/
router.post('/register', validPassword, userCtrl.signup)
router.post('/login', userCtrl.login)

// Option utilisateurs
router.get('/', userController.getAllUsers)
router.get('/:id', userController.userInfo)

module.exports = router
