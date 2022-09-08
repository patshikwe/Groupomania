import axios from 'axios'
import { useContext, useState } from 'react'
import { Uidcontext } from '../../utils/HomeContext'

function Postform() {
  const [textarea, setTextarea] = useState('Quoi de neuf ?')
  const token = window.localStorage.getItem('token')

  //Utilisation de useContext pour l'id utilisateur
  const userId = useContext(Uidcontext)
  console.log(userId, token)

  // Objet contenant les variables textarea et userId
  // const post = { textarea: textarea, userId: `${userId}` }

  const handleSumit = async (e) => {
    e.preventDefault()

    await axios({
      method: 'post',
      url: ' http://localhost:5000/api/post',
      data: { userId: userId, post: textarea },
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <>
      <form action="" id="post-form" onSubmit={handleSumit}>
        <textarea
          id="writePost"
          name="writePost"
          rows="5"
          cols="33"
          onChange={(e) => {
            setTextarea(e.target.value)
          }}
          value={textarea}
          required
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </>
  )
}

export default Postform
