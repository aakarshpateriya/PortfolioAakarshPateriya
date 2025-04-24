import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './platformOverview.css';

const PlatformOverview = () => {
    const [githubStats, setGithubStats] = useState({
        repos: 0,
        followers: 0,
        contributions: 0
    });

    const [leetcodeStats, setLeetcodeStats] = useState({
        problemsSolved: 0,
        ranking: 0,
        contests: 0
    });

    const sectionRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });

        // Intersection Observer for section visibility
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Mock data - Replace with actual API calls
        setGithubStats({
            repos: 15,
            followers: 50,
            contributions: 200
        });

        setLeetcodeStats({
            problemsSolved: 150,
            ranking: 5000,
            contests: 10
        });

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="platform-overview" id="platforms" ref={sectionRef}>
            <div className="overview-container">
                <h2 className="section-title" data-aos="fade-up">Platform Overview</h2>
                <div className="platforms-grid">
                    {/* GitHub Overview */}
                    <div className="platform-card github-card" data-aos="fade-right">
                        <div className="platform-header">
                            <i className="fab fa-github"></i>
                            <h3>GitHub</h3>
                        </div>
                        <div className="platform-stats">
                            <div className="stat-item">
                                <span className="stat-number">{githubStats.repos}</span>
                                <span className="stat-label">Repositories</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">{githubStats.followers}</span>
                                <span className="stat-label">Followers</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">{githubStats.contributions}</span>
                                <span className="stat-label">Contributions</span>
                            </div>
                        </div>
                        <a 
                            href="https://github.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="platform-link"
                        >
                            View Profile
                        </a>
                    </div>

                    {/* LeetCode Overview */}
                    <div className="platform-card leetcode-card" data-aos="fade-left">
                        <div className="platform-header">
                            <i className="fas fa-code"></i>
                            <h3>LeetCode</h3>
                        </div>
                        <div className="platform-stats">
                            <div className="stat-item">
                                <span className="stat-number">{leetcodeStats.problemsSolved}</span>
                                <span className="stat-label">Problems Solved</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">{leetcodeStats.ranking}</span>
                                <span className="stat-label">Global Rank</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">{leetcodeStats.contests}</span>
                                <span className="stat-label">Contests</span>
                            </div>
                        </div>
                        <a 
                            href="https://leetcode.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="platform-link"
                        >
                            View Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformOverview; 