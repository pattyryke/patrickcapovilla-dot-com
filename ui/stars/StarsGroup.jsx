import React, { useState, useEffect } from 'react';
import Star from './Star';

let starIdCounter = 0; // Counter for unique star IDs

const StarsGroup = ({ spaceWidth, spaceHeight, numStars }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newStarId = starIdCounter++;
      setStars(currentStars => [...currentStars, { id: newStarId }]);

      if (stars.length >= numStars) {
        clearInterval(interval);
      }
    }, 100); // Adjust the interval for star appearance

    return () => clearInterval(interval);
  }, [numStars]);

  const onRemove = (id) => {
    setStars(currentStars => currentStars.filter(star => star.id !== id));
  };

  return (
    <div className="space relative w-screen h-screen overflow-hidden">
      {stars.map(star => (
        <Star 
          id={star.id} 
          width={spaceWidth} 
          height={spaceHeight} 
        />
      ))}
    </div>
  );
};

export default StarsGroup;