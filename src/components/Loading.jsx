import React from 'react';
import space from '../assets/space-load.mp4'
function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-80 z-50">
    <video autoPlay loop muted className="w-500px h-500px rounded-full">
      <source src={space} type="video/mp4" />
    </video>
  </div>
  
  );
}

export default Loading;
