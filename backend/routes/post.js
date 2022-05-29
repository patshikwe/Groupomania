//=== Fichier routes

// Importation
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postCtrl = require('../controllers/post');


// *************** Routes *************************
/* router => appelle express avec la fonction Router
   la méthode => get;post;put;delete
   sauceCtrl => renvoie au dossier controllers/post.js
   le point relie la fonction, la nomination de la fonction fait référence à son rôle.
*/

router.get('/', auth, postCtrl.getAllPosts);
router.get('/:id', auth, postCtrl.getOnePost);


// *************************************************

module.exports = router;