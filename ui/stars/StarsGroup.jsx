import React, { useRef } from "react";
import Stars from "./Stars";


const StarsGroup = ({ numStars }) => {
  const parentRef = useRef(null);
  const numberOfStars = numStars;
  const staggerDelay = 0.025;


  return (
    <div 
      ref={parentRef} 
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh'
      }}>
        {Array.from({ length: numberOfStars }).map((_, index) => (
          <Stars
            key={index}
            parentRef={parentRef}
            delay={index * staggerDelay}
          />
        ))}
        
      </div>
  );
};

export default StarsGroup;