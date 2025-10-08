import React from "react";
import "../styles/vintage.css";
import SkillBar from "../components/SkillBar";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="vintage-bg vintage-font">
      <header className="header">
        <div className="header-content">
          <img src="/profile-photo.svg" alt="Rahim Hamza Profile Photo" className="profile-photo" />
          <div className="header-text">
            <h1>RAHIM HAMZA</h1>
            <p>
              45 Lomond Lane, Kitchener | 548-577-1744 | <a href="mailto:raimu456@me.com">raimu456@me.com</a> | <a href="https://www.linkedin.com/in/abdulrahim">LinkedIn</a>
            </p>
          </div>
        </div>
      </header>
      <section className="objective">
        <h2>Objective</h2>
        <p>
          To secure a position in a dynamic and customer-focused call centre where I can leverage my excellent communication and problem-solving skills to provide outstanding service. I am dedicated to delivering exceptional customer experiences and contributing to the success of the team while continuously improving my abilities in a fast-paced environment.
        </p>
      </section>
      <section className="experience">
        <h2>Professional Experience</h2>
        <ul>
          <li>
            <strong>Technical Customer Service</strong> – OPENLANE Canada (Oct 2024 – Present)
            <ul>
              <li>Assisting customers with complex technical support inquiries via chat, phone, and email.</li>
              <li>Diagnose, address, and resolve technical problems for the website.</li>
              <li>Record all interactions and solutions within the sales force system.</li>
              <li>Collaborate with IT teams to resolve complex problems.</li>
              <li>Identify recurring problems and recommend solutions.</li>
              <li>Stay updated on industry trends and company products.</li>
              <li>Provide excellent customer service.</li>
            </ul>
          </li>
          <li>
            <strong>Customer Service Associate</strong> – Tech Mahindra, Canada (Nov 2023 – Sep 2024)
            <ul>
              <li>First-line support for internet connectivity issues.</li>
              <li>Help customers with price plan changes, device upgrades.</li>
              <li>Assist with setup and configuration of internet services.</li>
              <li>Monitor network performance and respond to outages.</li>
              <li>Create cases/tickets and assign to BOT.</li>
              <li>Analyze client responses and help accordingly.</li>
              <li>Guide users on telecom self-serve portal.</li>
              <li>Escalate chats to supervisors as needed.</li>
              <li>Upsell financial products and exclusive plans.</li>
            </ul>
          </li>
          <li>
            <strong>IT Service Desk Analyst</strong> – Accenture, India (Nov 2011 – Aug 2012)
            <ul>
              <li>Immediate help for IT issues via phone, email, or in person.</li>
              <li>Troubleshoot hardware, software, and network problems.</li>
              <li>Log and track requests using help desk ticketing system.</li>
              <li>Prioritize and resolve incidents.</li>
              <li>Escalate complex problems to Tier teams.</li>
              <li>Setup and maintain IT equipment and software.</li>
              <li>Communicate clearly with users.</li>
              <li>Maintain detailed records and contribute to knowledge base.</li>
            </ul>
          </li>
          <li>
            <strong>Technical Support Advisor – Project Apple Macintosh</strong> – Aditya Birla Minacs (Jan 2008 – Feb 2009)
            <ul>
              <li>Diagnose MAC OS issues over call support.</li>
              <li>Re-installation and user setup.</li>
              <li>Configure and manage backups, restore.</li>
              <li>Install, update, troubleshoot software and applications.</li>
              <li>Troubleshoot OS errors using ASR and Recovery Console.</li>
              <li>LAN and WLAN troubleshooting.</li>
              <li>Schedule appointments with Apple Service centres.</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="skills">
        <h2>Key Skills / Technical Skills</h2>
        <SkillBar skill="Troubleshooting & Problem Solving" level={90} />
        <SkillBar skill="Windows/macOS/Linux" level={85} />
        <SkillBar skill="Networking Fundamentals" level={80} />
        <SkillBar skill="Ticketing Systems" level={75} />
        <SkillBar skill="Application & Software Support" level={80} />
      </section>
      <section className="volunteering">
        <h2>Volunteering Experience</h2>
        <ul>
          <li>Dubai Cares & Emirates NBD exchanges (7 years)</li>
          <li>Currently enrolled in FIFA World Cup 2026 (US, Mexico, Canada)</li>
        </ul>
      </section>
      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>High School – ICA English Higher Secondary School, India (May 2003)</li>
          <li>Higher Secondary – ICA English Higher Secondary School, Trichur (May 2005)</li>
          <li>Bachelor's Degree – Alagappa University (WES Accredited) (Jan 2012)</li>
        </ul>
      </section>
      <section className="hobbies">
        <h2>Hobbies</h2>
        <ul>
          <li>Writing blogs</li>
          <li>Learning new technology and science</li>
          <li>Solo traveling</li>
          <li>Watching movies</li>
        </ul>
      </section>
      <section className="contact">
        <ContactForm />
      </section>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Rahim Hamza</p>
      </footer>
    </main>
  );
}