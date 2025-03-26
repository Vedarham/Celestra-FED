import React from 'react';
import { Users, BookOpen, Rocket, Building2 } from 'lucide-react';
import { useCountUpAnimation } from '../hooks/useScrollAnimation';

const milestones = [
  {
    icon: <Users className="w-8 h-8" />,
    count: "200000",
    label: "Total Users",
    color: "text-blue-400",
    suffix: "+"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    count: "100",
    label: "Total Courses",
    color: "text-purple-400",
    suffix: "+"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    count: "50",
    label: "Total Products",
    color: "text-orange-400",
    suffix: "+"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    count: "5000",
    label: "Total Institutes",
    color: "text-green-400",
    suffix: "+"
  }
];

export default function Milestones() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-orange-500 font-semibold mb-2">STEMbotix Milestone Meter</h4>
          <h2 className="section-title">Success Takes Flight</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative group">
              <div className="card backdrop-blur-lg bg-white/5 p-8 flex flex-col items-center justify-center text-center">
                <div className={`${milestone.color} mb-4 transform transition-transform duration-500 group-hover:scale-110`}>
                  {milestone.icon}
                </div>
                <h3 ref={useCountUpAnimation(milestone.count + milestone.suffix)} className="text-3xl font-bold text-white mb-2">
                  0
                </h3>
                <p className="text-gray-300">{milestone.label}</p>
                
                {/* Decorative orbit */}
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}