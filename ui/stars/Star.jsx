import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Star = ({ parentRef }) => {
  let w = gsap.getProperty(parentRef.current, 'width');
  let h = gsap.getProperty(parentRef.current, 'height');
  var [initPos, setInitPos] = useState({ x: w / 2, y: h / 2 });
  var [destination, setDestination] = useState({ x: 0, y: 0 });


  const starRef = useRef(null);


  const getDestination = (w, h) => {
    const randNum = Math.random();
    const randX = gsap.utils.random(-(w/2), (w/2));
    const randY = gsap.utils.random(-(h/2), (h/2));

    console.log(destination);

    if (randNum < 0.25) {
      // Top edge
      setDestination({ x: randX, y: -h });
    } else if (randNum < 0.5) {
      // Bottom edge
      setDestination({ x: randX, y: h });
    } else if (randNum < 0.75) {
      // Left edge
      setDestination({ x: -w, y: randY });
    } else {
      // Right edge
      setDestination({ x: -w, y: randY });
    }
  };


  
  useEffect(() => {
    setInitPos({ x: w / 2, y: h / 2 });
    let newDest = getDestination(w, h);
    setDestination(newDest);

    let tl = gsap.timeline({ repeat: -1, repeatRefresh: true })
      .to(starRef.current, {
        x: initPos.x,
        y: initPos.y,
        opacity: 1,
        duration: 0.1,
      })
      .to(starRef.current, {
        x: destination.x,
        y: destination.y,
        scale: 4,
        duration: 2,
        onComplete: () => {
          let newDest = getDestination();
          setDestination(newDest);
          tl.invalidate().restart();
        },
      });

    return () => {
      tl.kill();
    };
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