import React from 'react';
import './hero.scss';

function Hero(){
    return (
       
        <section id="heroContainer">
            <div className="test1">
                <p>Anything in this container will not be effected by the navbar</p>
                <h1>Hello, my name is Noah Hoffman</h1>
            </div>
        </section>
    )  
}

export default Hero;