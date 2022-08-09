//== Fichier d'inscription et d'authentification d'utilisateur

// Importation
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: hash,
      })
      user
        .save()
        .then(() => {
          return res.status(201).json({ user: user._id })
        })
        .catch((err) => res.status(200).json({ err }))
    })
    .catch((error) => res.status(500).json({ error }))
}

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(200).json({ errorEmail: 'Utilisateur non trouvé !' })
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(200)
              .json({ errorPassword: 'Mot de passe incorrect !' })
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, 'SECRET_WORD_TOKEN', {
              expiresIn: '24h',
            }),
          })
        })
        .catch(() =>
          res
            .status(500)
            .json({ error: 'Le serveur a rencontré un problème inattendu' })
        )
    })
    .catch(() =>
      res
        .status(500)
        .json({ error: 'Le serveur a rencontré un problème inattendu' })
    )
}
