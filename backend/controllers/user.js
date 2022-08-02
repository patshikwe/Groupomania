//== Fichier d'inscription et d'authentification d'utilisateur

const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { signUpErrors } = require('../utils/errors')

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: hash,
      })
      try {
        console.log('==> instruction try')
        user.save().then(() => res.status(201).json({ user: user._id }))
        console.log(user, 'vérif ...')
      } catch (err) {
        const errors = signUpErrors(err)
        res.status(200).send({ errors })
        console.log('===> catch err')
      }
    })
    .catch(() =>
      res
        .status(500)
        .json({ error: 'Le serveur a rencontré un problème inattendu' })
    )
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
              expiresIn: '8h',
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
