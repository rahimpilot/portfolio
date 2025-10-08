import React, { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="bg-gray-800 border border-green-500 rounded p-6 shadow-lg shadow-green-500/20" onSubmit={handleSubmit}>
      <div className="text-lg mb-4">
        <span className="text-green-400"># Contact Interface</span>
      </div>
      {submitted ? (
        <div className="text-center text-green-400">
          <div className="text-2xl mb-2">✓ TRANSMISSION_COMPLETE</div>
          <p>Message received. Response protocol initiated.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-green-400 text-sm mb-1">--name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter identifier..." 
              className="w-full px-3 py-2 bg-black border border-gray-600 rounded text-green-400 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:shadow-sm focus:shadow-green-500/50 font-mono"
              required 
            />
          </div>
          <div>
            <label className="block text-green-400 text-sm mb-1">--email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="contact@domain.ext" 
              className="w-full px-3 py-2 bg-black border border-gray-600 rounded text-green-400 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:shadow-sm focus:shadow-green-500/50 font-mono"
              required 
            />
          </div>
          <div>
            <label className="block text-green-400 text-sm mb-1">--message</label>
            <textarea 
              name="message" 
              placeholder="Compose transmission..."
              rows={4}
              className="w-full px-3 py-2 bg-black border border-gray-600 rounded text-green-400 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:shadow-sm focus:shadow-green-500/50 resize-none font-mono"
              required 
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-green-600 text-black py-2 px-4 rounded font-mono font-bold hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors"
          >
            [EXECUTE TRANSMISSION]
          </button>
        </div>
      )}
    </form>
  );
}
