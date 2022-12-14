// Fichier pour la modification des posts

const ModifPost = ({ message, updatePost, IdPost }) => {
  console.log('Ici ModifPost', updatePost, IdPost)
  const postToEdit = updatePost && updatePost.postToEdit
  const modifOnePost = postToEdit === IdPost

  /**
   * @param {string} message => message posté
   * @param {string} IdPost => id du message posté
   * @param {object} updatePost => composé: isUpdating et postToEdit(id du message sélectionné)
   * @param {string} postToEdit => id du message sélectionné
   * @param {boolean} modifOnePost => condition de structe égalité entre 2 strings
   */

  console.log('Ici ModifPost', postToEdit)

  return (
    <>
      {modifOnePost ? (
        <textarea defaultValue={message}></textarea>
      ) : (
        <p>{message}</p> /*affiche les messages venant de PostsDisplay*/
      )}
    </>
  )
}

export default ModifPost
