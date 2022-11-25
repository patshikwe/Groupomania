//=== Fichier d'authentification

// Importation
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

module.exports = (req, res, next) => {
  console.log('userId', req.body.userId)
  try {
    const token = req.headers.authorization.split(' ')[1]
    console.log('token ===>', token)

    const decodedToken = jwt.verify(token, `${process.env.SECRET_WORD_TOKEN}`)
    console.log('decodedToken ===>', decodedToken)

    const userId = decodedToken.userId
    console.log('===>', userId)

    req.auth = { userId }
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID'
    } else {
      console.log('===> envoie next')
      console.log('3 ==>', req.body.userId)
      next()
    }
  } catch {
    console.log('===> code 401')
    res.status(401).json({
      error: new Error('Invalid request!'),
    })
  }
}
