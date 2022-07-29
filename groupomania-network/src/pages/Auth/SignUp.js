//=== Formulaire d'inscription - logique

import { React, useState } from 'react'
import axios from 'axios'

const SignUp = () => {
  // useState pour stocker les données
  const [pseudo, setPseudo] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [controlPassword, setControlPassword] = useState('')

  console.log(pseudo)
  console.log(email)
  console.log(password)
  console.log(controlPassword)

  // Récupération des éléments HTML
  const terms = document.getElementById('terms')
  const pseudoError = document.querySelector('.pseudo.error')
  const emailError = document.querySelector('.email.error')
  const passwordError = document.querySelector('.password.error')
  const passwordConfirmError = document.querySelector('.password-confirm.error')
  const termsError = document.querySelector('.terms.error')

  const handleRegister = async (e) => {
    e.preventDefault()

    // Vider les inputs textes et infos erreurs
    document.querySelector('#pseudo').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#password').value = ''
    document.querySelector('#password-conf').value = ''
    passwordConfirmError.innerHTML = ''
    termsError.innerHTML = ''

    // Validation du formulaire et envoi ****
    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword)
        passwordConfirmError.innerHTML =
          'Les mots de passe ne correspondent pas'
      passwordConfirmError.style.color = 'red'

      if (!terms.checked)
        termsError.innerHTML = 'Veuillez valider les conditions générales'
      termsError.style.color = 'red'
    } else {
      await axios({
        method: 'post',
        url: 'http://localhost:5000/api/auth/register',
        data: {
          pseudo,
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res)
          if (res.data.errors) {
            pseudoError.innerHTML = res.data.errors.pseudo
            emailError.innerHTML = res.data.errors.email
            passwordError.innerHTML = res.data.errors.password
          }
          window.location = '/login'
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <>
      <h1>S'inscrire</h1>
      <form action="" onSubmit={handleRegister} id="sign-up-form">
        <label htmlFor="pseudo">Pseudo</label>
        <br />
        <input
          type="text"
          name="pseudo"
          id="pseudo"
          required
          onChange={(e) => setPseudo(e.target.value)}
          value={pseudo}
        />
        <div className="pseudo error"></div>
        <br />
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
          type="password"
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
