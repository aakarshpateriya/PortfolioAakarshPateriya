import React from 'react';
import '../App.css';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-container">
                <div className="skill-category">
                    <h3>Frontend</h3>
                    <div className="skills-list">
                        <span className="skill-tag">React.js</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">HTML5</span>
                        <span className="skill-tag">CSS3</span>
                        <span className="skill-tag">Bootstrap</span>
                        <span className="skill-tag">Tailwind CSS</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Backend</h3>
                    <div className="skills-list">
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">Express.js</span>
                        <span className="skill-tag">MongoDB</span>
                        <span className="skill-tag">SQL</span>
                        <span className="skill-tag">RESTful APIs</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Tools & Others</h3>
                    <div className="skills-list">
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">GitHub</span>
                        <span className="skill-tag">VS Code</span>
                        <span className="skill-tag">Postman</span>
                        <span className="skill-tag">Docker</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills; 