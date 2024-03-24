import React from "react";
import { Link } from "react-router-dom"



function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">LeChainon</a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    
                    <li className="home">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>

                    <li className="contact-us">
                        <Link className="nav-link" to="/quick-help-form">Quick Help Form</Link>
                    </li>
                    
                    <li className="dashboard">
                        <Link className="nav-link" to="/dashboard">User Profiles Dashboard</Link>
                    </li>


                    <li className="residentForm">
                        <Link className="nav-link" to="/residentForm">Create User Dashboard</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/login">User Sign In</a>
                        <a className="dropdown-item" href="/login">Employee Sign In</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Sign Out</a>
                        </div>
                    </li>

                </ul>
            </div>
        </nav>
    );
}


export default Navbar;