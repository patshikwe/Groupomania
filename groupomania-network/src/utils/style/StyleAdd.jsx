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
export const SectionForm = styled.section`
  display: grid;
  border: none;
  background: var(--secondary-lessClear);
  min-width: 220px;
  width: 90%;
  text-align: center;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;

  h1 {
    margin-bottom: 1rem;
    text-shadow: 1px 1px 1px #ec8484;
  }

  .error {
    color: red;
  }

  input {
    border-radius: 5px;
  }

  input:last-child {
    width: 7rem;
    cursor: pointer;
    :hover {
      color: ${colors.primary};
    }
  }
`
export const Card = styled.article`
  overflow: auto;
  margin-bottom: 5px;
  border: 3px double ${colors.tertieryDark};
  border-radius: 6px;
  background-color: ${colors.tertieryDark};
  color: white;
  width: 90%;
`
