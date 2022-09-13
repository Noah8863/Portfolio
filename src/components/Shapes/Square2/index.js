import React from 'react';
import './index.scss';
import { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

function Square2() {
    const ref = useRef(null);

    useAnimationFrame((t) => {
        const rotate = Math.sin(t / 10000) * 200;
        const y = (1 + Math.sin(t / 1000)) * -50;
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });

    return (
        <>
            <div className="cube2" ref={ref}>
                <div className="side-cube2 front-cube2" />
                <div className="side-cube2 left-cube2" />
                <div className="side-cube2 right-cube2" />
                <div className="side-cube2 top-cube2" />
                <div className="side-cube2 bottom-cube2" />
                <div className="side-cube2 back-cube2" />
            </div>
        </>
    )
}

export default Square2;