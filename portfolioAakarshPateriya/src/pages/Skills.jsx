import React from 'react';
import '../App.css';

const Skills = () => {
    return (
        <section id="skills" className="skills-section" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>











            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px', color: '#333', fontSize: '2.5rem' }}>Skills</h2>
            <div className="skills-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div className="skill-category" style={{ marginBottom: '40px', backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ color: '#2c3e50', marginBottom: '20px', fontSize: '1.8rem' }}>Frontend</h3>
                    <div className="skills-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                        <span className="skill-tag" style={{ backgroundColor: '#3498db', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer', ':hover': { transform: 'scale(1.05)' } }}>React.js</span>
                        <span className="skill-tag" style={{ backgroundColor: '#f1c40f', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>JavaScript</span>
                        <span className="skill-tag" style={{ backgroundColor: '#e74c3c', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>HTML5</span>
                        <span className="skill-tag" style={{ backgroundColor: '#9b59b6', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>CSS3</span>
                        <span className="skill-tag" style={{ backgroundColor: '#563d7c', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>Bootstrap</span>
                        <span className="skill-tag" style={{ backgroundColor: '#38b2ac', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>Tailwind CSS</span>
                    </div>
                </div>








                <div className="skill-category" style={{ marginBottom: '40px', backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ color: '#2c3e50', marginBottom: '20px', fontSize: '1.8rem' }}>Backend</h3>
                    <div className="skills-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                        <span className="skill-tag" style={{ backgroundColor: '#27ae60', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>Node.js</span>
                        <span className="skill-tag" style={{ backgroundColor: '#2ecc71', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>Express.js</span>
                        <span className="skill-tag" style={{ backgroundColor: '#47b784', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>MongoDB</span>
                        <span className="skill-tag" style={{ backgroundColor: '#e67e22', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>SQL</span>
                        <span className="skill-tag" style={{ backgroundColor: '#16a085', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>RESTful APIs</span>
                    </div>
                </div>








                <div className="skill-category" style={{ marginBottom: '40px', backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ color: '#2c3e50', marginBottom: '20px', fontSize: '1.8rem' }}>Tools & Others</h3>
                    <div className="skills-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                        <span className="skill-tag" style={{ backgroundColor: '#34495e', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>Git</span>
                        <span className="skill-tag" style={{ backgroundColor: '#1abc9c', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>GitHub</span>
                        <span className="skill-tag" style={{ backgroundColor: '#3498db', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>VS Code</span>
                        <span className="skill-tag" style={{ backgroundColor: '#e74c3c', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>Postman</span>
                        <span className="skill-tag" style={{ backgroundColor: '#2980b9', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}>Docker</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;