// Style pour les éléments de PostForm
import colors from './colors'
import styled from 'styled-components'

export const WritePost = styled.div`
  display: flex;
  flex-direction: column;

  // div containeur du h1
  .divH1 {
    width: 86%;
    height: 120px;
    position: relative;
    @media (max-width: 1024px) {
      height: 100px;
    }
  }

  // Animation du span enfant h1
  @keyframes displayUser {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.15;
    }
    50% {
      opacity: 0.25;
    }
    75% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  h1 span {
    color: ${colors.primary};
    animation: displayUser 5s;
  }

  h1 {
    padding-top: 10px;
    text-align: center;
    letter-spacing: 0.1em;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 580px) {
      font-size: 1em;
    }
  }

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
      top: -28px;
    }
  }

  // input(saisie texte)
  textarea {
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
    width: 75%;
    height: 10rem;
    display: block;
    position: relative;
    left: 10%;
    font-weight: bold;
    @media (max-width: 455px) {
      height: 6rem;
    }
  }

  // Prévisualisation lors de saisie
  .card-container {
    width: 75%;
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
    h3 {
      text-shadow: ${colors.secondary} 2px 3px 3px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    @media (max-width: 500px) {
      width: 4em;
      h3 {
        font-size: 0.8em;
      }
    }
  }

  // affichage date
  .date {
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

    .divMessage {
      overflow: auto;
    }

    .divPicture {
      height: auto;
      img {
        width: 100%;
        height: 100%;
        @media (max-width: 455px) {
          width: 98%;
        }
      }
    }
  }

  // classe générale
  .background {
    text-align: center;
    // border: 1px solid ${colors.primary};
    border-radius: 20px;
    box-shadow: #23272b3d 2px 3px 3px;
    background-color: ${colors.tertieryDark};
    font-weight: bold;
    color: white;
  }

  // input file enfant div .containerImage
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
  }

  // btn pour annuler les messages
  .top {
    width: 100px;
    height: 20px;
    position: relative;
    left: 10%;
    cursor: pointer;
    @media (max-width: 455px) {
      width: 24%;
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
    height: 20px;
    cursor: pointer;
    @media (max-width: 455px) {
      width: 24%;
      left: 30%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
