import React from "react";
import "./hero.scss";
import Square1 from "../Shapes/Square1/index";
import Square2 from "../Shapes/Square2/index";
import Avatar from "../../Images/Avatar.PNG";
// import Sphere from '../Shapes/Sphere/index'

function Hero() {
  return (
    <section id="heroContainer">
      {/* <div class="main-hero-container">
        <div id="hero-statement">
          <h1>
            Hello, my name is Noah. I'm a full stack software developer with a
            strong interest in Front End.
          </h1>
        </div>
        <div id="hero-picture-container">
          <img id="avatar-pic" src={Avatar}></img>
          <div className="solar-system"> 
            <div className="planet planet1">
              <div className="planet planet2">
                <div className="planet planet3">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="invisible-container"></div>
      </div> */}
      <div className="leftSideHeroContainer">
        <p>HELLO</p>
        <p>I'm <span className="name">Noah Hoffman</span> a Full Stack Web Developer</p> <br></br>
        <p>Passionate about creating dynamic and user-friendly digital experiences. With a strong foundation in both frontend and backend development, I have the skills to bring design concepts to life and deliver seamless web applications.</p>
        <br></br>
        <button id="hireMeBtn">Hire Me</button><button id="portfolioBtn">Portfolio</button>
      </div>
      <div className="rightSideHeroContainer">
        <img id="avatar-pic" src={Avatar}></img>
      </div>
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
