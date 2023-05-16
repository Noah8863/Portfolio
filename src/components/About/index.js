import React from "react";
import AboutAvatar from "../../Images/avatar-pic-coffee4.jpg"
import "./about.scss";


function About() {
  return (
    <section className="about-section" id="about">
      <div className="aboutLeftCon">
        <p><span className="first-letter">N</span>oah Hoffman is a skilled full stack web developer who graduated from the University of Denver Full Stack Bootcamp in August 2022. With a passion for frontend development and a willingness to take on backend work, Noah has been actively involved in the freelance industry, providing valuable services to local small businesses in Colorado. </p> <br></br>
        
        <p> Driven by a desire to create engaging and user-friendly websites, Noah thrives on turning design concepts into functional and intuitive interfaces. His expertise in HTML, CSS, JavaScript, and various frontend frameworks allows him to deliver dynamic and visually appealing web applications that meet clients' needs. </p> <br></br>
        
        <p> Beyond his coding prowess, Noah is a multi-talented individual with diverse interests. When he's not immersed in code, he finds solace in making music using his MPC One, where he channels his creativity and artistic expression. Additionally, Noah is an aspiring real estate investor and dedicates time to learning about the intricacies of the industry. </p> <br></br>
        
        <p> With a strong foundation in web development and a commitment to continuous growth, Noah Hoffman brings a blend of technical expertise and a passion for innovation to every project he undertakes. He is driven by the pursuit of excellence and seeks to create meaningful and impactful digital experiences for clients and end-users alike. </p> <br></br>
      </div>
      <div className="aboutRightCon">
        <img id="aboutAvatar" src={AboutAvatar}></img>
        <p id="email">stacknoah99@gmail.com</p>
      </div>
    </section>
  );
}

export default About;
