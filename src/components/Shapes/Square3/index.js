import React from 'react';
import './index.scss';
import { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

function Square3() {
    const ref = useRef(null);

    useAnimationFrame((t) => {
        const rotate = Math.sin(t / 10000) * 380;
        const y = (1 + Math.sin(t / 1000)) * -50;
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });

    return (
        <>
            <div className="cube3" ref={ref}>
                <div className="side-cube3 front-cube3" />
                <div className="side-cube3 left-cube3" />
                <div className="side-cube3 right-cube3" />
                <div className="side-cube3 top-cube3" />
                <div className="side-cube3 bottom-cube3" />
                <div className="side-cube3 back-cube3" />
            </div>
        </>
    )
}

export default Square3;