import { useState, useRef } from "react";
import { Auth } from "aws-amplify";
import {Link} from 'react-router-dom';
import './login.css';

export default function Login( {onSignIn}) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitting');
        const email = emailRef.current.value;
        const password=  passwordRef.current.value;
        if(email && password) {
            Auth.signIn(email, password).then((user) => {
                console.log(user);
                onSignIn();
            })
            .catch((err) => {
                console.log('error in login', err);
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
                <label htmlFor="password">password</label>
                <input type='password' ref={passwordRef} />
                </div>
                <div className="button-container">
                <button onClick = {handleSubmit}>Login</button>
                <Link to='/forgotPassword'>
                    <button>Forgot Password</button>
                </Link>
                </div>
            </div>
        </div>
    )
};