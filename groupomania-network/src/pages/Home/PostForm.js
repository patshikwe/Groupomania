import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Uidcontext } from '../../utils/HomeContext'
import image from '../../assets/logo/image.svg'
import user from '../../assets/logo/circle-user.svg'
import { timestampParser } from '../../utils/utils'

function Postform(props) {
  // const [isLoading, setLoading] = useState(false)
  const token = window.localStorage.getItem('token')
  const [message, setMessage] = useState('')
  const [postPicture, setPostpicture] = useState(null)
  const [fileImg, setFileImg] = useState('')

  // useContext pour l'id de l'utilisateur
  const userId = useContext(Uidcontext)
  console.log(userId, token)

  const handlePicture = (e) => {
    e.preventDefault()
  }

  const cancelPost = (e) => {
    setMessage('')
    setPostpicture('')
    setFileImg('')
  }

  const handleSumit = async (e) => {
    e.preventDefault()

    await axios({
      method: 'post',
      url: ' http://localhost:5000/api/post',
      data: { userId, message },
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
      <form id="post-form" onSubmit={handleSumit}>
        <textarea
          id="writePost"
          name="writePost"
          rows="5"
          cols="33"
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
              <p>{message}</p>
              <img src={postPicture} alt="" />
            </div>
          </li>
        ) : null}
        <div className="containerImage">
          <img src={image} alt="img" />
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
