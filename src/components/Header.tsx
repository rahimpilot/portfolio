import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-white/90 backdrop-blur sticky top-0 z-20 border-b border-blue-100 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div>
                    <Link to="/" className="text-2xl font-bold tracking-tight text-blue-900">Rahim Hamza</Link>
                    <p className="text-xs text-gray-500 mt-0.5">Technical Support Specialist</p>
                </div>
                <nav>
                    <ul className="flex space-x-8 text-sm font-medium">
                        <li><Link to="/" className="text-gray-600 hover:text-blue-700 transition-colors">Home</Link></li>
                        <li><Link to="/about" className="text-gray-600 hover:text-blue-700 transition-colors">About</Link></li>
                        <li><Link to="/contact" className="text-gray-600 hover:text-blue-700 transition-colors">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;