// Style pour les éléments de PostForm
import colors from './colors'
import styled from 'styled-components'

export const WritePost = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;

  form {
    display: block;
    width: 100%;
    height: auto;
    @media (max-width: 855px) {
      position: relative;
    }
    @media (max-width: 455px) {
      margin-top: 0;
      position: relative;
    }
  }

  // input(saisie texte)
  textarea {
    resize: none;
    overflow: auto;
    border: 12px double ${colors.tertieryDark};
    border-image: linear-gradient(
        ${colors.primary},
        ${colors.secondary},
        ${colors.tertieryDark},
        ${colors.secondary}
      )
      5;
    padding: 5px;
    box-shadow: #23272b3d 2px 3px 3px;
    width: 80%;
    height: 10rem;
    display: block;
    position: relative;
    left: 10%;
    font-weight: bold;
  }
`
