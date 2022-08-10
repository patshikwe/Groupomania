//=== Formulaire d'inscription - logique

import { React, useState } from 'react'
import axios from 'axios'

const SignUp = () => {
  // useState pour stocker les données
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [controlPassword, setControlPassword] = useState('')

  // Récupération des éléments HTML
  const terms = document.getElementById('terms')
  const passwordConfirmError = document.querySelector('.password-confirm.error')
  const termsError = document.querySelector('.terms.error')
  const passwordError = document.querySelector('.password.error')

  const handleRegister = async (e) => {
    e.preventDefault()

    // Vider les inputs textes et infos erreurs
    setEmail('')
    setPassword('')
    setControlPassword('')
    passwordConfirmError.innerHTML = ''
    termsError.innerHTML = ''

    // Validation du formulaire et envoi ****
    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword)
        passwordConfirmError.innerHTML =
          'Les mots de passe ne correspondent pas'

      if (!terms.checked)
        termsError.innerHTML = 'Veuillez valider les conditions générales'
    } else {
      await axios({
        method: 'post',
        url: 'http://localhost:5000/api/auth/register',
        data: {
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res)
          if (res.data.err) {
            alert(res.data.err.message)
          } else if (res.data.errors) {
            passwordError.innerHTML = res.data.errors
          } else if (res.data.error) {
            alert('Le serveur a rencontré un problème inattendu')
          } else {
            window.location = '/login'
          }
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <>
      <h1>S'inscrire</h1>
      <form action="" onSubmit={handleRegister} id="sign-up-form">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="email error"></div>
        <br />
        <label htmlFor="password">Mot de passe</label>
        <br />
        <input
          type="text"
          name="password"
          id="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="password error"></div>
        <br />
        <label htmlFor="password-conf">Confirmer mot de passe</label>
        <br />
        <input
          type="password"
          name="password"
          id="password-conf"
          required
          onChange={(e) => setControlPassword(e.target.value)}
          value={controlPassword}
        />
        <div className="password-confirm error"></div>
        <br />
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          J'accepte les{' '}
          <a href="/legalNotice" target="_blank" rel="noopener noreferrer">
            conditions générales
          </a>
        </label>
        <div className="terms error"></div>
        <br />
        <input type="submit" value="Valider inscription" />
      </form>
    </>
  )
}

export default SignUp
