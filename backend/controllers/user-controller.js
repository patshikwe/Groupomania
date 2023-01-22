// Fichier modif et suppression des utilisateurs

// importation
const User = require('../models/User')
const objectId = require('mongoose').Types.ObjectId

// Récupération des données d'un utilisateur
exports.userInfo = (req, res, next) => {
  if (!objectId.isValid(req.params.id))
    return res.status(400).json(`id inconnu : ${req.params.id}`)

  User.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      console.log('id inconnu : ' + err)
    }
  }).select('-password')
}
