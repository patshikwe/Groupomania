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

  // email de l'utilisateur
  const email = props.user

  /**
   * Fonction pour récupérer l'url de l'image de l'input file;
   * setPostpicture: fonction de useState pour afficher l'image avec postPicture;
   *  setImageUrl: fonction de useState pour envoyer l'url de l'image avec imageUrl.
   */
  const handlePicture = (e) => {
    e.preventDefault()
    setPostpicture(URL.createObjectURL(e.target.files[0]))
    setImageUrl(e.target.files[0])
  }

  /**
   * Fonction pour annuler la publication
   * @param {function} setMessage => annuler le message
   * @param {function} setImageUrl => annuler l'envoi de l'url de l'image
   * @param {function} setPostpicture => annuler l'affichage de l'image
   */
  function cancelPost() {
    setMessage('')
    setImageUrl('')
    if (postPicture) {
      setPostpicture('')
    }
  }

  const handleSumit = async (e) => {
    e.preventDefault()

    if (message || postPicture) {
      const formData = new FormData()
      formData.append('userId', `${userId}`)
      formData.append('message', `${message}`)
      formData.append('email', `${email}`)

      if (imageUrl) {
        formData.append('imageUrl', imageUrl)
      }
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}api/post`,
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
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
          <div className="card-container bdr-img">
            <div className="card-info-user">
              <div className="card-info-user-img">
                <img src={user} alt="logo utilisateur" />
              </div>
              <div>
                <h2>{props.user}</h2>
              </div>
              <div className="date">
                <span>{timestampParser(Date.now())}</span>
              </div>
            </div>
            <div className="bloc-message-picture bdr-img ">
              <div className="overfl-auto ">
                <p>{message}</p>
              </div>
              {postPicture && (
                <div>
                  <img
                    src={postPicture}
                    className="image bdr-img width-media "
                    title={`${imageUrl.name}`}
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        ) : null}
        <div className="mrg-botm">
          <input
            className="input-image"
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
