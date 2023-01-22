// Page pour se connecter

import Login from '../../pages/Auth/Login'
import { SurveyContainer } from '../../utils/style/StyleAdd'
import { SectionForm } from '../../utils/style/StyleAdd'
import Header from '../Header/HeaderNav'

const index = () => {
  return (
    <SurveyContainer>
      <Header />
      <SectionForm>
        <Login />
      </SectionForm>
    </SurveyContainer>
  )
}

export default index
