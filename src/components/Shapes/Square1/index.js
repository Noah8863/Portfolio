import React from 'react';
import './index.scss';
import { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

function Square1() {
    const ref = useRef(null);

    useAnimationFrame((t) => {
        const rotate = Math.sin(t / 10000) * 200;
        const y = (1 + Math.sin(t / 1000)) * -50;
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });

    return (
        <>
            <div className="cube1" ref={ref}>
                <div className="side-cube1 front-cube1" />
                <div className="side-cube1 left-cube1" />
                <div className="side-cube1 right-cube1" />
                <div className="side-cube1 top-cube1" />
                <div className="side-cube1 bottom-cube1" />
                <div className="side-cube1 back-cube1" />
            </div>
        </>
    )
}

export default Square1;