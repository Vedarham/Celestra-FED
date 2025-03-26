import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CelestialBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create stars
    const starCount = 200;
    const container = containerRef.current;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }

    // Animate nebula clouds
    const createNebula = () => {
      const nebula = document.createElement('div');
      nebula.className = 'nebula';
      nebula.style.left = `${Math.random() * 100}%`;
      nebula.style.top = `${Math.random() * 100}%`;
      container.appendChild(nebula);

      gsap.fromTo(nebula, 
        {
          scale: 0,
          opacity: 0,
          rotation: 0
        },
        {
          scale: 2,
          opacity: 0.3,
          rotation: 360,
          duration: 20,
          ease: "none",
          onComplete: () => {
            container.removeChild(nebula);
            createNebula();
          }
        }
      );
    };

    // Create multiple nebulas
    for (let i = 0; i < 3; i++) {
      createNebula();
    }

    // Mouse parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(container, {
        duration: 1,
        x: xPos,
        y: yPos,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    />
  );
}