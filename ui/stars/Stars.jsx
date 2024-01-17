import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { easings } from 'react-spring';

const Stars = React.memo(({ spaceWidth, spaceHeight, onRemove, id }) => {
    // Set the initial position to the center of the space
    const initialPosition = { x: (spaceWidth / 2), y: (spaceHeight / 2), scale: 0.25 };
    const destination = getDirection(spaceWidth, spaceHeight);
    
    // State to track the current position
    const [position, setPosition] = useState(initialPosition);
  
    useEffect(() => {
      setPosition({ ...destination, scale: 1 });
    }, []);

    const distance = calculateDistance(initialPosition, destination);
    const duration = getDuration(distance);
  
    const animationProps = useSpring({
        from: { transform: `translate(${initialPosition.x}px, ${initialPosition.y}px) scale(${initialPosition.scale})` },
        to: { transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})` },
        config: { 
            duration: duration,
        },
        onRest: () => onRemove(id)
      });
  
    return (
      <animated.div
        style={{
          ...animationProps,
          zIndex: '2',
          position: 'absolute',
          width: '4px',
          height: '4px',
          backgroundColor: 'yellow'
        }}
        className="star"
      ></animated.div>
    );
  });

  const calculateDistance = (initialPosition, destination) => {
    const dx = destination.x - initialPosition.x;
    const dy = destination.y - initialPosition.y;
    return Math.sqrt(dx * dx + dy * dy);
  };
  
  const getDuration = (distance) => {
    const minSpeed = 250; // Minimum speed
    const maxSpeed = 3000; // Maximum speed
    // Adjust the factor to control the speed of the animation
    const speedFactor = 3
    return Math.min(Math.max(distance * speedFactor, minSpeed), maxSpeed);
  };

  const getDirection = (width, height) => {
    const randNum = Math.random() * 100;
    const randX = Math.random() * width;
    const randY = Math.random() * height;
  
    if (randNum < 25) {
      return { x: randX, y: -4 }; // Top edge
    } else if (randNum < 50) {
      return { x: randX, y: height+4 }; // Bottom edge
    } else if (randNum < 75) {
      return { x: -4, y: randY }; // Left edge
    } else {
      return { x: width+4, y: randY }; // Right edge
    }
}

export default Stars;
