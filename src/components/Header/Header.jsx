import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <div className='headerName'>
                <h2>Learning Jone</h2>
            </div>
            <div className='menu'>
                 <a href="programming">Programming</a>
                <a href="about">About</a>
                <a href="contact">Contact</a> 
            
                
            </div>
  </div>
    );
};

export default Header;