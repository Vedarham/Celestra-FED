import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const sponsors = [
  "TechCorp",
  "RoboInc",
  "FutureLearn",
  "InnovateX",
  "CodeMasters",
  "AILabs"
];

export default function Sponsors() {
  const circleRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    if (!circleRef.current) return;

    const radius = 150; 
    const totalSponsors = sponsors.length;
    const angleStep = (2 * Math.PI) / totalSponsors;

    
    sponsors.forEach((_, index) => {
      const angle = angleStep * index;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      
      gsap.set(textRefs.current[index], {
        x: x,
        y: y,
        rotation: (angle * 180) / Math.PI 
      });
    });

    
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    
    textRefs.current.forEach((text) => {
      gsap.to(text, {
        rotation: "-=360", 
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    });
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-16">Our Sponsors</h2>
        
        <div className="flex justify-center items-center min-h-[400px]">
          
          <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl"></div>
          
         
          <div 
            ref={circleRef}
            className="relative w-[300px] h-[300px]"
          >
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                ref={el => textRefs.current[index] = el}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg whitespace-nowrap"
              >
                <div className="sponsor-card px-6 py-2 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 transition-colors">
                  {sponsor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}