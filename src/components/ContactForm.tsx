import React, { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Get in Touch</h3>
      {submitted ? (
        <div className="text-center">
          <div className="text-green-600 text-4xl mb-4">✓</div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Message Sent Successfully!</h4>
          <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your full name" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required 
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="your@email.com" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required 
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea 
              name="message" 
              placeholder="Tell me about your technical support needs or project..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              required 
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            Send Message
          </button>
        </div>
      )}
    </form>
  );
}
