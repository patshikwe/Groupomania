// Se déconnecter

import powerOff from '../../assets/logo/power-off.svg'
import styled from 'styled-components'

const DivPowerOff = styled.div`
  .powerOff {
    width: 2em;
    border-radius: 10px;
    cursor: pointer;
    @media (max-width: 455px) {
      width: 1em;
    }
  }
`

const Logout = () => {
  const removeToken = () => {
    localStorage.removeItem('token')
  }
  return (
    <DivPowerOff onClick={removeToken}>
      <img src={powerOff} className="powerOff" alt="logo de déconnexion" />
    </DivPowerOff>
  )
}

export default Logout
