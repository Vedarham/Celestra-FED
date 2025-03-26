import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Courses from './components/Courses.jsx';
import Journey from './components/Journey.jsx';
import Offerings from './components/Offerings.jsx';
import Sponsors from './components/Sponsors.jsx';
import CelestialBackground from './components/CelestialBackground.jsx';
import RocketLaunch from './components/RocketLaunch.jsx';
import SuccessStories from './components/SuccessStories.jsx';
import Milestones from './components/Milestones.jsx';
import Loading from './components/Loading.jsx';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },6000);
  }, []);
  return (

    <div className="App min-h-screen relative">
    <CelestialBackground />
{isLoading ? (
      <Loading />
    ) : (
      <div className="min-h-screen relative">
      <CelestialBackground />
      <div className="relative z-10">
      
        <Navbar />
        <Hero />
        <Journey />
        <Milestones/>
        <Courses />
        <Offerings />
        <SuccessStories />
        <Sponsors />
      </div>
      <RocketLaunch />
    </div>
    )}
    </div>

   
    
  );
}

export default App;