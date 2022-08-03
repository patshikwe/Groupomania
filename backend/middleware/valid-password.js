// Fichier pour contrôler le mot de passe

// importation
const passwordValidator = require('password-validator')
const schemaValidPassword = new passwordValidator()

// Schéma validation
schemaValidPassword
  .is()
  .min(6) // Minimum length 6
  .is()
  .max(1000) // Maximum length 1000
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(2) // Must have at least 2 digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(['Passw0rd', 'Password123']) // Blacklist these values

// middleware
module.exports = (req, res, next) => {
  if (schemaValidPassword.validate(req.body.password)) {
    next()
  } else {
    return res.status(200).json({
      errors:
        "Le mot de passe doit avoir: caractères min 6, au moins 2 chiffres, lettres majuscules et minuscules, et pas d'espace.",
    })
  }
}
