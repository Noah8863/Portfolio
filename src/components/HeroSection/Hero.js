import React from 'react';
import './hero.scss';

function Hero(){
    return (
       
        <section id="heroContainer">
            <div className="test1">
                <h1>Hello, my name is Noah Hoffman</h1>
                <p>Anything in this container will not be effected by the navbar</p>
            </div>
        </section>
    )  
}

export default Hero;