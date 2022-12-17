// Fichier pour la modification des posts

import { useContext, useState } from 'react'
import { Uidcontext } from '../../utils/HomeContext'
import axios from 'axios'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

// CSS pour textarea
const Textarea = styled.textarea`
  width: 100%;
  height: 145px;
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
  font-weight: bold;
`

const ModifPost = ({ message, updatePost, IdPost, isButtonSendActived }) => {
  console.log('Ici ModifPost', updatePost, IdPost)
  const postToEdit = updatePost && updatePost.postToEdit
  const [messageValue, setMessageValue] = useState()

  const userId = useContext(Uidcontext)
  const token = window.localStorage.getItem('token')

  //condition pour afficher la saisie de texte à modifier
  const modifOnePost = postToEdit === IdPost

  /**
   * @param {string} message => message posté(ceci est une prop)
   * @param {string} IdPost => id du message posté
   * @param {string} userId => id utilisateur via useContext
   * @param {object} updatePost => composé: isUpdating et postToEdit(id du message sélectionné)
   * @param {string} postToEdit => id du message sélectionné
   * @param {boolean} modifOnePost => condition de structe égalité entre 2 strings
   * @param {boolean} isButtonSendActived => prop pour vérifier si le bouton envoyer est activé
   */

  // Fonction pour récupérer la saisie du texte
  const handleModifMessage = (e) => {
    console.log('Ici ModifPost.js : modifMessage')
    setMessageValue({ message: e.target.value })
    console.log(e.target.value)
  }

  console.log(messageValue, isButtonSendActived)

  // Condition pour envoyer la requête
  if (
    isButtonSendActived &&
    messageValue !== null &&
    messageValue !== undefined &&
    modifOnePost
  ) {
    console.log('condition pour envoyer la requête')
    const sendAxios = async () => {
      await axios({
        method: 'put',
        url: `${process.env.REACT_APP_API_URL}api/post/${IdPost}`,
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: messageValue,
        userId,
      })
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    sendAxios()
  }

  return (
    <>
      {modifOnePost ? (
        <Textarea defaultValue={message} onChange={handleModifMessage} />
      ) : (
        <p>{message}</p> /*affiche les messages venant de PostsDisplay*/
      )}
    </>
  )
}

export default ModifPost
