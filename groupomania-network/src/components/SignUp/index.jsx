import SignUp from '../../pages/Auth/SignUp'
import { SurveyContainer } from '../../utils/style/StyleAdd'
import { SectionForm } from '../../utils/style/StyleAdd'
import Header from '../Header/HeaderNav'

const index = () => {
  return (
    <SurveyContainer>
      <Header />
      <SectionForm>
        <SignUp />
      </SectionForm>
    </SurveyContainer>
  )
}

export default index
