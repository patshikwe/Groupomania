//=== Fichier routes

// Importation
const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')
const postCtrl = require('../controllers/post')

// *************** Routes *************************
/* router => appelle express avec la fonction Router
   la méthode => get;post;put;delete
   postCtrl => renvoie au dossier controllers/post.js
   le point relie la fonction, la nomination de la fonction fait référence à son rôle.
*/
router.post('/', postCtrl.createPost)
router.get('/', postCtrl.getAllPosts)
router.delete('/:id', postCtrl.deletePost)

// router.post('/', auth, multer, postCtrl.createPost)
// router.get('/', auth, postCtrl.getAllPosts)
router.get('/:id', auth, postCtrl.getOnePost)
router.put('/:id', auth, multer, postCtrl.modifyPost)
// router.delete('/:id', auth, postCtrl.deletePost)
router.post('/:id/like', auth, postCtrl.likes)

// *************************************************

module.exports = router
