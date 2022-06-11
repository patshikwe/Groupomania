
import React from 'react'
import logo from '../assets/logo/icon-left-font-monochrome-black.svg';
import Log from '../components/Log'
import '../styles/pages/Profil.css'
import { useContext } from 'react';
import { UidContext } from '../components/AppContext';

const Profil = () => {
    const uid = useContext(UidContext)

    return (
        <div className=''>
            {uid? (
                <h1>UpdateProfil</h1>
            ) : (
                    <div className=''>
                    <header className="">
                        <img src={logo} className="logo" alt="logo" />
                    </header>
                    <div className=''>
                        <Log login={false} signup={true}/>
                    </div>
                </div>
            ) }   
        </div>
    )
}

export default Profil