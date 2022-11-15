import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from '../../utils/style/StyleAdd'
import Buttons from './Buttons'
import { useContext } from 'react'
import { Uidcontext } from '../../utils/HomeContext'

const token = localStorage.getItem('token')

function PostsDisplay(onUpdate) {
  const [posts, setPosts] = useState(null)
  const [updateDeletePost, setUpdateDeletePost] = useState(null)
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
              <span>{post.createdAt}</span>
            </p>
            <p>{post.message}</p>
            <div className="Contenair-buttons-img">
              <Buttons
                userId={Id}
                Id={post.userId}
                IdPost={post._id}
                onUpdateDelete={(IdPost) => setUpdateDeletePost(IdPost)} //enfant => parent(props fonction)
              />
            </div>
          </Card>
        ))}
    </div>
  )
}

export default PostsDisplay
