// === Fichier Application express

// Importation module express
const express = require('express');

// Importation Mongoose
const mongoose = require('mongoose');

// Importation 
const path = require('path');

// Création de l'application express 
const app = express();

// Importation dotenv
const dotenv = require('dotenv');
dotenv.config();

// Importation routes
const postRoutes = require("./routes/post");
const userRoutes = require('./routes/user');


// Logique de connexion à MongoDB
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jdge6.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
// **************************************************************************************************************************************************

/* Correction des erreurs de CORS
   1er header permet d'accéder à cette API depuis n'importe quelle origine.
   2ème header permet d'ajouter les headers mentionnés aux requêtes envoyées vers cette API.
   3ème header permet d'envoyer des requêtes avec les méthodes mentionnées.  
*/
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

// *************************** # *************************************************

/* Ce middleware extrait le corps Json venant de l'application front-end
    pour la gestion de requête POST.
*/
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/post', postRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;