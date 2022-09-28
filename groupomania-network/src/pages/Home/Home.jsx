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
  @keyframes displayUser {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.15;
    }
    50% {
      opacity: 0.25;
    }
    75% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  span:last-child {
    color: ${colors.primary};
    animation: displayUser 3.5s;
  }
`
const WritePost = styled.div`
  display: grid;
  border: 1px solid ${colors.primary};
  box-shadow: #23272b3d 2px 3px 3px;
  border-radius: 10px;
  width: 80%;
  height: 360px;
  position: relative;
  left: 10%;
  margin-top: 10px;

  .user {
    width: 2em;
    border-radius: 10px;
    position: relative;
    top: 21%;
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
    font-weight: bold;
    @media (max-width: 455px) {
      height: 3rem;
    }
  }

  // Prévisualisation lors de saisie
  .card-container {
    width: 75%;
    height: auto;
    position: relative;
    left: 10%;
    top: 1px;
    border: 3px solid ${colors.secondary};
    box-shadow: #23272b3d 2px 3px 3px;
    border-radius: 8px;
  }

  // carte contenant image, email et date
  .cardInfoUser {
    display: flex;
    justify-content: space-between;
  }

  // carte image
  .card-left {
    width: 2em;
    img {
      border-radius: 10px;
    }
  }

  // info utilisateur(email)
  .info-user {
    h3 {
      text-shadow: ${colors.secondary} 2px 3px 3px;
      font-weight: bold;
    }
    @media (max-width: 455px) {
      width: 4em;
      h3 {
        font-size: 0.7em;
      }
    }
  }

  // affichage date
  .date {
    width: 8em;
    @media (max-width: 498px) {
      width: 7em;
      span {
        font-size: 0.7em;
      }
    }
  }

  // contenu du message
  .message-content {
    border-image: linear-gradient(
        ${colors.primary},
        ${colors.secondary},
        ${colors.tertieryDark}
      )
      5;
  }

  // logo image pour la selection d'image
  .containerImage img {
    width: 2em;
    position: absolute;
    left: 25%;
  }

  // Tous les inputs
  .background {
    text-align: center;
    border: 1px solid ${colors.primary};
    border-radius: 20px;
    box-shadow: #23272b3d 2px 3px 3px;
    background-color: white;
    font-weight: bold;
  }

  // input file enfant div .containerImage
  .inputImage {
    opacity: 0;
    position: relative;
    width: 2.5em;
    height: 29px;
    left: 25%;
  }

  // input(envoyé)
  .send {
    position: relative;
    top: 5%;
    left: 65%;
    width: 20%;
    height: 25px;
    cursor: pointer;
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

  // btn pour annuler les messages
  .top {
    width: 100px;
    height: 25px;
    position: relative;
    left: 65%;
    cursor: pointer;
    :hover {
      background-color: ${colors.primary};
      color: white;
      border: 1px solid ${colors.tertieryDark};
    }
    @media (max-width: 455px) {
      left: 40%;
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

  // condition pour sécuriser la session
  if (token && Id !== null) {
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
              <Postform user={email} />
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
