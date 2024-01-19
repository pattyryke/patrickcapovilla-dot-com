import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Star from './Star';
import Mapper from './functions/Mapper';


const Stars = ({ parentRef, delay }) => {
  const [width, setWidth] = useState(gsap.getProperty(parentRef.current, 'scrollWidth'));
  const [height, setHeight] = useState(gsap.getProperty(parentRef.current, 'scrollHeight'));
  var mapper = new Mapper(Number(width), Number(height));

  const [star, setStar] = useState();
  const starRef = useRef(null);


  useEffect(() => {
    if (parentRef.current) {
      setWidth(gsap.getProperty(parentRef.current, 'scrollWidth'));
      setHeight(gsap.getProperty(parentRef.current, 'scrollHeight'));

      mapper.initialize(width, height);

      console.log('mapper:', mapper.x(100), mapper.y(100));
      console.log('(x, y): (',width,height,')')

      const newStar = new Star(mapper.x(100), mapper.y(100));
      setStar(newStar);
      console.log(newStar);
    }
  }, [parentRef.current]);

  useEffect(() => {
    if (parentRef.current && starRef.current && star) {
      star.newDestination();
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
        ease: 'power4.in',
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
