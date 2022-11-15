import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from '../../utils/style/StyleAdd'
import Buttons from './DeleteItem'
import { useContext } from 'react'
import { Uidcontext } from '../../utils/HomeContext'

const token = localStorage.getItem('token')

export function PostsDisplay(onUpdate) {
  const [posts, setPosts] = useState(null)
  const Id = useContext(Uidcontext)

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

  useEffect(() => {
    getAllMessages()
  }, [onUpdate]) //props fonction en paramètre

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
              <Buttons Id={Id} userId={post.userId} />
            </div>
          </Card>
        ))}
    </div>
  )
}

export default PostsDisplay
