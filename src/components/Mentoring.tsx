import React from 'react';
import { Users, Award, BookOpen, Brain } from 'lucide-react';

const mentorships = [
  {
    organization: "Various Colleges",
    role: "Visiting Faculty",
    icon: BookOpen,
    description: "Teaching finance and business in tier 2/3 colleges across India, focusing on real-world applications"
  },
  {
    organization: "Startup Advisor",
    role: "Multiple Startups",
    icon: Brain,
    description: "Guiding early-stage startups in fintech, cleantech, and mental wellness sectors"
  },
  {
    organization: "ISB Executive Education",
    role: "Guest Faculty",
    icon: Users,
    description: "Mentoring Product Management candidates at the Center of Executive Education"
  }
];

export default function Mentoring() {
  return (
    <div className="py-12 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <Award className="w-8 h-8 text-slate-700" />
          <h2 className="text-3xl font-bold text-slate-800">Mentoring Impact</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentorships.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-slate-700" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {item.organization}
              </h3>
              
              <p className="text-slate-700 font-medium mb-3">
                {item.role}
              </p>
              
              <p className="text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}