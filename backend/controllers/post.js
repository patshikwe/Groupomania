//=== Fichier logique métier

const Post = require("../models/Post");
const fs = require('fs');
const { db } = require("../models/Post");



// Récupérer toutes les sauces *****************
exports.getAllPosts = (req, res, next) => {
    post.find()
      .then((posts) => res.status(200).json(posts))
      .catch((error) => res.status(400).json({ error }));
};

// Récupérer une sauce *****************
exports.getOnePost = (req, res, next) => {
    post.findOne({ _id: req.params.id })
      .then((post) => res.status(200).json(post))
      .catch((error) => res.status(404).json({ error }));
  };

  