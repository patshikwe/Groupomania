// Supprimer un élément
import trash from '../../assets/logo/trash-can.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import axios from 'axios'
import Modal from '../../utils/Modal'
import { useState } from 'react'

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    border: 2px solid ${colors.tertieryDark};
    background-color: ${colors.tertieryDark};
    box-shadow: 1px 1px 4px 0px #2e2626;
    color: white;
    border-radius: 16px;
    width: 3.8rem;
    margin: 5px 0 5px 0;
    cursor: pointer;
    @media (max-width: 300px) {
      width: 3rem;
      font-size: 0.7em;
    }
  }

  button: hover {
    font-weight: bold;
    border: 5px double ${colors.secondary};
    box-shadow: 1px 1px 4px 2px ${colors.tertieryDark};
  }
`

const Delete = styled.div`
  width: 2rem;
  img:hover {
    cursor: pointer;
    border-radius: 12px;
    transform: translateY(2px);
  }
`
// Div occultant = voile
const Sail = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #0000009e;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 1;
`

function Buttons({ userId, Id, IdPost, postMessage, onUpdateDelete }) {
  const token = window.localStorage.getItem('token')
  const [confirmationModal, setConfirmationModal] = useState(false)
  const admin = String('63829d29b0603dc667d0c3ad')

  // Fonction pour supprimer un post
  const handleDelete = async () => {
    await axios({
      method: 'delete',
      url: `${process.env.REACT_APP_API_URL}api/post/${IdPost}`,
      data: userId,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res) {
          console.log(res)
          onUpdateDelete(IdPost)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // Fonction pour le contenu de la modale
  const handleConfirmationModal = () => {
    setConfirmationModal({
      title: "Suppression d'un post",
      message: 'Vous êtes au point de suppprimer ce post:',
      postMessage, //contenu du message posté
    })
  }

  return (
    <ContainerButtons>
      {userId === Id || userId === admin ? (
        <Delete onClick={handleConfirmationModal}>
          <img src={trash} alt="Supprimer" title="Supprimer" />
        </Delete>
      ) : null}
      {userId === Id || userId === admin ? <button>Modifier</button> : null}
      {/* <button>Répondre</button> */}
      {confirmationModal ? (
        <>
          <Modal
            title={confirmationModal.title} // accès contenu setConfirmationModal
            message={confirmationModal.message} // accès contenu setConfirmationModal
            postMessage={confirmationModal.postMessage}
            toCancel={() => setConfirmationModal(false)} // fonction pour annuler
            onConfirmDelete={() => handleDelete()} // fonction pour supprimer
          />
          <Sail />
        </>
      ) : null}
    </ContainerButtons>
  )
}

export default Buttons
