//== Fichier d'inscription et d'authentification d'utilisateur

const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      console.log( req.body.email,req.body.username);

      const user = User.create({
        email: req.body.email,
        password: hash,
        username: req.body.username
      })
        .then((res) => res.status(201).json({res:user._id }))
        .catch(error => res.status(400).json({ error }));
        
        console.log("Echec ====>")
    })
    .catch(error => res.status(500).json({ error }));
};



exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              'SECRET_WORD_TOKEN',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
        console.log("Echec ===> connexion 1");
    })
    .catch(error => res.status(500).json({ error }));
    console.log("Echec ===> connexion 2");
};  