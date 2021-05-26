import React from 'react';
import image from './sneakers.png';

const Header = (props) => {
    return (
        <div className="Header">
        <h1>Shoe Store</h1>
        <img src={image} />
        </div>
        
    );
};

export default Header;