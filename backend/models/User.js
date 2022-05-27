// == Fichier de modèle de compte utilisateur


// Importation modules
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


/* la propriété unique de uniqueValidator empêchent 
   plusieurs enregistrements  d'un même compte utilisateur.
*/ 
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: false}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);