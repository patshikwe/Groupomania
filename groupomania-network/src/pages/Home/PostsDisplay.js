import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from '../../utils/style/StyleAdd'
import Buttons from './Buttons'
import { useContext } from 'react'
import { Uidcontext } from '../../utils/HomeContext'
import Liked from './Liked'
import { timestampParser } from '../../utils/utils'
import ModifPost from './ModifPost'

const token = localStorage.getItem('token')

function PostsDisplay({ onUpdate }) {
  const [posts, setPosts] = useState(null)
  const [updateDeletePost, setUpdateDeletePost] = useState(null)
  const [updatePost, setUpdatePost] = useState(null)
  const [isButtonSendActived, setIsButtonSendActived] = useState(false)
  const [finishPostEdits, setFinishPostEdits] = useState(false)

  // useContext pour l'id de l'utilisateur
  const Id = useContext(Uidcontext)

  /** Gestionnaire pour récupérer tous les posts */
  const handleGetAllMessages = async () => {
    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}api/post`,
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error))
  }

  // Fonction pour la mise à jour d'un post dans Home
  const updateHandlePost = (e) => {
    setUpdatePost({
      isUpdating: true,
      postToEdit: e.target.id, //id du message sélectionné
    })
  }

  // Fonction pour annuler les modifications
  const toCancelModifications = () => {
    setUpdatePost(null)
  }

  // Fonction pour vérifier l'activation du bouton envoyer
  const messageToSend = () => {
    setIsButtonSendActived(true)
  }

  /** Fonction pour mettre à jour le post après modification,
   * appelée après la reponse de sendAxios dans ModifPost et
   * revenir à l'état initial*/
  const messageReceivedIsUpdated = () => {
    setUpdatePost(null)
    setIsButtonSendActived(false)
    setFinishPostEdits((update) => !update)
  }

  useEffect(() => {
    handleGetAllMessages()
  }, [onUpdate, updateDeletePost, finishPostEdits]) // Vérification de changement pour auto rechargement

  return (
    <div className="global column-reverse last-child">
      {posts &&
        posts.map((post) => (
          <Card key={post._id}>
            <p>
              <span>{post.email}</span>
              {post.createdAt ? (
                <span>Créé: {timestampParser(post.createdAt)}</span>
              ) : null}
              {post.updatedAt !== post.createdAt ? (
                <span>Modifié: {timestampParser(post.updatedAt)}</span>
              ) : null}
            </p>
            {/* Ici affichage des messages et ses props */}
            <ModifPost
              postMessage={post.message}
              image={post.imageUrl}
              updatePost={updatePost}
              IdPost={post._id}
              Id={post.userId}
              isButtonSendActived={isButtonSendActived} // props pour bouton envoyer
              messageReceivedIsUpdated={messageReceivedIsUpdated}
            />

            <div className="Contenair-buttons-img">
              {/* Ici les props pour les boutons, voir Buttons.js */}
              <Buttons
                userId={Id}
                Id={post.userId}
                IdPost={post._id}
                onUpdateDelete={(IdPost) => setUpdateDeletePost(IdPost)} //enfant => parent(props fonction)
                postMessage={post.message}
                onModifMessage={updateHandlePost}
                updatePost={updatePost}
                sendMessage={messageToSend}
                cancelModifications={toCancelModifications}
              />
            </div>
            {/* Ici les props pour liker, voir Liked.js */}
            <Liked
              IdPost={post._id}
              isLiked={post.likes}
              usersLiked={post.usersLiked}
            />
          </Card>
        ))}
    </div>
  )
}

export default PostsDisplay
