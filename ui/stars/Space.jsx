import React, { useEffect, useState, useRef } from 'react';
import StarsGroup from './StarsGroup';

const Space = () => {
    let spaceVisor = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        // Function to update dimensions
        const updateDimensions = () => {
            if (spaceVisor.current) {
                console.log('Dimensions updated')
                setWidth(spaceVisor.current.offsetWidth);
                setHeight(spaceVisor.current.offsetHeight);
            }
        };

        // Initial dimensions update
        updateDimensions();

        // Set up a resize observer for responsive adjustments
        const resizeObserver = new ResizeObserver(() => {
            updateDimensions();
        });

        if (spaceVisor.current) {
            resizeObserver.observe(spaceVisor.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (spaceVisor.current) {
                resizeObserver.unobserve(spaceVisor.current);
            }
        };
    }, []);
    console.log(width, height);

    return (
        <div ref={spaceVisor} className="space">
            <StarsGroup numStars={50} />
        </div>
    );
};

export default Space;