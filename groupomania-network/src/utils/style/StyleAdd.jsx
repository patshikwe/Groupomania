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
  box-shadow: 1px 2px 13px 3px #817d7d;
  margin-bottom: 1rem;
  border: 3px double ${colors.tertieryDark};
  border-radius: 10px;
  background-color: ${colors.tertieryDark};
  color: white;
  width: 90%;
  p {
    padding: 0 2px 0 2px;
  }
  p:nth-child(1) {
    color: ${colors.tertieryDark};
    border: 3px solid ${colors.secondary};
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  p:nth-child(2) {
    text-shadow: 1px 4px 7px #c77c6c;
    border: 3px solid white;
  }
  span:nth-child(1) {
    color: ${colors.tertieryDark};
    font-weight: bold;
    letter-spacing: 0.1rem;
    text-shadow: 0px 1px black;
  }
`
