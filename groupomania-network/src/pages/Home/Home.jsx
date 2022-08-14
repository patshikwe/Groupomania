// Page d'accueil(Home page)

import React from 'react'
import logo from '../../assets/logo/icon-left-font-monochrome-black.svg'
import user from '../../assets/logo/circle-user.svg'
import Logout from '../Auth/Logout'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Header } from '../../components/Header/HeaderNav'
import { DivLogo } from '../../components/Header/HeaderNav'

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
  .user:hover,
  .powerOff:hover {
    box-shadow: ${colors.primary} 1px 1px 7px 1px;
  }
`
const DivUser = styled.div`
  display: grid;
  .user {
    width: 2em;
    border-radius: 10px;
    cursor: pointer;
    @media (max-width: 455px) {
      width: 1em;
    }
  }
  span {
    color: ${colors.primary};
    font-weight: bold;
    @media (max-width: 455px) {
      font-size: 0.8em;
    }
  }
`

const Home = () => {
  const token = window.localStorage.getItem('token')
  if (token) {
    return (
      <DivContainer>
        <Header>
          <DivLogo>
            <img src={logo} className="logo" alt="logo" />
          </DivLogo>
          <DivFaIcon>
            <DivUser>
              <img src={user} className="user" alt="logo utilisateur" />
              <span>Bienvenue: nom@mail.com</span>
            </DivUser>
            <Logout />
          </DivFaIcon>
        </Header>
        <div>Ici Acueil Home</div>
      </DivContainer>
    )
  } else {
    window.location = '/login'
  }
}

export default Home
