import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Star = ({ parentRef, delay }) => {
  let w = gsap.getProperty(parentRef.current, 'scrollWidth');
  let h = gsap.getProperty(parentRef.current, 'scrollHeight');
  var [initPos, setInitPos] = useState({ x: (w/2), y: (h/2) });
  var [dest, setDest] = useState({ x: 0, y: 0 })


  const starRef = useRef(null);
  const tl = useRef();


  const getDestination = (width, height) => {
    const randNum = Math.random();
    const randX = gsap.utils.random(0, (width));
    const randY = gsap.utils.random(0, (height));

    if (randNum < 0.25) {
      return { x: randX, y: -10 }; // Top edge
    } else if (randNum < 0.5) {
      return { x: randX, y: (height+10) }; // Bottom edge
    } else if (randNum < 0.75) {
      return { x: -10, y: randY }; // Left edge
    } else {
      return { x: (width+10), y: randY }; // Right edge
    }
  };

  useGSAP(
    () => {
      const stars = gsap.utils.toArray('.star');
      tl.current = gsap
        .timeline({ 
          repeat: -1, 
          repeatRefresh: true, 
          delay: delay 
        })
        .fromTo(starRef.current, {
          x: initPos.x,
          y: initPos.y,
          opacity: 0,
          scale: 1,
        },
        {
          x: dest.x,
          y: dest.y,
          opacity: 1,
          scale: 4,
          duration: 2,
        });
      
    }, {dependencies: [dest, delay], scope: parentRef, revertOnUpdate: false}
  );
  
  useEffect(() => {
    setInitPos({ x: (w/2), y: (h/2) });

    var newDest = getDestination(w, h);
    setDest(newDest);
  }, [w, h]);

  return (
    <div
      ref={starRef}
      className='star'
      style={{
        width: '2px',
        height: '2px',
        backgroundColor: 'yellow',
        position: 'absolute',
      }}
    />
  );
};

export default Star;