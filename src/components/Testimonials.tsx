import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Thank you soo much for this recognition.. it's all because of your effort and management that is making me a better PM. Without your lessons, mentorship this was not possible.",
    author: "Riddhi Jain",
    role: "Product Manager"
  },
  {
    text: "Your attention to every detail has made such a difference. It's been incredible to see how much deeper you've all gotten into the R&D process.",
    author: "Magnum Gupta",
    role: "Team Lead"
  },
  {
    text: "A special shoutout to the Product Management team under your leadership—your passion is driving this forward.",
    author: "Engineering Team",
    role: "HROne"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Team Impact</h2>
          <p className="text-gray-400">What my colleagues say about working together</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-xl border border-gray-800"
            >
              <Quote className="w-8 h-8 text-blue-500 mb-4" />
              <p className="text-gray-300 mb-6">{item.text}</p>
              <div>
                <p className="font-semibold text-white">{item.author}</p>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}