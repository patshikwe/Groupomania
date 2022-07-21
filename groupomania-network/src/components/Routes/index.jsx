import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Profil from '../../pages/Profil'

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Profil />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default index
