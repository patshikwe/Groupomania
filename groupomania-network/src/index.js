// Fichier de connexion avec index.html

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/styles/index.css'
import { BrowserRouter } from 'react-router-dom'

// div id="root" dans body de l'index.html pour afficher react
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
