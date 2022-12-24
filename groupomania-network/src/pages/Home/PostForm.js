import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Uidcontext } from '../../utils/HomeContext'
import user from '../../assets/logo/circle-user.svg'
import { timestampParser } from '../../utils/utils'
import '../../styles/index.css'

function Postform(props) {
  const token = window.localStorage.getItem('token')
  const [message, setMessage] = useState('')
  const [postPicture, setPostpicture] = useState(null)
  const [imageUrl, setImageUrl] = useState('')

  // useContext pour l'id de l'utilisateur
  const userId = useContext(Uidcontext)

  console.log(userId, token, props.user)
  const email = props.user
  console.log(email)

  // Affichage d'image au front
  const handlePicture = (e) => {
    e.preventDefault()
    setPostpicture(URL.createObjectURL(e.target.files[0]))
    setImageUrl(e.target.files[0])
  }

  // Pour annuler le message
  function cancelPost(e) {
    setMessage('')
    setImageUrl('')
    if (postPicture) {
      setPostpicture('')
      window.location.reload() //Recharger la page
    }
  }

  const handleSumit = async (e) => {
    e.preventDefault()
    console.log(imageUrl)

    if (message || postPicture) {
      const formData = new FormData()
      formData.append('userId', `${userId}`)
      formData.append('message', `${message}`)
      formData.append('email', `${email}`)
      console.log(formData.get('userId'))

      if (imageUrl) {
        formData.append('imageUrl', imageUrl)
        console.log(formData.get('imageUrl'))
      }
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}api/post`,
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          // 'content-type': 'multipart/form-data',
        },
      })
        .then((res) => {
          console.log(res)
          props.onUpdate(message) //props fonction de l'enfant au parent
          setMessage('')
          setPostpicture('')
        })
        .catch((error) => {
          console.log(error)
          alert("Échec lors de l'envoi des données vers le serveur!")
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
          placeholder="Quoi de neuf ?"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          value={message}
          required
        />
        {message || postPicture ? (
          <div className="card-container">
            <div className="cardInfoUser">
              <div className="card-left">
                <img src={user} alt="logo utilisateur" />
              </div>
              <div className="info-user">
                <h2>{props.user}</h2>
              </div>
              <div className="date">
                <span>{timestampParser(Date.now())}</span>
              </div>
            </div>
            <div className="message-content">
              <div className="divMessage">
                <p>{message}</p>
              </div>
              {postPicture && (
                <div className="divPicture">
                  <img src={postPicture} title={`${imageUrl.name}`} alt="" />
                </div>
              )}
            </div>
          </div>
        ) : null}
        <div className="divInputFile">
          <input
            className="inputImage"
            type="file"
            name="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => handlePicture(e)}
          />
        </div>
        {message || postPicture ? (
          <button
            className="top background"
            onClick={cancelPost}
            title="Annuler le message"
          >
            Annuler
          </button>
        ) : null}
        <input
          className="send background"
          type="submit"
          value="Envoyer"
          title="Envoyer"
        />
      </form>
    </>
  )
}

export default Postform
