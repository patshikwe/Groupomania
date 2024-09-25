// Formulaire de connexion - logique

import { React, useState } from 'react'
import axios from 'axios'
import eye from '../../assets/logo/eye.svg'
import eyeSlash from '../../assets/logo/eye-slash.svg'

function Login() {
  // useState pour stocker les données
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIserror] = useState('')

  // Variable avec la valeur positive
  let isPwd = true

  /** Fonction pour Afficher ou cacher le mot de passe */
  const hidePassword = () => {
    const password = document.getElementById('password')
    const image = document.getElementById('pwd')
    password.type = password.type === 'password' ? 'text' : 'password'
    image.alt =
      image.alt === 'Masquer le mot de passe'
        ? 'Afficher le mot de passe'
        : 'Masquer le mot de passe'

    if (isPwd) {
      image.src = `${eye}`
      isPwd = false
    } else {
      image.src = `${eyeSlash}`
      isPwd = true
    }
  }

  /** Gestionnaire de connexion */
  const handleLogin = (e) => {
    e.preventDefault()

    // Récupération des éléments HTML
    const emailError = document.querySelector('.email.error')
    const passwordError = document.querySelector('.password.error')

    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}api/auth/login`,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        localStorage.setItem('token', res.data.token)

        if (res.data.errorEmail || res.data.errorPassword) {
          if (res.data.errorEmail) {
            emailError.innerHTML = res.data.errorEmail
          }
          if (res.data.errorPassword) {
            passwordError.innerHTML = res.data.errorPassword
          }
        } else if (res.data.error) {
          alert(res.data.error)
        } else {
          window.location = `/home?userId=${res.data.userId}`
        }
      })
      .catch((err) => console.log(setIserror(err)))

    // Vider les inputs
    setEmail('')
    setPassword('')
  }
  return (
    <>
      <h1>Se connecter</h1>
      <form action="" onSubmit={handleLogin} id="login-form">
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
        <input type="submit" value="Se connecter" />
      </form>
      {isError ? (<p>Problème de connexion</p>) : ("")}
    </>
  )
}

export default Login
