import React from 'react';
import './hero.scss';
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

function Hero() {
    const ref = useRef(null);

    useAnimationFrame((t) => {
        const rotate = Math.sin(t / 10000) * 200;
        const y = (1 + Math.sin(t / 1000)) * -50;
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });

    return (
        <section id="heroContainer">
        <div className="test1">
            <h1>Hello, my name is Noah Hoffman</h1>
            <p>Anything in this container will not be effected by the navbar</p>
        </div>
        <div className="shapes">
            <div className="cube" ref={ref}>
                <div className="side front" />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </div>
        </div>
        </section>
    );
}

export default Hero;