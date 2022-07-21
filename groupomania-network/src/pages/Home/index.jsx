// Page d'accueil(Home page)

import React from 'react'
import logo from '../../assets/logo/icon-left-font-monochrome-black.svg'
import user from '../../assets/logo/circle-user.svg'
import powerOff from '../../assets/logo/power-off.svg'
import styled from 'styled-components'
import colors from '../../styles/pages/colors'

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 5px;
`
const Header = styled.header`
  display: grid;
  grid-template-columns: 50% 50%;
  border: 1px solid ${colors.primary};
  border-radius: 10px;
  box-shadow: #23272b3d 2px 3px 3px;
`
const DivLogo = styled.div`
  .logo {
    width: 13em;
  }
`

const DivFaIcon = styled.div`
  display: flex;
  justify-content: space-around;
  .user {
    width: 2em;
    border-radius: 10px;
    margin-left: 3em;
    cursor: pointer;
  }
  .powerOff {
    width: 2em;
    border-radius: 10px;
    cursor: pointer;
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
          <img src={powerOff} className="powerOff" alt="logo de déconnexion" />
        </DivFaIcon>
      </Header>
      <div>Ici Acueil Home</div>
    </DivContainer>
  )
}

export default index
