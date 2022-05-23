import React from 'react';
import './Sidebar.css';
import { navbarData } from './navbarData';
import { Link } from 'react-router-dom';

const Sidebar = ({ open, setOpen }) => {
    return(
        <div className={`sidebar ${open ? 'sidebar__openNavbar' : 'sidebar__closeNavbar'}`}>
            {navbarData.map(item => (
                <div className="sidebar__item">
                    <a href={item.path}><h2 onClick={() => setOpen(false)}>{item.title}</h2></a>
                </div>
            ))}
        </div>
    )
}

export default Sidebar