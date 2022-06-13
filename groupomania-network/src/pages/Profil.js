
import React from 'react'
import logo from '../assets/logo/icon-left-font-monochrome-black.svg';
import Log from '../components/Log'
import '../styles/pages/Profil.css'

const Profil = () => {
    

    return (
        <div className=''>   
            <header className="">
                <img src={logo} className="logo" alt="logo" />
            </header>
            <div className=''>
                <Log login={false} signup={true}/>
            </div>
        </div>
    )
}

export default Profil