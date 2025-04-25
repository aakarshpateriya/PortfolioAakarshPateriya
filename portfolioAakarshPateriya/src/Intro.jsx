import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './intro.css';
import SocialLink from "./socialLink";
import profileImage from '../public/img_3223-fotor-202502182176.png';

const Intro = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });
    }, []);

    return (
        <section className="intro-section" id="home">
            <div className="intro-container">
                <div className="intro-content" data-aos="fade-right">
                    <h1 className="intro-title">
                        Hi, I'm <span className="highlight">Aakarsh Pateriya</span>
                    </h1>
                    <h2 className="intro-subtitle">
                        Full Stack Developer
                    </h2>
                    <p className="intro-description">
                        I create beautiful, functional, and user-friendly web applications.
                        Working in Mello Cooperation as a Full Stack Developer.
                        Passionate about building innovative solutions and delivering exceptional user experiences.
                    </p>
                    <div className="intro-buttons">
                        <Link to="/contact" className="primary-button">
                            Contact Me
                        </Link>
                        <a href="#projects" className="secondary-button">
                            View Projects
                        </a>
                    </div>
                    <div className="intro-stats">
                        <div className="stat-item">
                            <span className="stat-number">2+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                    </div>
                </div>
                <div className="intro-image" data-aos="fade-left">
                    <div className="image-container">
                        <div className="image-wrapper">
                            <img 
                                src={profileImage} 
                                alt="Aakarsh Pateriya" 
                                style={{ 
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '500px',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <div className="tech-stack">
                            <div className="tech-icon" data-aos="zoom-in" data-aos-delay="200">
                                <i className="fab fa-react"></i>
                            </div>
                            <div className="tech-icon" data-aos="zoom-in" data-aos-delay="400">
                                <i className="fab fa-node-js"></i>
                            </div>
                            <div className="tech-icon" data-aos="zoom-in" data-aos-delay="600">
                                <i className="fab fa-js"></i>
                            </div>
                            <div className="tech-icon" data-aos="zoom-in" data-aos-delay="800">
                                <i className="fab fa-html5"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;