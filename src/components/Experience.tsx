import React from 'react';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

const experiences = [
  {
    role: "Associate Director, Products",
    company: "HROne",
    period: "Sep 2023 - Present",
    description: "Leading Product Management and UI/UX teams at a top-tier HRMS company. G2 Ranked Best Software Products globally for 2024."
  },
  {
    role: "Product Lead",
    company: "Paytail",
    period: "2022 - 2023",
    description: "Led product strategy and development, earning 'Product King' award for exceptional contributions to fintech innovation."
  },
  {
    role: "Guest Faculty",
    company: "ISB Executive Education",
    period: "May 2022 - Present",
    description: "Mentoring candidates for Product Management programs at the Center of Executive Education."
  }
];

const achievements = [
  "CAT 2019: 99.87 percentile",
  "CFA Level 2 Cleared",
  "Financial Risk Manager (GARP)",
  "Product King Award - Paytail"
];

export default function Experience() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="w-6 h-6 text-slate-700" />
          <h2 className="text-2xl font-bold text-slate-800">Professional Journey</h2>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-slate-800">{exp.role}</h3>
              <p className="text-slate-600 font-medium">{exp.company}</p>
              <p className="text-sm text-slate-500 mb-3">{exp.period}</p>
              <p className="text-slate-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-6 h-6 text-slate-700" />
          <h2 className="text-2xl font-bold text-slate-800">Achievements</h2>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-slate-600" />
                <span className="text-slate-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}