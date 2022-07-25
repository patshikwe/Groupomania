import Login from '../../pages/Connect/Login'
import { SurveyContainer } from '../../utils/style/StyleAdd'
import { DivForm } from '../../utils/style/StyleAdd'
import Header from '../Header'

const index = () => {
  return (
    <SurveyContainer>
      <Header></Header>
      <DivForm>
        <Login></Login>
      </DivForm>
    </SurveyContainer>
  )
}

export default index
