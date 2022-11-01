// import Routes from './components/Routes'
import { Routes, Route } from 'react-router-dom'
import { React } from 'react'
import Home from './pages/Home/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import LegalNotice from './pages/LegalNotice'
import { Uidcontext } from '../src/utils/HomeContext'
let params = new URLSearchParams(window.location.search)
let Id = params.get('userId')
console.log(Id)

const App = () => {
  return (
    <Uidcontext.Provider value={Id}>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/legalNotice" element={<LegalNotice />} />
      </Routes>
    </Uidcontext.Provider>
  )
}

export default App
