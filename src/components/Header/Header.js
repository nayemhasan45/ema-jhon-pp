import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Home</Link >
            <Link to='/orders'>Orders</Link >
            <Link to='/review'>Orders Review</Link >
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;