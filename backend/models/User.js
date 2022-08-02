// == Fichier de modèle de compte utilisateur

// Importation modules
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const { isEmail } = require('validator')

/* la propriété unique de uniqueValidator empêchent 
   plusieurs enregistrements  d'un même compte utilisateur.
  La vérification des emails se fait avec isEMail 
*/

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: [isEmail],
    },
    password: { type: String, required: true, maxLength: 1024, minlength: 6 },
    pseudo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 3,
      maxLength: 50,
    },
  },
  { timestamps: true }
)

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
