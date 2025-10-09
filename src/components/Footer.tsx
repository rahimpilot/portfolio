import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="mt-16 bg-white border-t border-blue-100">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Rahim Hamza. All rights reserved.</p>
                <div className="flex space-x-5 text-sm">
                    <a className="text-gray-500 hover:text-blue-700 transition-colors" href="https://github.com/rahimpilot" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a className="text-gray-500 hover:text-blue-700 transition-colors" href="https://www.linkedin.com/in/abdulrahim" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;