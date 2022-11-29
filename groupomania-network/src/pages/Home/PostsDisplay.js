import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from '../../utils/style/StyleAdd'
import Buttons from './Buttons'
import { useContext } from 'react'
import { Uidcontext } from '../../utils/HomeContext'
import Liked from './Liked'

const token = localStorage.getItem('token')

function PostsDisplay(onUpdate, listenLiked) {
  const [posts, setPosts] = useState(null)
  const [updateDeletePost, setUpdateDeletePost] = useState(null)
  const [updateLike, setUpdateLike] = useState(null)
  const Id = useContext(Uidcontext)

  const handleGetAllMessages = async () => {
    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}api/post`,
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res)
        setPosts(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // Remonter l'information enfant vers parent
  const updateIsLiked = (love) => {
    console.log('Envoi données enfant vers parent')
    console.log(love)
    const liked = love
    setUpdateLike(liked)
  }
  useEffect(() => {
    handleGetAllMessages()
  }, [onUpdate, updateDeletePost]) // Vérification de changement pour auto rechargement

  console.log(posts)

  return (
    <div className="global column-reverse last-child">
      {posts &&
        posts.map((post) => (
          <Card key={post._id}>
            <p>
              <span>{post.email}</span>
              {post.createdAt ? <span>Créé: {post.createdAt}</span> : null}
              {post.updatedAt !== post.createdAt ? (
                <span>Modifié: {post.updatedAt}</span>
              ) : null}
            </p>
            <p>{post.message}</p>
            <div className="Contenair-buttons-img">
              <Buttons
                userId={Id}
                Id={post.userId}
                IdPost={post._id}
                onUpdateDelete={(IdPost) => setUpdateDeletePost(IdPost)} //enfant => parent(props fonction)
                postMessage={post.message}
              />
            </div>
            <Liked
              IdPost={post._id}
              isLiked={post.likes}
              usersLiked={post.usersLiked}
              updateIsLiked={updateIsLiked}
              listenLiked={updateLike}
            />
          </Card>
        ))}
    </div>
  )
}

export default PostsDisplay
