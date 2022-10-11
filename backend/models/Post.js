// === Fichier modèle publication (post)

// Importation module mongoose
const mongoose = require('mongoose')

const ModelsPost = mongoose.Schema(
  {
    userId: { type: String, required: true },
    message: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    imageUrl: { type: String, required: false },
    likes: { type: Number, default: 0 },
    usersLiked: { type: [String] },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', ModelsPost)
