// Formulaire de connexion

import React from 'react'
import { useState } from 'react'
import SignUp from './SignUp'
import ToLogin from './ToLogin'
import '../../styles/pages/Profil.css'

const Log = () => {
    const [signUpModal, setSignUpModal] = useState(true)
    const [toLoginModal, setTologinModal] = useState(false)

    const handleModals = (e) => {
        if (e.target.id === "register") {
            setTologinModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "login") {
            setSignUpModal(false);
            setTologinModal(true);
        }
    };

    return (
        <div className='connect-form'>
            <div className='form-container'>
                <ul>
                    <li onClick={handleModals} id="register" 
                    className={signUpModal ? "active-btn" : null}>S'inscrire </li>
                    <li onClick={handleModals} id="login" 
                    className={toLoginModal ? "active-btn" : null}>Se connecter </li>
                </ul>
                {signUpModal && <SignUp />}
                {toLoginModal && <ToLogin />}
            </div>
        </div>
    )
}

export default Log