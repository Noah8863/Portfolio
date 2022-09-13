import React from 'react';
import './hero.scss';
import Square1 from '../Shapes/Square1/index'
import Square2 from '../Shapes/Square2/index'

function Hero() {
    return (
        <section id="heroContainer">
        <div className="test1">
            <h1>Hello, my name is Noah Hoffman</h1>
            <p>Anything in this container will not be effected by the navbar</p>
        </div>
        <div className="shapes">
            <Square1></Square1>
            <Square2></Square2>
        </div>
        </section>
    );
}

export default Hero;