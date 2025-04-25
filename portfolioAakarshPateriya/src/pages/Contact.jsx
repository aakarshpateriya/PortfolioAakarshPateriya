import React from 'react';
import '../App.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Email: aakarshpateriya123@gmail.com</p>
                    <p>Phone: +91 9285292240</p>
                    <p>Location: Chhattarpur, India</p>
                </div>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact; 