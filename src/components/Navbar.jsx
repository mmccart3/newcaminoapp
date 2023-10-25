import React from 'react';
import { IconContext } from 'react-icons';
import { CaminoArrow } from '../images/icons/caminoArrow';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props){
    return (
        <div className='navbar'>
            <div className=' navbar-container main-container'>
                <IconContext.Provider value={{ color: 'yellow' }}>
                <CaminoArrow className="navbar-icon" />
                </IconContext.Provider>
                <p className='nav-title'>Camino Francés</p>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to="/allstages" className="nav-link">All Stages</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/accommodation" className="nav-link">Accommodation</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/locations" className="nav-link">Locations</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/stages" className="nav-link">Current Stages</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/background" className="nav-link">Camino Background</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/aboutus" className="nav-link">About Us</Link>
                    </li>
                </ul>
                <ul className='login-menu'>
                    <li className='login-item'>
                        <Link to="/login" className="login-link">Login</Link>
                    </li>
                    <li className='register-item'>
                        <Link to="/register" className="register-link">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;