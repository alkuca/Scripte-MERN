import React, { Component } from 'react';
import './Navbar.css';
import {Link} from "react-router-dom"

class Navbar extends Component{


    render(){
        return(
            <div className="navbar">
                <div className="navbar-links">
                    <ul className="nav-links">
                        <li role="button" className="button-active" >Kolegiji</li>
                        <li role="button">Resursi</li>
                        <li role="button"><Link to="/login">Prijava</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;
