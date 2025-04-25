import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const educationData = [
    {
      id: 1,
      degree: "Bachelor's Degree",
      institution: "Lovely Professional University",
      year: "2022 - Present",
      description: "Computer Science and Engineering",
      grade: "CGPA: 7.2"
    },
    {
      id: 2,
      degree: "12th Standard (Senior Secondary)",
      institution: "GCM Convent School",
      year: "2021",
      description: "Science Stream",
      grade: "Percentage: 80%"
    },
    {
      id: 3,
      degree: "10th Standard (Secondary)",
      institution: "GCM Convent School",
      year: "2019",
      description: "",
      grade: "Percentage: 78%"
    }
  ];

  return (
    <div className="education-section" style={{ 
      padding: '6rem 0', 
      backgroundColor: '#fff',
      backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
      borderTop: '1px solid #e9ecef',
      borderBottom: '1px solid #e9ecef'
    }}>
      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px' 
      }}>
        <h2 
          data-aos="fade-up"
          style={{ 
            textAlign: 'center', 
            marginBottom: '4rem', 
            color: '#2d3436',
            fontSize: '2.5rem',
            fontWeight: '700',
            position: 'relative',
            paddingBottom: '20px'
          }}
        >
          Education Journey
          <span style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '5px',
            background: 'linear-gradient(90deg, #4CAF50, #81C784)',
            borderRadius: '10px'
          }}></span>
        </h2>
        
        <div className="education-cards" style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          margin: '0 auto'
        }}>
          {educationData.map((item, index) => (
            <div 
              key={item.id} 
              className="education-card" 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                padding: '30px',
                width: 'calc(33.333% - 30px)',
                maxWidth: '350px',
                minWidth: '250px',
                transition: 'all 0.4s ease',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #f0f0f0'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#4CAF50';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                e.currentTarget.style.borderColor = '#f0f0f0';
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #4CAF50, #81C784)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600',
                alignSelf: 'flex-start',
                marginBottom: '20px',
                boxShadow: '0 5px 15px rgba(76, 175, 80, 0.2)'
              }}>
                {item.year}
              </div>
              
              <h3 style={{ 
                color: '#2d3436', 
                marginBottom: '15px',
                fontSize: '1.4rem',
                fontWeight: '700'
              }}>{item.degree}</h3>
              
              <h4 style={{ 
                color: '#636e72', 
                marginBottom: '15px',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>{item.institution}</h4>
              
              {item.description && (
                <p style={{ 
                  color: '#636e72', 
                  marginBottom: '15px',
                  lineHeight: '1.6',
                  flex: '1',
                  fontSize: '1rem'
                }}>{item.description}</p>
              )}
              
              <p style={{ 
                fontWeight: '700', 
                color: '#4CAF50',
                fontSize: '1.1rem',
                marginTop: 'auto',
                padding: '12px 0',
                borderTop: '2px dashed #e8f5e9'
              }}>{item.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;