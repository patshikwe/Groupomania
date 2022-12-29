//=== Fichier routes utilisateurs

// Importation
const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')
const postCtrl = require('../controllers/post')

// *************** Routes *************************
/* router => appelle express avec la fonction Router.
   Les méthodes => get;post;put;delete pour une requête.
   postCtrl => renvoie au dossier controllers/post.js.
   Le point permet de cibler un élèment d'un parent.  
   La nomination de la fonction fait référence à son rôle.
*/

router.post('/', auth, multer, postCtrl.createPost)
router.get('/', auth, postCtrl.getAllPosts)
router.put('/:id', auth, multer, postCtrl.modifyPost)
router.delete('/:id', auth, postCtrl.deletePost)
router.post('/:id/like', auth, postCtrl.likes)

// *************************************************

module.exports = router
