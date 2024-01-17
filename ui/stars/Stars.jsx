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
      .set(starRef.current, {
        backgroundColor: 'orange',
      })
      .fromTo(starRef.current, {
        x: star.initPos.x,
        y: star.initPos.y,
        opacity: 0,
        scale: 1,
      },
      {
        opacity: 0.2,
        duration: 2,
      })
      .to(starRef.current, {
        x: star.destinationPos.x,
        y: star.destinationPos.y,
        opacity: 1,
        backgroundColor: 'yellow',
        scale: 4,
        duration: gsap.utils.random(2, 15),
        ease: 'power4.inOut',
      }, "<2");


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
