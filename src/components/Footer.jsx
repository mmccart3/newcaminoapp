import React from 'react';
import { IconContext } from 'react-icons';
import { CaminoArrow } from '../images/icons/caminoArrow';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(props){
    return (
        <div className='footer'>
            <div className='footer-container main-container'>
                <div className='arrow-and-brand'>
                    <IconContext.Provider value={{ color: 'yellow' }}>
                        <CaminoArrow className="footer-icon" />
                    </IconContext.Provider>
                    <p className='footer-title'>Camino App</p>
                    <p className='brand-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eos optio, eum, molestiae repudiandae tempora doloremque error nisi quasi odit magnam at! Deserunt dolorum odio optio eveniet esse aut voluptates?</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;