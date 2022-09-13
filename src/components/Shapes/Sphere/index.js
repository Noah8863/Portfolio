import React from 'react';
import './index.scss';
import { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

function Sphere() {
    const ref = useRef(null);

    useAnimationFrame((t) => {
        const rotate = Math.sin(t / 1000) * 50;
        const y = (1 + Math.sin(t / 10000)) * -20;
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });

    return (
        <div className="scene">
            <div className="sphere" ref={ref}>
                <div className="hemisphere">
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                </div>
                <div className="hemisphere">
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                </div>
            </div>
        </div>
    )
}

export default Sphere;