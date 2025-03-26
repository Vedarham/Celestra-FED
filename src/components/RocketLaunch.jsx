import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import meow from '../assets/meow.png';

export default function RocketLaunch() {
  const rocketRef = useRef(null);
  const particlesRef = useRef(null);
  const containerRef = useRef(null);
  const [isLaunched, setIsLaunched] = useState(false);

  const createParticle = () => {
    if (!particlesRef.current) return;

    const particle = document.createElement('div');
    particle.className = 'rocket-particle';

    const randomX = (Math.random() - 0.5) * 20;
    particle.style.left = `${randomX}px`;

    particlesRef.current.appendChild(particle);

    gsap.to(particle, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power1.out',
      onComplete: () => {
        if (particlesRef.current?.contains(particle)) {
          particlesRef.current.removeChild(particle);
        }
      },
    });
  };

  const handleLaunch = () => {
    if (isLaunched || !rocketRef.current || !containerRef.current) return;

    setIsLaunched(true);

    const particleInterval = setInterval(createParticle, 50);

    gsap.to(rocketRef.current, {
      x: '+=5',
      duration: 0.1,
      repeat: 5,
      yoyo: true,
    });

    gsap.to(rocketRef.current, {
      y: -window.innerHeight,
      duration: 2,
      ease: 'power2.in',
      onComplete: () => {
        clearInterval(particleInterval);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        setTimeout(() => {
          setIsLaunched(false);
          gsap.set(rocketRef.current, { y: 0 });
        }, 1000);
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-8 right-8 z-50 cursor-pointer"
      onClick={handleLaunch}
    >
      <div ref={rocketRef} className="relative">
        <img
          src={meow}
          alt="Rocket"
          className="w-10 h-20 object-contain transform hover:scale-105 transition-transform"
        />
        <div
          ref={particlesRef}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        />
      </div>
    </div>
  );
}
