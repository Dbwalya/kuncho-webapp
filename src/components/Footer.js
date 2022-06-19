import React from 'react'
import logo  from './images/kuncho logo2.jpg'
import './Footer.css';
import { Facebook, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__left">
                <div className="footer__left-container">
                    <img src={ logo } alt="" />

                    <div className="footer__left-icons">
                        <Facebook />
                        <YouTube />
                        <Instagram />
                    </div>
                </div>
                <div className="left__contacts">
                    <h2>Contacts</h2>
                    <span>useremail@gmail.com</span>
                    <span>+26 0970 000 000</span>
                    <span>Facebook Page Name</span>
                </div>
            </div>
            <div className="footer__right">
            <div className="right __privacy">
                    <h2>Privacy</h2>
                    <span>Terms and Conditions</span>
                    <span>Policy</span>
                    <span>Sponsored by</span>
                </div>
                <div className="right __music">
                    <h2>My Music</h2>
                    <span>Albums</span>
                    <span>Singles</span>
                    <span>Features</span>
                </div>
            </div>
        </div>
    )
}

export default Footer