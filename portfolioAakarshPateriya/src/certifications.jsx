import React from 'react';
import './certifications.css';


const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Coding Ninjas",
      date: "2023",
      image: "https://res.cloudinary.com/dnlck4inx/image/upload/v1745524683/Screenshot_2025-02-20_225133_kssedj.png",
      link: "#"
    },
    {
      title: "React.js Certification",
      issuer: "Udemy",
      date: "2023",
      image: require("/Screenshot 2025-02-20 224819.png"),
      link: "#"
    },
    {
      title: "Node.js Certification",
      issuer: "Coursera",
      date: "2023",
      image: "/Screenshot 2025-02-20 225133.png",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="certification-image">
              <img src={cert.image} alt={cert.title} />
            </div>
            <div className="certification-details">
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">{cert.date}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-certificate">
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Certifications;
