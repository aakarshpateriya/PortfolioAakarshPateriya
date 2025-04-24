import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Aakarsh Pateriya
                </Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/skills" className="navbar-link">Skills</Link>
                    <Link to="/certifications" className="navbar-link">Certifications</Link>
                    <Link to="/contact" className="navbar-link">Contact</Link>
                </div>
                <button className="navbar-menu-button">
                    <span>☰</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;