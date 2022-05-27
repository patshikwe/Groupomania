// === Fichier modèle publication (post)

// Importation module mongoose
const mongoose = require('mongoose');

const ModelsPost = mongoose.Schema({
  userId:{type: String, required: true},
  title:{type: String, required: true },
  description:{type: String, required: true },
  imageUrl:{type: String, required: false },
  likes:{type: Number, default:0},
  dislikes:{type: Number, default:0},
  usersLiked:{type:[String]},
  usersDisliked:{type:[String]},
});

module.exports = mongoose.model('Post', ModelsPost);