import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Uidcontext } from '../../utils/HomeContext'
import user from '../../assets/logo/circle-user.svg'
import { timestampParser } from '../../utils/utils'
import '../../styles/index.css'

function Postform(props) {
  // const [isLoading, setLoading] = useState(false)
  const token = window.localStorage.getItem('token')
  const [message, setMessage] = useState('')
  const [postPicture, setPostpicture] = useState(null)
  const [imageUrl, setImageUrl] = useState('')

  // useContext pour l'id de l'utilisateur
  const userId = useContext(Uidcontext)
  console.log(userId, token)

  // Affichage d'image au front
  const handlePicture = (e) => {
    e.preventDefault()
    setPostpicture(URL.createObjectURL(e.target.files[0]))
    setImageUrl(e.target.files[0])
  }

  const cancelPost = (e) => {
    setMessage('')
    setPostpicture('')
    setImageUrl('')
  }

  const handleSumit = async (e) => {
    e.preventDefault()
    console.log(imageUrl)

    if (message || postPicture) {
      let data = { userId, message }
      // const data = new FormData()
      // data.append('userId', userId)
      // data.append('message', message)
      if (imageUrl) {
        data = { userId, message, imageUrl }
      }
      await axios({
        method: 'post',
        url: ' http://localhost:5000/api/post',
        data: data,
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
    } else {
      alert('Veuillez entrer votre message!')
    }
  }
  return (
    <>
      <form id="post-form" onSubmit={handleSumit}>
        <textarea
          id="writePost"
          name="writePost"
          rows="4"
          cols="50"
          placeholder="Quoi de neuf ?"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          value={message}
          required
        />
        {message || postPicture ? (
          <li className="card-container">
            <div className="cardInfoUser">
              <div className="card-left">
                <img src={user} alt="logo utilisateur" />
              </div>
              <div className="info-user">
                <h3>{props.user}</h3>
              </div>
              <div className="date">
                <span>{timestampParser(Date.now())}</span>
              </div>
            </div>
            <div className="message-content">
              <div className="divMessage">
                <p>{message}</p>
              </div>
              <div className="divPicture">
                <img src={postPicture} title={`${imageUrl.name}`} alt="" />
              </div>
            </div>
          </li>
        ) : null}
        <div className="containerImage">
          <input
            className="inputImage"
            type="file"
            name="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => handlePicture(e)}
          />
        </div>
        {message || postPicture ? (
          <button className="top background" onClick={cancelPost}>
            Annuler message
          </button>
        ) : null}
        <input className="send background" type="submit" value="Envoyer" />
      </form>
    </>
  )
}

export default Postform
