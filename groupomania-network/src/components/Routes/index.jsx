
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Profil from '../../pages/Frofil'
import Trending from '../../pages/Trending'


const index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/trending" element={<Trending />} />
        </Routes>
    )
}

export default index