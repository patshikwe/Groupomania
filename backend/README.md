## Backend

### Express / Mongoose / MongoDB

---

### Mission

Détails du projet pour le back-end et le front-end

```
1. Page de connexion:
   =================
Une page de connexion permettant à l’utilisateur de se connecter, ou bien  de créer un compte s’il n’en possède pas.
la connexion doit se faire à partir de deux éléments : le mail de l’employé, et un mot de passe.

* Détails de la fonctionnalité de connexion:
    ● Un utilisateur doit avoir la possibilité de se déconnecter.
    ● La session de l’utilisateur persiste pendant qu’il est connecté.
    ● Les données de connexion doivent être sécurisées.

2. Page d’accueil:
   ==============
La page d’accueil doit lister les posts créés par les différents utilisateurs.
On voudra que les posts soient listés de façon antéchronologique (du plus
récent au plus ancien).

3. Création d’un post:
   ==================
● Un utilisateur doit pouvoir créer un post.
● Un post doit pouvoir contenir du texte et une image.
● Un utilisateur doit aussi pouvoir modifier et supprimer ses posts.

4. Système de like:
   ===============
Un utilisateur doit pouvoir liker un post, une seule fois pour chaque post.

5. Rôle administrateur:
   ===================
Dans le but de pouvoir faire de la modération si nécessaire, il faudra créer
un utilisateur “administrateur” ; celui-ci aura les droits de modification /
suppression sur tous les posts du réseau social.

```

---

### Prérequis Backend

Vous aurez besoin d'avoir Node et `npm` installés localement sur votre machine.

## Installation

Clonez ce dépôt. Depuis le dossier "backend" du projet, exécutez `npm install` pour installer toutes les dépendances.  
Vous pouvez ensuite exécuter le serveur avec la commande `node server`.

---

### Configuration

- Mettez vos informations de cluster dans `app.js` à l'intérieur de `mongoose.connect`
- Créez le fichier `.env` dans la racine
  - Voir le modèle env_exemple pour remplir .env
- Créer un dossier nommer images dans le backend pour stocker les images

---

## Port et Routes

**Port** : 5000

### Routes

=====

**Routes pour utilisateur** :

Enregistrement d'un utilisateur

- POST : `/api/auth/register`

Connexion

- POST : `/api/auth/login`

Récupération des données d'un utilisateur

- GET : `/api/auth/:id`

**Routes pour un post** :

Création d'un post

- POST : `/api/post`

Récupération des posts

- GET : `/api/post`

Modification d'un post

- PUT : `/api/post/:id`

Suppression d'un post

- DELETE : `/api/post/:id`

Route pour liker

- POST : `/api/post/:id/like`
