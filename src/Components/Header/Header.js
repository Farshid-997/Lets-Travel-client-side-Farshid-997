import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <nav>
            <NavLink to="/home">Home</NavLink>
                <NavLink to="/location">Location</NavLink>
                <NavLink to="/packages">Plans</NavLink>
                
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>

            </nav>
        </div>
    );
};

export default Header;