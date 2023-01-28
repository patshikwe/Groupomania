//=== Fichier logique métier pour Post

// Importation
const Post = require('../models/Post')
const fs = require('fs')

// Création post *************************
exports.createPost = (req, res, next) => {
  const postObject = req.body

  if (req.file === null || req.file === undefined) {
    const post = new Post({
      ...postObject,
    })

    post
      .save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
      .catch((error) => res.status(400).json({ error }))
  } else {
    const post = new Post({
      ...postObject,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${
        req.file.filename
      }`,
    })

    post
      .save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
      .catch((error) => res.status(400).json({ error }))
  }
}

// Récupérer toutes les publications (posts) *****************
exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then((posts) => res.status(200).json(posts.reverse()))
    .catch((error) => res.status(400).json({ error }))
}

// Modifier post ***********************
exports.modifyPost = (req, res, next) => {
  const postObject = req.file
    ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body }
  Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch((error) => res.status(400).json({ error }))
}

// Supprimer post ***********************
exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      const filename = post.imageUrl.split('/images/')[1]
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
          .catch((error) => res.status(400).json({ error }))
      })
    })
    .catch((error) => res.status(500).json({ error }))
}

// Middleware pour liké (liked) ******************************
/**
 * @param {Number} like
 * @param {string} userId
 * @param {string} postId
 * @param {object} usersLiked
 * @param $inc - incrémente un champ d'une valeur spécifiée.
 * @param $push - ajoute une valeur spécifiée à un tableau.
 * @param $pull - supprime d'un tableau existant toutes les instances d'une valeur
 * ou de valeurs qui correspondent à une condition spécifiée.
 */
exports.likes = (req, res, next) => {
  const like = req.body.like
  const userId = req.body.userId
  const postId = req.params.id

  if (like) {
    Post.findOne({ _id: postId })
      .then((post) => {
        if (post.usersLiked.includes(userId)) {
          Post.updateOne(
            { _id: postId },
            {
              $inc: { likes: -1 },
              $pull: { usersLiked: userId },
            }
          )
            .then(() => res.status(200).json({ message: "J'aime, annulé." }))
            .catch((error) => res.status(400).json({ error }))
        } else {
          Post.updateOne(
            { _id: postId },
            {
              $inc: { likes: 1 },
              $push: { usersLiked: userId },
            }
          )
            .then(() => res.status(200).json({ message: "J'aime!" }))
            .catch((error) => res.status(400).json({ error }))
        }
      })
      .catch((error) => res.status(500).json({ error }))
  }
}
