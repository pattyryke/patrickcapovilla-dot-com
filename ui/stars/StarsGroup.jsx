import React, { useRef } from "react";
import Star from "./Star";


const StarsGroup = ({ numStars }) => {
  const parentRef = useRef(null);
  const numberOfStars = numStars;
  const staggerDelay = 0.1;


  return (
    <div 
      ref={parentRef} 
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh'
      }}>
        {Array.from({ length: numberOfStars }).map((_, index) => (
          <Star
            key={index}
            parentRef={parentRef}
            delay={index * staggerDelay}
          />
        ))}
      </div>
  );
};

export default StarsGroup;