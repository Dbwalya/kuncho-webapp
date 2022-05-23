import { Facebook, Menu, YouTube } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import navLogo from './images/kuncho logo2.jpg'
import './Navbar.css';
import { navbarData } from './navbarData';

const Navbar = ({ open, setOpen }) => {

    const handleToggle = () => {
       if(open) {
           setOpen(false);
       } else if(open === false) {
           setOpen(true);
       }
    }

    return (
        <div className="navbar">
            <div className='navbar__left'>
                <a href='/'>
                <img src={ navLogo } alt='logo' />
                </a>
            </div>
            
            <div className='navbar__list'>
                {navbarData.map((data) => (
                    <>
                        <h2>{data.title}</h2>
                    </>
                ))}
            </div>
            <div className="navbar__right">
                <div className='right__icons'>                    
                    <Facebook className="facebook__icon"/>
                    <YouTube />
                </div>
                <Menu className="navbar__menu" onClick={ handleToggle }/>
            </div>
        </div>
    )
}

export default Navbar