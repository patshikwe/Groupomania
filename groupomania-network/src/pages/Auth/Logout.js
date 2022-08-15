// Se déconnecter

import powerOff from '../../assets/logo/power-off.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const DivPowerOff = styled.div`
  .powerOff {
    width: 2em;
    border-radius: 10px;
    cursor: pointer;
    @media (max-width: 455px) {
      width: 1em;
    }
  }
  .powerOff:hover {
    box-shadow: ${colors.primary} 1px 1px 7px 1px;
  }
`

// Suppression du token dans localStorage
function Logout() {
  const removeToken = () => {
    localStorage.removeItem('token')
    window.location.replace('/')
  }
  return (
    <DivPowerOff onClick={removeToken}>
      <img
        src={powerOff}
        title="Déconnexion"
        className="powerOff"
        alt="logo de déconnexion"
      />
    </DivPowerOff>
  )
}

export default Logout
