// Fichier route utilisateur 

// Importation
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');


/* Routes
   userCtrl => chemin vers controllers/user.js
   signup =>
   login =>
*/
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);


module.exports = router;