// Fichier routes posts admin

const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')
const postCtrlAdmin = require('../controllers/postAdmin')

// *************** Routes *************************
/* router => appelle express avec la fonction Router
   la méthode => get;post;put;delete
   postCtrl => renvoie au dossier controllers/post.js
   le point relie la fonction, la nomination de la fonction fait référence à son rôle.
*/
router.post('/', auth, postCtrlAdmin.createPost)
router.get('/:id', postCtrlAdmin.getOnePost)
router.put('/:id', multer, postCtrlAdmin.modifyPost)

// router.post('/', auth, multer, postCtrlAdmin.createPost)
router.get('/', postCtrlAdmin.getAllPosts)
// router.get('/:id', auth, postCtrlAdmin.getOnePost) //à supprimer
// router.put('/:id', auth, multer, postCtrlAdmin.modifyPost)
router.delete('/:id', auth, postCtrlAdmin.getAllPosts)
router.post('/:id/like', auth, postCtrlAdmin.likes)

// *************************************************

module.exports = router
