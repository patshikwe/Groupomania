// Formulaire de connexion - logique

import { React, useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    const emailError = document.querySelector('.email.error')
    const passwordError = document.querySelector('.password.error')

    axios({
      method: 'post',
      url: 'http://localhost:5000/api/auth/login',
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res)
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
      .catch((err) => {
        console.log(err)
      })

    // Vider les inputs
    setEmail('')
    setPassword('')
  }
  return (
    <>
      <h1>Se connecter</h1>
      <form action="" onSubmit={handleLogin} id="sign-up-form">
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
        <input type="submit" value="Se connecter" />
      </form>
    </>
  )
}

export default Login
