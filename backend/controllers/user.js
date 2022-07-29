//== Fichier d'inscription et d'authentification d'utilisateur

const UserModel = require('../models/User')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { signUpErrors } = require('../utils/errors')

exports.signup = async (req, res, next) => {
  const { pseudo, email, password } = req.body

  try {
    const user = await UserModel.create({ pseudo, email, password })
    res.status(201).json({ user: user._id })
  } catch (err) {
    const errors = signUpErrors(err)
    res.status(200).send({ errors })
  }
}

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' })
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' })
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, 'SECRET_WORD_TOKEN', {
              expiresIn: '24h',
            }),
          })
        })
        .catch((error) => res.status(500).json({ error }))
    })
    .catch((error) => res.status(500).json({ error }))
}
