import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from '../../utils/style/StyleAdd'
import DeleteItem from './DeleteItem'

const token = localStorage.getItem('token')

export function PostsDisplay(onUpdate) {
  const [posts, setPosts] = useState(null)
  const getAllMessages = async () => {
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

  console.log('Ici PostsDisplay ==>', onUpdate)
  useEffect(() => {
    getAllMessages()
  }, [onUpdate])

  console.log(posts)

  return (
    <div className="global column-reverse last-child">
      <h2>Affichage des posts</h2>
      {posts &&
        posts.map((post) => (
          <Card key={post._id}>
            <p>
              <span>{post.email}</span>
              <span>{post.createdAt}</span>
            </p>
            <p>{post.message}</p>
            <div className="Contenair-delete-img">
              <DeleteItem />
            </div>
          </Card>
        ))}
    </div>
  )
}

export default PostsDisplay
