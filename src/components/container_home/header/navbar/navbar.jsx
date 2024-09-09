import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Ensure Link is imported
import './navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar_card">
            <ul className="navbar_card_ul">
                <li><Link to='/'>About Me</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/'>Get in Touch</Link></li>
            </ul>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`mobile_menu ${menuOpen ? 'open' : ''}`}>
                <li><Link to='/'>About Me</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/'>Get in Touch</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
