import React from "react";
import "./hero.scss";
import Avatar from "../../Images/Avatar.PNG";
import Nav from 'react-bootstrap/Nav';



function Hero() {
  return (
    <section id="heroContainer">
      <div className="leftSideHeroContainer">
        <p>HELLO</p>
        <p>I'm <span className="name">Noah Hoffman</span> a Full Stack Web Developer</p> <br></br>
        <p>Passionate about creating dynamic and user-friendly digital experiences. With a strong foundation in both frontend and backend development, I have the skills to bring design concepts to life and deliver seamless web applications.</p>
        <br></br>
        <Nav.Link href="/contact" >
          <button id="hireMeBtn">Hire Me</button>
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/noah-hoffman-9975a7121/">
          <button id="portfolioBtn">LinkedIn</button>
        </Nav.Link>
      </div>
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
          <div className="invisibleContainer">
            <p id="hero-quote">Center of My Creations</p>
          </div>
      </div>
    </section>
  );
}

export default Hero;
