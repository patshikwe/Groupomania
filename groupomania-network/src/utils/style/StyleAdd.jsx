import styled from 'styled-components'
import colors from './colors'

export const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 5px;
  width: auto;
`
export const DivForm = styled.div`
  display: grid;
  border: none;
  background: var(--secondary-lessClear);
  min-width: 220px;
  width: 90%;
  text-align: center;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;

  input {
    border-radius: 5px;
  }

  input:last-child {
    width: 100px;
    cursor: pointer;
    :hover {
      color: ${colors.primary};
    }
  }
`
