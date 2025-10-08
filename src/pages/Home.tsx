import React from "react";
// import "../styles/vintage.css";
import SkillBar from "../components/SkillBar";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-900 text-green-400 font-mono">
        {/* Terminal-style Header */}
        <div className="bg-black border-b border-green-500 p-4">
          <div className="flex items-center space-x-2 text-sm">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400">rahim@terminal:~$</span>
          </div>
        </div>

        {/* Hero Section - Terminal Style */}
        <div className="bg-black text-green-400 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="text-gray-500">rahim@system:~$ </span>
              <span className="text-green-400">whoami</span>
            </div>
            <div className="text-4xl md:text-6xl font-bold mb-4 text-green-300 glow">
              RAHIM_HAMZA.exe
            </div>
            <div className="text-lg mb-6">
              <span className="text-gray-500">$ </span>
              <span className="text-cyan-400">cat profile.txt</span>
            </div>
            <div className="bg-gray-800 border border-green-500 rounded p-6 mb-6 shadow-lg shadow-green-500/20">
              <div className="space-y-2 text-green-300">
                <div><span className="text-cyan-400">Role:</span> Technical Support Specialist</div>
                <div><span className="text-cyan-400">Location:</span> Kitchener, Ontario</div>
                <div><span className="text-cyan-400">Experience:</span> 16+ years</div>
                <div><span className="text-cyan-400">Status:</span> <span className="text-green-400 animate-pulse">● AVAILABLE</span></div>
                <div><span className="text-cyan-400">Contact:</span> 
                  <a href="mailto:raimu456@me.com" className="text-blue-400 hover:text-blue-300 glow-blue"> raimu456@me.com</a> | 
                  <a href="https://www.linkedin.com/in/abdulrahim" className="text-blue-400 hover:text-blue-300 glow-blue"> LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="text-gray-300">
              <span className="text-gray-500">$ </span>
              <span className="text-yellow-400">echo "Specializing in troubleshooting, customer service, and technical excellence"</span>
            </div>
          </div>
        </div>
        {/* Mission Statement - Code Block Style */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="text-lg mb-4">
              <span className="text-gray-500">$ </span>
              <span className="text-cyan-400">cat mission.sh</span>
            </div>
            <div className="bg-gray-800 border border-cyan-500 rounded-lg p-6 shadow-lg shadow-cyan-500/20">
              <div className="text-gray-300">
                <span className="text-purple-400">#!/bin/bash</span><br/>
                <span className="text-green-400"># Mission: Technical Excellence</span><br/>
                <span className="text-yellow-400">function</span> <span className="text-blue-400">mission</span>() {`{`}<br/>
                <span className="ml-4 text-gray-200">
                  echo "Delivering exceptional technical support through systematic problem-solving,"<br/>
                  echo "leveraging 16+ years of experience to provide scalable customer solutions"<br/>
                  echo "and drive operational excellence in fast-paced environments."
                </span><br/>
                {`}`}<br/>
                <span className="text-yellow-400">mission</span>
              </div>
            </div>
          </div>
          {/* Experience Section - Terminal Log Style */}
          <div className="mb-8">
            <div className="text-lg mb-4">
              <span className="text-gray-500">$ </span>
              <span className="text-cyan-400">tail -f career.log</span>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 border-l-4 border-green-500 rounded p-6 shadow-lg glow-border">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-green-300">[CURRENT] Technical Customer Service</h3>
                    <p className="text-cyan-400">OPENLANE Canada</p>
                  </div>
                  <span className="text-yellow-400 text-sm">Oct 2024 – Present</span>
                </div>
                <div className="text-gray-300 space-y-1">
                  <div><span className="text-green-400">●</span> Multi-channel technical support (chat, phone, email)</div>
                  <div><span className="text-green-400">●</span> Website troubleshooting & problem resolution</div>
                  <div><span className="text-green-400">●</span> Salesforce system integration & documentation</div>
                  <div><span className="text-green-400">●</span> Cross-team collaboration for complex issues</div>
                  <div><span className="text-green-400">●</span> Pattern analysis & solution optimization</div>
                </div>
              </div>
              <div className="bg-gray-800 border-l-4 border-cyan-500 rounded p-6 shadow-lg glow-border">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-300">Customer Service Associate</h3>
                    <p className="text-blue-400">Tech Mahindra, Canada</p>
                  </div>
                  <span className="text-yellow-400 text-sm">Nov 2023 – Sep 2024</span>
                </div>
                <div className="text-gray-300 space-y-1">
                  <div><span className="text-cyan-400">●</span> Network connectivity troubleshooting & resolution</div>
                  <div><span className="text-cyan-400">●</span> Service configuration & customer plan management</div>
                  <div><span className="text-cyan-400">●</span> Performance monitoring & outage response</div>
                  <div><span className="text-cyan-400">●</span> Ticketing system automation & case routing</div>
                  <div><span className="text-cyan-400">●</span> Self-service portal guidance & escalation protocols</div>
                </div>
              </div>

              <div className="bg-gray-800 border-l-4 border-purple-500 rounded p-6 shadow-lg glow-border">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-purple-300">IT Service Desk Analyst</h3>
                    <p className="text-blue-400">Accenture, India</p>
                  </div>
                  <span className="text-yellow-400 text-sm">Nov 2011 – Aug 2012</span>
                </div>
                <div className="text-gray-300 space-y-1">
                  <div><span className="text-purple-400">●</span> Multi-channel IT support & incident response</div>
                  <div><span className="text-purple-400">●</span> Hardware/software diagnostics & network troubleshooting</div>
                  <div><span className="text-purple-400">●</span> Help desk ticketing & incident lifecycle management</div>
                  <div><span className="text-purple-400">●</span> Tier escalation protocols & knowledge base contribution</div>
                  <div><span className="text-purple-400">●</span> Equipment provisioning & user communication</div>
                </div>
              </div>

              <div className="bg-gray-800 border-l-4 border-red-500 rounded p-6 shadow-lg glow-border">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-red-300">Technical Support Advisor</h3>
                    <p className="text-blue-400">Aditya Birla Minacs - Apple Macintosh Project</p>
                  </div>
                  <span className="text-yellow-400 text-sm">Jan 2008 – Feb 2009</span>
                </div>
                <div className="text-gray-300 space-y-1">
                  <div><span className="text-red-400">●</span> macOS diagnostic & system recovery operations</div>
                  <div><span className="text-red-400">●</span> System reinstallation & user environment setup</div>
                  <div><span className="text-red-400">●</span> Backup/restore procedures & data management</div>
                  <div><span className="text-red-400">●</span> Software deployment & application troubleshooting</div>
                  <div><span className="text-red-400">●</span> Network configuration & service center coordination</div>
                </div>
              </div>
            </div>
          </div>
          {/* Skills Section - System Monitor Style */}
          <div className="mb-8">
            <div className="text-lg mb-4">
              <span className="text-gray-500">$ </span>
              <span className="text-cyan-400">htop --skills</span>
            </div>
            <div className="bg-black border border-green-500 rounded p-6 shadow-lg shadow-green-500/20">
              <div className="text-green-400 mb-4">
                <span className="text-gray-500">Tasks: </span>5 total, <span className="text-green-400">5 active</span>, 0 sleeping
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-green-300">Troubleshooting & Problem Solving</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded">
                      <div className="bg-green-500 text-xs leading-none py-1 text-center text-black rounded" style={{width: '90%'}}>90%</div>
                    </div>
                    <span className="text-yellow-400">EXPERT</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-300">Windows/macOS/Linux</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded">
                      <div className="bg-cyan-500 text-xs leading-none py-1 text-center text-black rounded" style={{width: '85%'}}>85%</div>
                    </div>
                    <span className="text-cyan-400">ADVANCED</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-300">Networking Fundamentals</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded">
                      <div className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded" style={{width: '80%'}}>80%</div>
                    </div>
                    <span className="text-blue-400">PROFICIENT</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-300">Ticketing Systems</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded">
                      <div className="bg-purple-500 text-xs leading-none py-1 text-center text-white rounded" style={{width: '75%'}}>75%</div>
                    </div>
                    <span className="text-purple-400">SKILLED</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-300">Application & Software Support</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded">
                      <div className="bg-orange-500 text-xs leading-none py-1 text-center text-black rounded" style={{width: '80%'}}>80%</div>
                    </div>
                    <span className="text-orange-400">PROFICIENT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Additional Info - Directory Listing Style */}
          <div className="mb-8">
            <div className="text-lg mb-4">
              <span className="text-gray-500">$ </span>
              <span className="text-cyan-400">ls -la ~/profile/</span>
            </div>
            <div className="bg-gray-800 border border-gray-600 rounded p-6">
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="text-yellow-400 font-bold mb-2">📁 community/</div>
                  <div className="text-gray-300 space-y-1">
                    <div>• Dubai Cares & Emirates NBD (7 years)</div>
                    <div>• FIFA World Cup 2026 Volunteer</div>
                  </div>
                </div>
                <div>
                  <div className="text-blue-400 font-bold mb-2">📚 education/</div>
                  <div className="text-gray-300 space-y-1">
                    <div>• Bachelor's Degree - Alagappa University</div>
                    <div>• Higher Secondary - ICA School</div>
                    <div>• WES Accredited</div>
                  </div>
                </div>
                <div>
                  <div className="text-green-400 font-bold mb-2">🎯 interests/</div>
                  <div className="text-gray-300 space-y-1">
                    <div>• Technology Research</div>
                    <div>• Technical Writing</div>
                    <div>• Solo Travel</div>
                    <div>• Cinema</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Section - Terminal Command */}
          <div className="mb-8">
            <div className="text-lg mb-4">
              <span className="text-gray-500">$ </span>
              <span className="text-cyan-400">./contact.sh --initiate</span>
            </div>
            <ContactForm />
          </div>

          {/* Footer - System Info */}
          <div className="bg-black border-t border-green-500 p-6 text-center">
            <div className="text-green-400">
              <span className="text-gray-500">System: </span>RAHIM_PORTFOLIO_v2.0 | 
              <span className="text-gray-500"> Uptime: </span>{new Date().getFullYear()} | 
              <span className="text-gray-500"> Status: </span><span className="animate-pulse">ONLINE</span>
            </div>
            <div className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} Rahim Hamza - All systems operational
            </div>
          </div>
        </div>
      </main>
    </>
  );
}