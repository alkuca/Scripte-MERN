import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom"

class Login extends Component{
    render(){
        return(
            <div className="login-container">
                <div className="login-content-wrapper">
                    <div className="login-content">
                        <h2>Email:</h2>
                        <input type="text" />
                        <span>Zaboravio sam email</span>
                        <h2>Password:</h2>
                        <input type="text"/>
                        <span>Zaboravio sam lozinku</span>
                        <div className="login-buttons">
                            <button
                                className="button prijava-button">
                                <Link
                                to="/">Prijava
                                </Link>
                            </button>
                            <span role="button" className="button-span-text">ili</span>
                            <button
                                className="button registracija-button">
                                <Link
                                    to="/register">Registracija
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;