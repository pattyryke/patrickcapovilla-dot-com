import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Star from './Star';


const Stars = ({ parentRef, delay }) => {
  const [star, setStar] = useState(null);
  const starRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      const w = gsap.getProperty(parentRef.current, 'scrollWidth');
      const h = gsap.getProperty(parentRef.current, 'scrollHeight');
      const newStar = new Star(w, h);
      console.log(JSON.stringify(newStar));
      setStar(newStar);
    }
  }, [parentRef]);

  useEffect(() => {
    if (parentRef.current && starRef.current && star) {
      const tl = gsap.timeline({ 
        repeat: -1, 
        repeatRefresh: true, 
        delay: delay 
      })
      .fromTo(starRef.current, {
        opacity: 0,
      },
      {
        opacity: 0.1,
      })
      .fromTo(starRef.current, {
        x: star.initPos.x,
        y: star.initPos.y,
        opacity: 0.2,
        backgroundColor: 'orange',
        scale: 1,
      },
      {
        x: star.destinationPos.x,
        y: star.destinationPos.y,
        opacity: 1,
        backgroundColor: 'yellow',
        scale: 4,
        duration: 2,
        ease: 'power1.in',
      }, "<");


      return () => tl.kill();
    }
  }, [parentRef, delay, star]);

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

export default Stars;
