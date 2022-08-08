// Fichier modif et suppression des utilisateurs

// importation
const User = require('../models/User')
const objectId = require('mongoose').Types.ObjectId

/* Récupération des données de tous les utilisateurs 
   sans le mot de passe. 
*/
exports.getAllUsers = (req, res, next) => {
  User.find()
    .select('-password')
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error }))
}

// Récupération des données d'un utilisateur
exports.userInfo = (req, res, next) => {
  if (!objectId.isValid(req.params.id))
    return res.status(400).send(`id inconnu : ${req.params.id}`)

  User.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      console.log('id inconnu : ' + err)
    }
  }).select('-password')
}
