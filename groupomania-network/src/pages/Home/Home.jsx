// Page d'accueil(Home page)

import React from 'react'
import logo from '../../assets/logo/icon-left-font-monochrome-black.svg'
import user from '../../assets/logo/circle-user.svg'
import Logout from '../Auth/Logout'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Header } from '../../components/Header/HeaderNav'
import { DivLogo } from '../../components/Header/HeaderNav'
import { Uidcontext } from '../../utils/HomeContext'
import { useState } from 'react'
import axios from 'axios'

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 5px;
  width: auto;
`

const DivFaIcon = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 4px;
`
const DivUser = styled.div`
  display: grid;
  .user {
    width: 2em;
    border-radius: 10px;
    @media (max-width: 455px) {
      width: 1em;
    }
  }
  span {
    color: ${colors.primary};
    font-weight: bold;
    letter-spacing: 0.3em;
    @media (max-width: 455px) {
      font-size: 0.8em;
      letter-spacing: 0.1em;
    }
  }
`

const Home = () => {
  const [uid, setUid] = useState(null)
  const [email, setEmail] = useState(null)
  let params = new URLSearchParams(window.location.search)
  let userId = params.get('userId')
  console.log(userId)

  axios
    .get(`http://localhost:5000/api/auth/${userId}`)
    .then((res) => {
      console.log(res.data)
      console.log(res.data.email)
      setUid(res.data._id)
      setEmail(res.data.email)
    })
    .catch((err) => {
      console.log(err)
    })

  console.log(uid)

  const token = window.localStorage.getItem('token')
  if (token) {
    return (
      <Uidcontext.Provider value={uid}>
        <DivContainer>
          <Header>
            <DivLogo>
              <img src={logo} className="logo" alt="logo" />
            </DivLogo>
            <DivFaIcon>
              <DivUser>
                <img src={user} className="user" alt="logo utilisateur" />
                <span>Bienvenue {email}</span>
              </DivUser>
              <Logout />
            </DivFaIcon>
          </Header>
          <div>Ici Acueil Home</div>
        </DivContainer>
      </Uidcontext.Provider>
    )
  } else {
    window.location = '/login'
  }
}

export default Home
