//=== Formulaire d'inscription - logique

import { React, useState } from 'react'
import axios from 'axios'
import eye from '../../assets/logo/eye.svg'
import eyeSlash from '../../assets/logo/eye-slash.svg'

function SignUp() {
  // useState pour stocker les données
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [controlPassword, setControlPassword] = useState('')

  // Récupération des éléments HTML
  const terms = document.getElementById('terms')
  const passwordConfirmError = document.querySelector('.password-confirm.error')
  const termsError = document.querySelector('.terms.error')
  const passwordError = document.querySelector('.password.error')

  // Variables avec la valeur positive
  let isPwd = false
  let isPwdConf = false

  /** Fonction pour Afficher ou cacher le mot de passe */
  const hidePassword = () => {
    const password = document.getElementById('password')
    const image = document.getElementById('pwd')
    password.type = password.type === 'text' ? 'password' : 'text'
    image.alt =
      image.alt === 'Afficher le mot de passe'
        ? 'Masquer le mot de passe'
        : 'Afficher le mot de passe'

    isPwd = !isPwd

    isPwd ? (image.src = `${eye}`) : (image.src = `${eyeSlash}`)
  }

  /** Fonction pour Afficher ou Cacher le mot de passe de confirmation */
  const hidePasswordConfirm = () => {
    const passwordConfirm = document.getElementById('password-conf')
    const image = document.getElementById('pwd-confirm')
    passwordConfirm.type = passwordConfirm.type === 'text' ? 'password' : 'text'
    image.alt =
      image.alt === 'Afficher le mot de passe'
        ? 'Masquer le mot de passe'
        : 'Afficher le mot de passe'

    isPwdConf = !isPwdConf

    isPwdConf ? (image.src = `${eye}`) : (image.src = `${eyeSlash}`)
  }

  /** Gestionnaire de formulaire */
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
        url: `${process.env.REACT_APP_API_URL}api/auth/register`,
        data: {
          email,
          password,
        },
      })
        .then((res) => {
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
      <form onSubmit={handleRegister} id="sign-up-form">
        {/* Bloc Email */}
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
        {/* Bloc Mot de passe */}
        <label htmlFor="password">Mot de passe</label>
        <br />
        <div className="div-input-password">
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <img
            className="eye"
            id="pwd"
            onClick={hidePassword}
            src={eyeSlash}
            alt="Masquer le mot de passe"
          />
        </div>
        <div className="password error"></div>
        <br />
        {/* Bloc Confirmer mot de passe */}
        <label htmlFor="password-conf">Confirmer mot de passe</label>
        <br />
        <div className="div-input-password">
          <input
            type="password"
            name="password"
            id="password-conf"
            required
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
          />
          <img
            className="eye"
            id="pwd-confirm"
            src={eyeSlash}
            alt="Masquer le mot de passe"
            onClick={hidePasswordConfirm}
          />
        </div>
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
