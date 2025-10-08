import React from "react";
import SkillBar from "../components/SkillBar";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 font-sans">
      <header className="flex flex-col items-center py-10 bg-white shadow-md rounded-b-3xl mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-2 tracking-tight">RAHIM HAMZA</h1>
        <p className="text-lg text-gray-700">
          Technical Support Specialist | 16+ Years Experience
        </p>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            📍 Kitchener, Ontario | 📞 548-577-1744
          </p>
          <p className="text-gray-600">
            ✉️ <a className="text-blue-600 underline hover:text-blue-800" href="mailto:raimu456@me.com">raimu456@me.com</a> | 
            🔗 <a className="text-blue-600 underline hover:text-blue-800" href="https://www.linkedin.com/in/abdulrahim">LinkedIn</a>
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 pb-8">
        {/* Mission Statement */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Mission</h2>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <p className="text-gray-700 text-lg leading-relaxed">
              Delivering exceptional technical support through systematic problem-solving, leveraging 16+ years of experience to provide scalable customer solutions and drive operational excellence in fast-paced environments.
            </p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Professional Experience</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Technical Customer Service</h3>
                  <p className="text-blue-600 font-semibold">OPENLANE Canada</p>
                </div>
                <span className="text-sm text-gray-500 bg-green-100 px-2 py-1 rounded">Oct 2024 – Present</span>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Multi-channel technical support (chat, phone, email)</li>
                <li>• Website troubleshooting & problem resolution</li>
                <li>• Salesforce system integration & documentation</li>
                <li>• Cross-team collaboration for complex issues</li>
                <li>• Pattern analysis & solution optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-cyan-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Customer Service Associate</h3>
                  <p className="text-blue-600 font-semibold">Tech Mahindra, Canada</p>
                </div>
                <span className="text-sm text-gray-500 bg-cyan-100 px-2 py-1 rounded">Nov 2023 – Sep 2024</span>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Network connectivity troubleshooting & resolution</li>
                <li>• Service configuration & customer plan management</li>
                <li>• Performance monitoring & outage response</li>
                <li>• Ticketing system automation & case routing</li>
                <li>• Self-service portal guidance & escalation protocols</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">IT Service Desk Analyst</h3>
                  <p className="text-blue-600 font-semibold">Accenture, India</p>
                </div>
                <span className="text-sm text-gray-500 bg-purple-100 px-2 py-1 rounded">Nov 2011 – Aug 2012</span>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Multi-channel IT support & incident response</li>
                <li>• Hardware/software diagnostics & network troubleshooting</li>
                <li>• Help desk ticketing & incident lifecycle management</li>
                <li>• Tier escalation protocols & knowledge base contribution</li>
                <li>• Equipment provisioning & user communication</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Technical Support Advisor</h3>
                  <p className="text-blue-600 font-semibold">Aditya Birla Minacs</p>
                </div>
                <span className="text-sm text-gray-500 bg-orange-100 px-2 py-1 rounded">Jan 2008 – Feb 2009</span>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• macOS diagnostic & system recovery operations</li>
                <li>• System reinstallation & user environment setup</li>
                <li>• Backup/restore procedures & data management</li>
                <li>• Software deployment & application troubleshooting</li>
                <li>• Network configuration & service center coordination</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Key Skills & Expertise</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Skills</h3>
                <div className="space-y-4">
                  <SkillBar skill="Troubleshooting & Problem Solving" level={90} />
                  <SkillBar skill="Windows/macOS/Linux" level={85} />
                  <SkillBar skill="Networking Fundamentals" level={80} />
                  <SkillBar skill="Ticketing Systems" level={75} />
                  <SkillBar skill="Application & Software Support" level={80} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Core Competencies</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">🔧</div>
                    <div className="text-sm font-medium text-blue-800">Technical Support</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">🎯</div>
                    <div className="text-sm font-medium text-green-800">Problem Solving</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">📞</div>
                    <div className="text-sm font-medium text-purple-800">Customer Service</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">🌐</div>
                    <div className="text-sm font-medium text-orange-800">Network Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mb-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">🌟 Community</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Dubai Cares & Emirates NBD (7 years)</li>
                <li>• FIFA World Cup 2026 Volunteer</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">🎓 Education</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Bachelor's Degree - Alagappa University</li>
                <li>• Higher Secondary - ICA School</li>
                <li>• WES Accredited</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">🎯 Interests</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Technology Research</li>
                <li>• Technical Writing</li>
                <li>• Solo Travel</li>
                <li>• Cinema</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">Let's Connect</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-blue-200">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Rahim Hamza - Technical Support Specialist
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">✅ Available for Opportunities</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">🚀 Ready to Start</span>
          </div>
        </footer>

      </div>
    </main>
  );
}