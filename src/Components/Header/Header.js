import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Header.css'
const Header = () => {
    const {user,logOut}=useAuth();
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
             {user.email && <span style={{ color: 'orange', fontWeight: 'bold' }}>Hello!!{user.displayName}</span>}
                {
                    user?.email && <Button onClick={logOut} variant="primary">LogOut</Button>

                }
            </nav>
        </div>
    );
};

export default Header;