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
      // bottom: 9px;
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
    @media (max-width: 455px) {
      // height: 6rem;
    }
  }

  // Prévisualisation lors de saisie
  .card-container {
    width: 80%;
    height: auto;
    position: relative;
    left: 10%;
    top: 1px;
    border: 3px solid ${colors.secondary};
    border-image: linear-gradient(
        ${colors.primary},
        #4ac4ec,
        ${colors.secondary},
        ${colors.tertieryDark}
      )
      5;
    box-shadow: #23272b3d 2px 3px 3px;
    border-radius: 8px;
  }

  // carte contenant image, email et date
  .cardInfoUser {
    display: flex;
    justify-content: space-between;
  }

  // carte image
  .card-left {
    width: 2em;
    img {
      border-radius: 10px;
    }
  }

  // info utilisateur(email)
  .info-user {
    h2 {
      text-shadow: ${colors.secondary} 2px 3px 3px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    @media (max-width: 500px) {
      width: 4em;
      h2 {
        font-size: 0.8em;
      }
    }
  }

  // affichage date
  .date {
    padding: 0 0 0 3px;
    width: 8em;
    @media (max-width: 580px) {
      width: 7em;
      span {
        font-size: 0.7em;
      }
    }
  }

  // contenu du message
  .message-content {
    display: flex;
    flex-direction: column;
    border: #744610 3px solid;
    border-image: linear-gradient(
        ${colors.primary},
        #4ac4ec,
        ${colors.secondary},
        ${colors.tertieryDark}
      )
      5;
    div {
      width: 100%;
      display: flex;
    }

    // Div conteneur du message
    .divMessage {
      overflow: auto;
    }

    // Div conteneur image et image
    .divPicture {
      height: auto;
      img {
        margin: auto;
        width: 255px;
        height: auto;
        @media (max-width: 455px) {
          width: 98%;
        }
      }
    }
  }

  // classe générale
  .background {
    text-align: center;
    border-radius: 20px;
    box-shadow: #23272b3d 2px 3px 3px;
    background-color: ${colors.tertieryDark};
    font-weight: bold;
    color: white;
  }

  // div contenant input file
  .divInputFile {
    margin-bottom: 7px;
  }

  // input file enfant div .divInputFile
  .inputImage {
    position: relative;
    height: 26px;
    left: 10%;
    width: 186px;
    border: 1px solid ${colors.primary};
    box-shadow: #23272b3d 2px 3px 3px;
    cursor: pointer;
    font-weight: bold;
    @media (max-width: 699px) {
      width: 160px;
    }
    @media (max-width: 314px) {
      width: 141px;
    }
  }

  /* style groupé: input(envoyé), btn(annuler les messages) 
  et inputImage 
  */

  .send,
  .top,
  .inputImage {
    :hover {
      background-color: ${colors.primary};
      color: white;
      border: 1px solid ${colors.tertieryDark};
    }
    letter-spacing: 1px;
  }

  // btn pour annuler les messages
  .top {
    width: 100px;
    height: 25px;
    position: relative;
    left: 10%;
    cursor: pointer;
    @media (max-width: 455px) {
      width: 30%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  // input(envoyé)
  .send {
    position: relative;
    top: 5%;
    left: 36%;
    width: 20%;
    height: 25px;
    cursor: pointer;
    @media (max-width: 455px) {
      width: 30%;
      left: 30%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
