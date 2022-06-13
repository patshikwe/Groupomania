// Page d'accueil(Home page)

import React from 'react'
import logo from '../assets/logo/icon-left-font-monochrome-black.svg'

const Home = () => {
    return (
        <div>
            <header className="">
                <img src={logo} className="logo" alt="logo" />
            </header>
            <div>
                Ici Acueil Home
            </div>
        </div>
    )
} 

export default Home