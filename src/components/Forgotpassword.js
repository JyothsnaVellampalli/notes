import { useState, useRef } from "react";
import { Auth } from "aws-amplify";
import {Link} from 'react-router-dom';
import './login.css';

export default function ForgotPassword( {onSignIn}) {
    const emailRef = useRef();
    const newPasswordRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitting');
        const email = emailRef.current.value;
        const newPassword=  newPasswordRef.current.value;
        if(email) {
            Auth.forgotPassword(email)
                .then (() => {
                    Auth.forgotPasswordSubmit(email, newPassword).then((user) => {
                        console.log(user);
                        onSignIn();
                    })
                    .catch((err) => {
                        console.log('error in forgot password submission', err);
                    })
                })
                .catch((err) => {
                    console.log(err, 'forgot password intialisation')
                })
        }
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <div class='form-container'>
                <div class='form-item'>
                <label htmlFor="email">Email</label>
                <input type='email' ref={emailRef} />
                </div>
                <div class='form-item'>
                <label htmlFor="newnewPassword">new Password</label>
                <input type='newPassword' ref={newPasswordRef} />
                </div>
                <div className="button-container">
                <button onClick = {handleSubmit}>Update Password</button>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                </div>
            </div>
        </div>
    )
};