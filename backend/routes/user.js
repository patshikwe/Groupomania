// Fichier route utilisateur 

// Importation
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');


/* Routes
   userCtrl -> chemin vers controllers/user.js
   signup -> correspond à exports.signup
   login -> correspond à exports.login
*/
router.post('/register', userCtrl.signup);
router.post('/login', userCtrl.login);


module.exports = router;