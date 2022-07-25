import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo/icon-left-font-monochrome-black.svg'
import colors from '../../utils/style/colors'

const Header = styled.header`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  border: 1px solid ${colors.primary};
  border-radius: 10px;
  box-shadow: #23272b3d 2px 3px 3px;
  margin-bottom: 10px;
  width: auto;
`
const DivLogo = styled.div`
  .logo {
    width: 13em;
    @media (max-width: 455px) {
      width: 8em;
    }
  }
`
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 350px) {
    flex-direction: column;
  }
`
const StyledLink = styled(Link)`
  color: ${colors.tertieryDark};
  :hover {
    background: white;
    color: ${colors.primary};
    box-shadow: ${colors.tertieryDark} 1px 1px 2px;
    border-radius: 2px;
    transform: translateX(3px);
  }
`

const index = () => {
  return (
    <Header>
      <DivLogo>
        <img src={logo} className="logo" alt="logo" />
      </DivLogo>
      <NavContainer>
        <StyledLink to="/">S'inscrire</StyledLink>
        <StyledLink to="/login">Se connecter</StyledLink>
      </NavContainer>
    </Header>
  )
}

export default index
