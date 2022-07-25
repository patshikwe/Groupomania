import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Login from '../../components/Login'
import SignUp from '../../components/SignUp'
import LegalNotice from '../../pages/LegalNotice'

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/legalNotice" element={<LegalNotice />} />
    </Routes>
  )
}

export default index
