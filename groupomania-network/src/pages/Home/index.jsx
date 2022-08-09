// Page d'accueil(Home page)

import React from 'react'
import logo from '../../assets/logo/icon-left-font-monochrome-black.svg'
import user from '../../assets/logo/circle-user.svg'
import Logout from '../Auth/Logout'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Header } from '../../components/Header'
import { DivLogo } from '../../components/Header'

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
  .user {
    width: 2em;
    border-radius: 10px;
    margin-left: 3em;
    cursor: pointer;
    @media (max-width: 455px) {
      width: 1em;
    }
  }

  .user:hover,
  .powerOff:hover {
    box-shadow: ${colors.primary} 1px 1px 7px 1px;
  }
`

const index = () => {
  return (
    <DivContainer>
      <Header>
        <DivLogo>
          <img src={logo} className="logo" alt="logo" />
        </DivLogo>
        <DivFaIcon>
          <img src={user} className="user" alt="logo utilisateur" />
          <Logout />
        </DivFaIcon>
      </Header>
      <div>Ici Acueil Home</div>
    </DivContainer>
  )
}

export default index
