import React, { useEffect } from 'react';
import './cv.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cv() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);

    const handleDownloadCV = () => {
        window.open('/Aakarsh_Pateriya_Resume.pdf', '_blank');
    };

    return (
        <div className="cv-container" data-aos="fade-up">
            <header className="cv-header" data-aos="fade-down">
                <h1 className="cv-name">Aakarsh Pateriya</h1>
                <p className="cv-title">Full Stack Developer</p>
                <p className="cv-contact">Email: aakarshpateriya123@gmail.com | Phone: +91 9993748220 | LinkedIn: <a href="https://www.linkedin.com/in/aakarsh-pateriya-a0b784252" target="_blank">linkedin.com/in/aakarsh-pateriya</a> | GitHub: <a href="https://github.com/aakarshpateriya" target="_blank">github.com/aakarshpateriya</a></p>
                <button onClick={handleDownloadCV} className="cv-download-button">Download CV</button>
            </header>

            <section className="cv-section" data-aos="fade-right">
                <h2 className="cv-section-title">Summary</h2>
                <p className="cv-section-content">Entrepreneur and full-stack developer with experience in leading projects, building startups, and organizing events. Co-founder and CEO of Bootstrap, connecting students with top coders for hackathons, and founder of Nations Sports and Education Pvt Ltd (NSE), offering sports and educational services. Skilled in full-stack development, project management, public speaking, and event coordination. Passionate about fostering education, sports, and innovation in the community.</p>
            </section>

            <section className="cv-section" data-aos="fade-left">
                <h2 className="cv-section-title">Technical Skills</h2>
                <ul className="cv-list">
                    <li>Backend Development: Node.js, Java, PHP</li>
                    <li>Frontend Development: React.js, MERN Stack</li>
                    <li>Android App Development</li>
                    <li>Database Management: DBMS</li>
                    <li>Languages: Java, C, C++, Python</li>
                    <li>Generative AI, DSA</li>
                </ul>
            </section>

            <section className="cv-section" data-aos="fade-right">
                <h2 className="cv-section-title">Projects</h2>
                <ul className="cv-list">
                    <li data-aos="zoom-in">
                        <strong>Nations Education and Sports Application</strong> (Aug 2022 - Oct 2022)
                        <p>Developed an app for NFC to manage registrations and events. Built with React for front-end and Node.js for backend, allowing real-time data updates.</p>
                        <a href="https://github.com/aakarshpateriya/NFC-App" className="cv-button" target="_blank">View Project</a>
                    </li>
                    <li data-aos="zoom-in">
                        <strong>Noise Pollution-Based Random Code Generator</strong> (Feb 2023 - April 2023)
                        <p>Created an OTP generator using noise pollution data for unique authentication codes.</p>
                        <a href="https://github.com/aakarshpateriya/NoisePollutionOTP" className="cv-button" target="_blank">View Project</a>
                    </li>
                    <li data-aos="zoom-in">
                        <strong>NSC Quiz Platform</strong> (March 2024 - April 2024)
                        <p>Developed an interactive quiz platform with real-time score tracking using React.js.</p>
                        <a href="https://github.com/aakarshpateriya/NSC-Quiz" className="cv-button" target="_blank">View Project</a>
                    </li>
                </ul>
            </section>

            <section className="cv-section" data-aos="fade-left">
                <h2 className="cv-section-title">Education</h2>
                <ul className="cv-list">
                    <li data-aos="fade-up">
                        <strong>Bachelor of Technology in Computer Science</strong>
                        <p>Lovely Professional University, Punjab | 2021 - 2025</p>
                    </li>
                    <li data-aos="fade-up">
                        <strong>12th MP Board</strong>
                        <p>GOVT Model H S School, Nowgong, Chhatarpur | Feb - March 2022</p>
                    </li>
                    <li data-aos="fade-up">
                        <strong>10th CBSE</strong>
                        <p>GCM Convent School Nowgong, Chhatarpur | Aug 2019 - July 2020</p>
                    </li>
                </ul>
            </section>

            <section className="cv-section" data-aos="fade-up">
                <h2 className="cv-section-title">Additional Information</h2>
                <ul className="cv-list">
                    <li>Languages: English, Hindi</li>
                    <li>Certifications: Object Oriented Programming, Generative AI</li>
                    <li>Awards/Activities: Universu MM 2023 National Youth Festival Standup Comedy</li>
                </ul>
            </section>

            <footer className="cv-footer" data-aos="fade-up">
                <p>© 2025 Aakarsh Pateriya. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Cv;