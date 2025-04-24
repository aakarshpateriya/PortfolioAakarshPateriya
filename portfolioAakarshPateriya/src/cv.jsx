import { useState } from 'react'
import './App.css'
import Navbar from './navbar.jsx'
import './navbar.css'
import Intro from './Intro.jsx'
import SocialLink from './socialLink.jsx'
import Projects from './projectCard.jsx'
import Footer from './footer.jsx'
import Certifications from './certifications.jsx'

function App() {
  const [count, setCount] = useState(0)

  // Function to handle CV download
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
  }

  return (
    <> 
    <Navbar/>
    <Intro/>
    
    {/* Skills Section */}
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

    <Projects/>

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

    <Certifications/>

    {/* Contact Section */}
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: your.email@example.com</p>
          <p>Phone: +91 XXXXXXXXXX</p>
          <p>Location: Your City, Country</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>

    <Footer/>
    </>
  )
}

export default App
