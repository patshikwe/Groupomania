import Login from '../../pages/Auth/Login'
import { SurveyContainer } from '../../utils/style/StyleAdd'
import { SectionForm } from '../../utils/style/StyleAdd'
import Header from '../Header'

const index = () => {
  return (
    <SurveyContainer>
      <Header></Header>
      <SectionForm>
        <Login></Login>
      </SectionForm>
    </SurveyContainer>
  )
}

export default index
