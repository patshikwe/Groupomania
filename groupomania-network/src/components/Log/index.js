// Formulaire de connexion

import React from 'react'
import { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'
import '../../styles/pages/Profil.css'

const Log = (props) => {
    const [signUpModal, setSignUpModal] = useState(props.signup)
    const [loginModal, setLoginModal] = useState(props.login)

    const handleModals = (e) => {
        if (e.target.id === "register") {
            setLoginModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "login") {
            setSignUpModal(false);
            setLoginModal(true);
        }
    };

    return (
        <div className='connect-form'>
            <div className='form-container'>
                <ul>
                    <li onClick={handleModals} id="register" 
                    className={signUpModal ? "active-btn" : null}>S'inscrire </li>
                    <li onClick={handleModals} id="login" 
                    className={loginModal ? "active-btn" : null}>Se connecter </li>
                </ul>
                {signUpModal && <SignUp />}
                {loginModal && <Login />}
            </div>
        </div>
    )
}

export default Log