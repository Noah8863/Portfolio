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

      {/* Create div that holds both the avatar pic and solar system in. From there, you can use position:relative to hopfully keep both the avatar and solar system dynamic. 

      Also, create an invisible container that will cut off half of the solar system but not the avatar pic. You can do this by using the z-index to layer the different containers. 

      This invisible container will be in the parent container that holds both the avatar pic and the solar system.  */}

      {/* For the skill containers, look at using relative positioning, height and width as 100vh, 100vw, etc to keep it dynamic for mac and monitor. Also use percentage sizing to help this problem even further. Currently, skill containers overlap/overfill in the projects container on Mac book  */}

      <div className="rightSideHeroContainer">
        <img id="avatar-pic" src={Avatar}></img>
        <div className="solar-system"> 
            <div className="planet planet1">
              <div className="planet planet2">
                <div className="planet planet3">
                </div>
              </div>
            </div>
          </div>
          <div className="invisibleContainer"></div>
          {/* <p id="hero-quote">Center of My Creations</p> */}
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
