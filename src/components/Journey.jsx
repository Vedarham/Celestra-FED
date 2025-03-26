import React from 'react';
import { Smile, Heart, Laugh, Frown, Star, Brain } from 'lucide-react';

const timelineData = [
  {
    title: "Getting Started",
    badge: "primary",
    icon: <Smile className="w-6 h-6" />,
    description: "Begin your journey into the fascinating world of robotics and programming. Learn the fundamental concepts and basic principles.",
    time: "Step 1"
  },
  {
    title: "Core Concepts",
    badge: "danger",
    icon: <Heart className="w-6 h-6" />,
    description: "Master the core concepts of programming, electronics, and mechanical design. Build your first simple robots and circuits.",
    time: "Step 2"
  },
  {
    title: "Advanced Projects",
    badge: "success",
    icon: <Star className="w-6 h-6" />,
    description: "Take on more complex projects, learn about sensors, actuators, and advanced programming concepts. Create autonomous robots.",
    time: "Step 3"
  },
  {
    title: "Problem Solving",
    badge: "warning",
    icon: <Frown className="w-6 h-6" />,
    description: "Develop critical thinking and problem-solving skills through challenging projects and real-world applications.",
    time: "Step 4"
  },
  {
    title: "Team Projects",
    badge: "secondary",
    icon: <Laugh className="w-6 h-6" />,
    description: "Work in teams on larger projects, participate in robotics competitions, and learn collaboration skills.",
    time: "Step 5"
  },
  {
    title: "Innovation",
    badge: "info",
    icon: <Brain className="w-6 h-6" />,
    description: "Create your own innovative projects, explore cutting-edge technologies, and prepare for a career in robotics and technology.",
    time: "Step 6"
  }
];

const getBadgeColor = (type) => {
  const colors = {
    primary: "bg-blue-500",
    danger: "bg-red-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    secondary: "bg-purple-500",
    info: "bg-cyan-500"
  };
  return colors[type] || colors.secondary;
};

export default function Journey() {
  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-16">Your Learning Journey</h2>
        
        <div className="relative pl-8 sm:pl-16">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-8 top-0 h-full w-1 bg-gray-700 rounded"></div>

          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline icon */}
              <div className={`absolute left-[-16px] sm:left-[-24px] top-0 w-8 h-8 rounded-full flex items-center justify-center ${getBadgeColor(item.badge)} shadow-lg transform -translate-y-1/2`}>
                {item.icon}
              </div>

              {/* Content */}
              <div className="ml-6 sm:ml-12">
                <div className="card overflow-hidden backdrop-blur-lg">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold text-white flex items-center gap-3">
                        {item.title}
                        <span className={`text-xs px-2 py-1 rounded ${getBadgeColor(item.badge)}`}>
                          {item.time}
                        </span>
                      </h4>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}