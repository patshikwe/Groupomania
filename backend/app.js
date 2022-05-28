// === Fichier Application express

// Importation module express
const express = require('express');

// Création de l'application express 
const app = express();

// Importation routes
const postRoutes = require("./routes/post");
const userRoutes = require('./routes/user');


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


app.use('/api/post', postRoutes);
app.use('/api/auth', userRoutes);


console.log('Bonjour :) => Server Ok');

/* Ce middleware extrait le corps Json venant de l'application front-end
    pour la gestion de requête POST.
*/
app.use(express.json());



module.exports = app;