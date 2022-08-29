// import { Action } from 'history'

import axios from 'axios'
import { useContext, useState } from 'react'
import { Uidcontext } from '../../utils/HomeContext'

function Postform() {
  const [textarea, setTextarea] = useState('Quoi de neuf ?')
  const token = window.localStorage.getItem('token')
  console.log(token)

  //Utilisation de useContext pour l'id utilisateur
  const userId = useContext(Uidcontext)
  console.log(userId)

  const handleSumit = async (e) => {
    e.preventDefault()

    await axios({})
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
