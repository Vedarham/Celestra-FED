import React from 'react';
import { Clock, Users, Award } from 'lucide-react';

const courses = [
  {
    title: "Introduction to Robotics",
    description: "Learn the basics of robotics and build your first robot",
    duration: "8 weeks",
    students: "150+",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Python Programming",
    description: "Master Python programming with hands-on projects",
    duration: "10 weeks",
    students: "200+",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "AI Fundamentals",
    description: "Explore artificial intelligence and machine learning",
    duration: "12 weeks",
    students: "100+",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Our Featured Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="card">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">{course.title}</h3>
              <p className="text-gray-300 mb-4">{course.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Users size={16} className="mr-1" />
                  {course.students}
                </div>
                <div className="flex items-center">
                  <Award size={16} className="mr-1" />
                  {course.level}
                </div>
              </div>
              <button className="w-full btn-primary">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}