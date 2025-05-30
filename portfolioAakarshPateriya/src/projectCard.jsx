import React, { useEffect } from 'react';
import './projectCard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = ({ title, description, techStack, link }) => {
    return (
        <div className="project-card" data-aos="fade-up" data-aos-duration="1000">
            <div className="project-content">
                <h2 className="project-title">{title}</h2>
                <p className="project-description">{description}</p>
                <p className="project-tech">{techStack}</p>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
            </a>
        </div>
    );
};

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });
    }, []);

    const projectData = [
        {
            title: 'Learning System Backend',
            description: 'A dashboard for students to enhance their learning with tailored paths.',
            techStack: 'React, Node.js, MongoDB',
            link: 'https://github.com/aakarshpateriya/mearnlearn3',
        },
        {
            title: 'Noise Pollution OTP Generator',
            description: 'A unique way to create OTPs using environmental noise.',
            techStack: 'Python, Machine Learning',
            link: 'https://github.com/aakarshpateriya/Random-code-Generator',
        },
        {
            title: 'NSE Application',
            description: 'An education and sports management platform.',
            techStack: 'HTML, React, Node.js',
            link: 'https://github.com/aakarshpateriya/NFC-Education-Pvt-Ltd',
        },
        {
            title: 'E-Commerce Platform',
            description: 'A fully functional e-commerce platform with advanced features.',
            techStack: 'React, Redux, Firebase',
            link: 'https://example.com',
        },
        {
            title: 'Courier Management System',
            description: 'A system for efficient courier management.',
            techStack: 'Socket.IO, Node.js, Express',
            link: 'https://github.com/aakarshpateriya/Courier_Management',
        },
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio showcasing projects and achievements.',
            techStack: 'React, Tailwind CSS',
            link: 'https://github.com/aakarshpateriya/PortfolioAakarshPateriya',
        },
        {
            title: 'NSE Sports',
            description: 'A simple app to provide real-time weather updates.',
            techStack: 'JavaScript, React, OpenWeather API',
            link: 'https://nfcsportsandeducations.netlify.app/',
        },
        {
            title: 'Task Management Tool',
            description: 'An efficient tool to manage daily tasks and improve productivity.',
            techStack: 'React, Node.js, PostgreSQL',
            link: 'https://example.com',
        },
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="projects-container">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;