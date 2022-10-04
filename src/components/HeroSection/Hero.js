import React from "react";
import "./hero.scss";
import Square1 from "../Shapes/Square1/index";
import Square2 from "../Shapes/Square2/index";
import Avatar from "../../Images/Avatar.PNG";
// import Sphere from '../Shapes/Sphere/index'

function Hero() {
  return (
    <section id="heroContainer">
      <div id="top-container">
        <p id="top-container-title">Imaginative Developer</p>
      </div>
      <div id="middle-container">
        <div id="avatar-container">
          <img id="avatar" src={Avatar} />
        </div>
      </div>
      <div id="bottom-container"></div>
    </section>
  );
}

export default Hero;

{
  /* <div className="shapes">
        <Square1></Square1>
            <Square2></Square2>
      </div> */
}
