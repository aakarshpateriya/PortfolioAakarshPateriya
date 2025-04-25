import React from 'react';
import Intro from '../Intro.jsx';
import PlatformOverview from '../PlatformOverview.jsx';
import Projects from '../projectCard.jsx';
import Education from '../Education.jsx';
import SocialLink from '../socialLink.jsx';
import '../App.css';

const Home = () => {
    const handleDownloadCV = () => {
        // Path to your CV file in the public directory
        const cvUrl = '/Aakarsh_Pateriya_CV.pdf';
        
        // Create an anchor element
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Aakarsh_Pateriya_CV.pdf'; // Name that will appear when downloading
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="home-page">
            <Intro />
            <PlatformOverview />
            <Projects />
            <br />
            <br />
            <br />
            <Education />
            <br />
            <br />
            <br />
            
            {/* CV Download Button */}
            <div className="cv-download-container" style={{ textAlign: 'center', margin: '2rem 0' }}>
                <button 
                    onClick={handleDownloadCV}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
                >
                    Download CV
                </button>
            </div>
            <SocialLink />
        </div>
    );
};

export default Home;
