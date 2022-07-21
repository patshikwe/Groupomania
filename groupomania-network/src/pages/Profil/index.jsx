
import React from 'react'
import logo from '../../assets/logo/icon-left-font-monochrome-black.svg'
import Log from '../../components/Log'
import '../../styles/pages/Profil.css'
import styled from 'styled-components'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 5px;
`
const Header = styled.header`
    flex-direction: row;
`

const index = () => {
    

    return (
        <SurveyContainer>   
            <Header>
                <img src={logo} className="logo" alt="logo" />
            </Header>
            <div className=''>
                <Log login={false} signup={true}/>
            </div>
        </SurveyContainer>
    )
}

export default index