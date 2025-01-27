import React from 'react';
import './projectCard.css';

const ProjectCard = ({ title, description, techStack, link }) => {
    return (
        <div className="project-card">
            <h2 className="project-title">{title}</h2>
            <p className="project-description">{description}</p>
            <p className="project-tech">Tech Stack: {techStack}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
    );
};

const Projects = () => {
    const projectData = [
        {
            title: 'Learning Path Dashboard',
            description: 'A dashboard for students to enhance their learning with tailored paths.',
            techStack: 'React, Node.js, MongoDB',
            link: 'https://example.com',
        },
        {
            title: 'Noise Pollution OTP Generator',
            description: 'A unique way to create OTPs using environmental noise.',
            techStack: 'Python, Machine Learning',
            link: 'https://example.com',
        },
        {
            title: 'NFC Application',
            description: 'An education and sports management platform.',
            techStack: 'HTML, React, Node.js',
            link: 'https://example.com',
        },
        {
            title: 'E-Commerce Platform',
            description: 'A fully functional e-commerce platform with advanced features.',
            techStack: 'React, Redux, Firebase',
            link: 'https://example.com',
        },
        {
            title: 'Chat Application',
            description: 'A real-time chat application with group chat and notifications.',
            techStack: 'Socket.IO, Node.js, Express',
            link: 'https://example.com',
        },
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio showcasing projects and achievements.',
            techStack: 'React, Tailwind CSS',
            link: 'https://example.com',
        },
        {
            title: 'Weather Forecast App',
            description: 'A simple app to provide real-time weather updates.',
            techStack: 'JavaScript, React, OpenWeather API',
            link: 'https://example.com',
        },
        {
            title: 'Task Management Tool',
            description: 'An efficient tool to manage daily tasks and improve productivity.',
            techStack: 'React, Node.js, PostgreSQL',
            link: 'https://example.com',
        },
    ];

    return (
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
    );
};

export default Projects;
