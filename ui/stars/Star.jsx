import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Star = ({ parentRef, delay }) => {
  var [initPos, setInitPos] = useState({ x: 0, y: 0 });
  var [dest, setDest] = useState({ x: 0, y: 0 });
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



  useEffect(() => {
    if (parentRef.current) {
      let w = gsap.getProperty(parentRef.current, 'scrollWidth');
      let h = gsap.getProperty(parentRef.current, 'scrollHeight');
      setInitPos({ x: (w/2), y: (h/2) });
      setDest(getDestination(w, h));
    }
  }, [parentRef]);

  useEffect(
    () => {
      if (parentRef.current && starRef.current) {
        const tl = gsap
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

        return () => tl.kill();
      }
      
    }, [parentRef, delay, dest, initPos]);
  

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