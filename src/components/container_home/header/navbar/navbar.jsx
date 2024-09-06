import React from "react";
import './navbar.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar_card">
                <ul>
                    <li><Link to='/'>About Me</Link></li>
                    <li><Link to='/skills'>Skills</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/'>Get in Touch</Link></li>
             </ul>
        </div>
    );
}

export default Navbar;
