import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-title">Aakarsh Pateriya</h3>
                    <p className="footer-description">
                        Full Stack Developer passionate about creating innovative web solutions
                        and delivering exceptional user experiences.
                    </p>
                    <div className="footer-social-links">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="aakarshpateriya123@gmail.com">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/certifications">Certifications</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Contact Info</h3>
                    <ul className="footer-contact">
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Chhttarpur, India</span>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <span>aakarshpateriya123@gmail.com</span>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            <span>+91 9993748220</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Aakarsh Pateriya. All rights reserved.</p>
                <p>Built with React and ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;
