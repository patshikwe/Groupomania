import SignUp from '../../pages/Connect/SignUp'
import { SurveyContainer } from '../../utils/style/StyleAdd'
import { DivForm } from '../../utils/style/StyleAdd'
import Header from '../Header'

const index = () => {
  return (
    <SurveyContainer>
      <Header></Header>
      <DivForm>
        <SignUp></SignUp>
      </DivForm>
    </SurveyContainer>
  )
}

export default index
