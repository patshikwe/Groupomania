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
import Postform from './PostForm'
import axios from 'axios'

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 5px;
  width: auto;
  heigth: auto;
`

const ContainerPosts = styled.div`
  border: 1px solid ${colors.primary};
  border-radius: 10px;
  box-shadow: #23272b3d 2px 3px 3px;
  position: relative;
  left: 6%;
  width: 90%;
  height: auto;
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
    font-weight: bold;
    letter-spacing: 0.3em;
    @media (max-width: 455px) {
      font-size: 0.8em;
      letter-spacing: 0.1em;
    }
  }
  span:last-child {
    color: ${colors.primary};
  }
`
const WritePost = styled.div`
  display: grid;
  height: 130px;
  border: 1px solid ${colors.primary};
  box-shadow: #23272b3d 2px 3px 3px;
  border-radius: 10px;
  width: 80%;
  height: 220px;
  position: relative;
  left: 10%;
  margin-top: 10px;

  .user {
    width: 2em;
    border-radius: 10px;
    position: relative;
    top: 30%;
    left: 45%;
    @media (max-width: 455px) {
      left: 38%;
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }

  // input(saisie texte)
  textarea {
    border: 1px solid ${colors.tertieryDark};
    border-radius: 8px;
    box-shadow: #23272b3d 2px 3px 3px;
    width: 75%;
    height: 4rem;
    position: relative;
    left: 10%;
    text-align: center;
    font-weight: bold;
    @media (max-width: 455px) {
      height: 3rem;
    }
  }

  // input(envoyé)
  input {
    border: 1px solid ${colors.primary};
    border-radius: 20px;
    box-shadow: #23272b3d 2px 3px 3px;
    background-color: white;
    position: relative;
    top: 20%;
    left: 65%;
    width: 20%;
    height: 25px;
    cursor: pointer;
    font-weight: bold;
    :hover {
      background-color: ${colors.primary};
      color: white;
      border: 1px solid ${colors.tertieryDark};
    }
    @media (max-width: 455px) {
      width: 35%;
      left: 50%;
    }
  }
`

const Home = () => {
  const [userId, setuserId] = useState(null)
  const [email, setEmail] = useState(null)
  let params = new URLSearchParams(window.location.search)
  let Id = params.get('userId')
  console.log(Id)

  axios
    .get(`http://localhost:5000/api/auth/${Id}`)
    .then((res) => {
      console.log(res.data)
      setuserId(res.data._id)
      setEmail(res.data.email)
    })
    .catch((err) => {
      console.log(err)
    })

  console.log(userId)

  const token = window.localStorage.getItem('token')
  if (token) {
    return (
      <Uidcontext.Provider value={userId}>
        <DivContainer>
          <Header>
            <DivLogo>
              <img src={logo} className="logo" alt="logo" />
            </DivLogo>
            <DivFaIcon>
              <DivUser>
                <img
                  src={user}
                  className="user"
                  alt="logo utilisateur"
                  title="Profil"
                />
                <span>Bienvenue</span>
                <span>{email}</span>
              </DivUser>
              <Logout />
            </DivFaIcon>
          </Header>
          <ContainerPosts>
            <WritePost>
              <img src={user} className="user" alt="logo utilisateur" />
              <Postform />
            </WritePost>
            <div>post</div>
          </ContainerPosts>
        </DivContainer>
      </Uidcontext.Provider>
    )
  } else {
    window.location = '/login'
  }
}

export default Home
