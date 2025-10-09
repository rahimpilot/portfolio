import React from "react";
import SkillBar from "../components/SkillBar";
import ContactForm from "../components/ContactForm";

// Neo‑Minimal Gradient Accent Layout
export default function Home() {
  return (
    <main className="font-sans bg-white text-slate-700">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Gradient Accent Blob */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-gradient-to-tr from-blue-600 via-indigo-400 to-cyan-400 opacity-30 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative">
          <div className="max-w-3xl">
            <p className="inline-flex items-center text-xs tracking-wider font-semibold uppercase bg-blue-50 text-blue-700 px-3 py-1 rounded-full mb-6 border border-blue-100">Technical Support Specialist</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
              Elevating customer trust through <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">reliable support systems</span>.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8 max-w-2xl">
              16+ years strengthening resolution speed, platform reliability and user satisfaction across multi-channel environments.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="px-6 py-3 rounded-lg bg-slate-900 text-white font-medium shadow-sm hover:shadow-md hover:bg-slate-800 transition">Get in touch</a>
              <a href="/resume.pdf" className="px-6 py-3 rounded-lg border border-slate-300 font-medium hover:border-slate-500 transition">Download Resume</a>
              <span className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full bg-green-100 text-green-700 font-medium"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>Available</span>
            </div>
          </div>
        </div>
        {/* Subtle divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </section>

      {/* KPI Band */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 mb-20 relative">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Tickets Resolved', value: '12k+' },
            { label: 'Avg First Response', value: '< 15 min' },
            { label: 'CSAT Satisfaction', value: '97%' },
            { label: 'Platforms Supported', value: 'Windows · macOS · Linux' }
          ].map(kpi => (
            <div key={kpi.label} className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md transition">
              <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-2">{kpi.label}</div>
              <div className="text-2xl font-semibold text-slate-900">{kpi.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 mb-24" id="experience">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-10">Experience</h2>
        <div className="space-y-8">
          <ExperienceCard
            role="Technical Customer Service"
            company="OPENLANE Canada"
            period="Oct 2024 – Present"
            color="border-blue-500"
            bullets={[
              'Improved multi-channel resolution flow; reduced average handling time via structured triage.',
              'Troubleshot platform & website issues, documenting root causes for faster recurrence handling.',
              'Integrated findings into Salesforce notes to streamline cross-team escalation quality.',
              'Identified repeating patterns and proposed process adjustments (knowledge base updates).'
            ]}
          />
          <ExperienceCard
            role="Customer Service Associate"
            company="Tech Mahindra (Canada)"
            period="Nov 2023 – Sep 2024"
            color="border-indigo-500"
            bullets={[
              'Delivered first-line network connectivity troubleshooting with consistent SLA adherence.',
              'Optimized ticket routing automation; improved queue efficiency.',
              'Guided end users on self-serve portal adoption to reduce inbound load.',
              'Monitored performance indicators and escalated anomalies promptly.'
            ]}
          />
          <ExperienceCard
            role="IT Service Desk Analyst"
            company="Accenture (India)"
            period="Nov 2011 – Aug 2012"
            color="border-cyan-500"
            bullets={[
              'Provided multi-channel incident response covering hardware, OS & network.' ,
              'Maintained detailed ticket lifecycle documentation improving knowledge base accuracy.',
              'Supported escalation pathways ensuring minimal downtime for end users.'
            ]}
          />
          <ExperienceCard
            role="Technical Support Advisor (Apple Mac)"
            company="Aditya Birla Minacs"
            period="Jan 2008 – Feb 2009"
            color="border-emerald-500"
            bullets={[
              'Diagnosed macOS faults & executed recovery / reinstallation procedures.',
              'Managed backup & restore operations ensuring data continuity.',
              'Delivered user environment setup & connectivity troubleshooting.'
            ]}
          />
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 mb-24" id="skills">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-10">Skills</h2>
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div className="space-y-6">
            <SkillBar skill="Troubleshooting & Problem Solving" level={90} />
            <SkillBar skill="Windows / macOS / Linux" level={85} />
            <SkillBar skill="Networking Fundamentals" level={80} />
            <SkillBar skill="Ticketing (Salesforce)" level={75} />
            <SkillBar skill="Application Support" level={80} />
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Core Focus Areas</h3>
            <ul className="space-y-3 text-sm text-slate-600 list-disc ml-5">
              <li>Systematic root cause analysis & documentation</li>
              <li>Multi-channel support optimization & workflow triage</li>
              <li>Knowledge base enrichment & process refinement</li>
              <li>Cross-team communication & escalation clarity</li>
              <li>User experience empathy & retention mindset</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Volunteering */}
      <section className="max-w-6xl mx-auto px-6 mb-24 grid gap-10 md:grid-cols-3" id="about">
        <InfoPanel title="Education" items={[
          'Bachelor – Alagappa University (WES Accredited)',
          'Higher Secondary – ICA School'
        ]} />
        <InfoPanel title="Volunteering" items={[
          'Dubai Cares & Emirates NBD (7 yrs)',
          'FIFA World Cup 2026 (Enrolled)'
        ]} />
        <InfoPanel title="Interests" items={[
          'Technology research', 'Technical writing', 'Solo travel', 'Cinema'
        ]} />
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-6 mb-32" id="contact">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Let’s Connect</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Open to roles where reliability, user empathy and methodical technical support create measurable customer impact.</p>
        </div>
        <ContactForm />
      </section>

      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Rahim Hamza · Technical Support Specialist
      </footer>
    </main>
  );
}

// Inline lightweight presentational helpers
interface ExperienceCardProps {
  role: string; company: string; period: string; bullets: string[]; color: string;
}
const ExperienceCard: React.FC<ExperienceCardProps> = ({ role, company, period, bullets, color }) => (
  <div className={`relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition p-6 ${color} pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-l-2xl before:bg-current/0`}> 
    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{role}</h3>
        <p className="text-sm font-medium text-blue-600">{company}</p>
      </div>
      <span className="text-xs font-medium tracking-wide text-slate-500 bg-slate-100 px-2 py-1 rounded">{period}</span>
    </div>
    <ul className="space-y-2 text-sm text-slate-600 list-disc ml-5">
      {bullets.map(b => <li key={b}>{b}</li>)}
    </ul>
  </div>
);

interface InfoPanelProps { title: string; items: string[] }
const InfoPanel: React.FC<InfoPanelProps> = ({ title, items }) => (
  <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
    <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>
    <ul className="space-y-2 text-sm text-slate-600 list-disc ml-5">
      {items.map(i => <li key={i}>{i}</li>)}
    </ul>
  </div>
);