import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/vintage.css';
import '../styles/modern.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="branding">
                <h1>Vintage Modern Portfolio</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;