import React from 'react';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <p>Welcome to my portfolio! I am a tech-savvy individual with a passion for blending vintage aesthetics with modern technology.</p>
            <h2>Skills</h2>
            <ul>
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>JavaScript & TypeScript</li>
                <li>React & Redux</li>
                <li>Responsive Design</li>
            </ul>
            <h2>Background</h2>
            <p>I have a background in computer science and have worked on various projects that showcase my ability to create visually appealing and functional web applications.</p>
        </div>
    );
};

export default About;