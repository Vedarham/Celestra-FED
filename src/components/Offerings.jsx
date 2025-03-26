import React from 'react';
import { Rocket, Code, Notebook as Robot, Brain, Ship as Chip } from 'lucide-react';

const offerings = [
  {
    title: "Robotics Engineering",
    description: "Build and program advanced robots using cutting-edge technology. Learn mechanical design, electronics, and control systems.",
    icon: <Robot className="w-16 h-16" />,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-cyan-400"
  },
  {
    title: "AI Development",
    description: "Master artificial intelligence and machine learning. Create intelligent systems and neural networks.",
    icon: <Brain className="w-16 h-16" />,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400"
  },
  {
    title: "Space Technology",
    description: "Explore space engineering and astronomy. Design satellites and learn about space exploration technologies.",
    icon: <Rocket className="w-16 h-16" />,
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400"
  },
  {
    title: "Programming",
    description: "Learn multiple programming languages and software development. Build applications and systems from scratch.",
    icon: <Code className="w-16 h-16" />,
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-emerald-400"
  },
  {
    title: "IoT Systems",
    description: "Create connected devices and smart systems. Work with sensors, microcontrollers, and wireless technologies.",
    icon: <Chip className="w-16 h-16" />,
    color: "from-yellow-500/20 to-amber-500/20",
    iconColor: "text-amber-400"
  }
];

export default function Offerings() {
  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-16">Our Offerings</h2>
        
        
        <div className="absolute inset-0 flex items-center justify-center opacity-50">
          <div className="w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative h-[800px] flex justify-between gap-4 flex-wrap">
      
          <div >
            <OfferingCard {...offerings[0]} />
          </div>
          
         
          <div >
            <OfferingCard {...offerings[1]} />
          </div>
         
          <div >
            <OfferingCard {...offerings[2]} />
          </div>
          
          <div >
            <OfferingCard {...offerings[3]} />
          </div>
          
          <div >
            <OfferingCard {...offerings[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferingCard({ title, description, icon, color, iconColor }) {
  return (
    <div className="w-[300px] h-[400px] group">
      <div className="relative w-full h-full transform transition-all duration-500 group-hover:scale-[0.98]">
        {/* Main card */}
        <div className={`absolute inset-0 card flex flex-col items-center justify-center bg-gradient-to-br ${color} transform transition-all duration-500 group-hover:translate-y-2`}>
          <div className={`${iconColor} transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2`}>
            {icon}
          </div>
          <h3 className="mt-6 text-2xl font-bold text-white text-center px-4">{title}</h3>
        </div>

        {/* Description overlay */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 translate-y-8 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 rounded-xl flex items-center justify-center p-8">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full"></div>
            <p className="text-white text-center text-lg leading-relaxed">
              {description}
            </p>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}