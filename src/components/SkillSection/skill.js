import React, { useEffect, useRef } from "react";
import "./skill.scss";
import { useAnimation, motion } from "framer-motion";

export default function Skills() {
  const sectionRef = useRef();
  //TODO: Figure out a better section detection
  const windowWidth = window.innerWidth;
  console.log(window);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      Fade();
      leftSequence();
      rightSequence();
      leftChildrenDescription();
      rightChildrenDescription();
      if (windowWidth < 500) {
        leftMobileSequence();
        rightMobileSequence();
        mobileFrontEndDescription();
        mobileBackEndDescription();
        mobileServerDescription();
        mobileToolsDescription();
      }
    });
    observer.observe(sectionRef.current);
  }, []);

  const FadeIn = useAnimation();

  const leftContainer = useAnimation();
  const rightContainer = useAnimation();
  const leftDescription = useAnimation();
  const rightDescription = useAnimation();

  const leftMobileContainer = useAnimation();
  const rightMobileContainer = useAnimation();

  const frontendMobileDescription = useAnimation();
  const backendMobileDescription = useAnimation();
  const serverMobileDescription = useAnimation();
  const toolsMobileDescription = useAnimation();

  //This is the initial position of each skill container
  const leftContainerStart = {
    hidden: {
      x: "100vw",
    },
  };

  const rightContainerStart = {
    hidden: {
      x: "-100vw",
    },
  };

  // All the desktop animation sequences after the initial position has been executed
  async function leftSequence() {
    await leftContainer.start({ x: "100vw" });
    await leftContainer.start({
      x: "30vw",
      transition: { type: "spring", stiffness: 30 },
    });
    await leftContainer.start({
      x: "5vw",
      transition: { delay: 1.8, duration: 1.5 },
    });
  }

  useEffect(() => {
    leftSequence();
  }, []);

  async function rightSequence() {
    await rightContainer.start({ x: "-100vw" });
    await rightContainer.start({
      x: "-10vw",
      transition: { type: "spring", stiffness: 30, duration: 1.5 },
    });
    await rightContainer.start({
      x: "15vw",
      transition: { delay: 1.8, duration: 1.5 },
    });
  }

  useEffect(() => {
    rightSequence();
  }, []);

  // All the mobile animation sequences
  async function leftMobileSequence() {
    await leftMobileContainer.start({ x: "-100vw", height: 110 });
    await leftMobileContainer.start({
      x: 0,
      transition: { type: "spring", stiffness: 30 },
    });
    await leftMobileContainer.start({
      y: -30,
      height: 60,
      transition: { delay: 0.8, duration: 1.5 },
    });
  }
  useEffect(() => {
    leftMobileSequence();
  }, []);

  async function rightMobileSequence() {
    await rightMobileContainer.start({ x: "100vw", height: 110 });
    await rightMobileContainer.start({
      x: 0,
      transition: { type: "spring", stiffness: 30 },
    });
    await rightMobileContainer.start({
      y: -60,
      height: 60,
      transition: { delay: 0.8, duration: 1.5 },
    });
  }

  useEffect(() => {
    rightMobileSequence();
  }, []);

  //Fade in effect using variants so I can reuse them later
  async function Fade() {
    await FadeIn.start({ opacity: 0 });
    await FadeIn.start({ opacity: 1, transition: { delay: 1.3, duration: 2 } });
  }

  // Children animation for each skill details
  async function leftChildrenDescription() {
    await leftDescription.start({ opacity: 0, x: "-40vw" });
    await leftDescription.start({
      opacity: 1,
      x: "10vw",
      transition: { delay: 3.5, duration: 1.5 },
    });
  }

  async function rightChildrenDescription() {
    await rightDescription.start({ opacity: 0, x: "40vw" });
    await rightDescription.start({
      opacity: 1,
      x: "10vw",
      transition: { delay: 3.5, duration: 1.5 },
    });
  }

  async function mobileFrontEndDescription() {
    await frontendMobileDescription.start({ opacity: 0, y: -10 });
    await frontendMobileDescription.start({
      opacity: 1,
      y: 60,
      transition: { delay: 2.5, duration: 1.5 },
    });
  }

  async function mobileBackEndDescription() {
    await backendMobileDescription.start({ opacity: 0, y: -10 });
    await backendMobileDescription.start({
      opacity: 1,
      y: 60,
      transition: { delay: 3, duration: 1.5 },
    });
  }

  async function mobileServerDescription() {
    await serverMobileDescription.start({ opacity: 0, y: -10 });
    await serverMobileDescription.start({
      opacity: 1,
      y: 60,
      transition: { delay: 3.5, duration: 1.5 },
    });
  }

  async function mobileToolsDescription() {
    await toolsMobileDescription.start({ opacity: 0, y: -10 });
    await toolsMobileDescription.start({
      opacity: 1,
      y: 30,
      transition: { delay: 4, duration: 1.5 },
    });
  }
  return (
    <section className="skillContainer">
    <motion.section id="skillSection" className="skillSection">
      <div ref={sectionRef} className="skillDesktopContainer">
        <div className="parent">
          <motion.h1
            style={{ textAlign: "center" }}
            id="fullStack"
            initial="hidden"
            animate={FadeIn}
          >
            Full Stack Developer
          </motion.h1>
          <div className="frontEnd">
            <motion.div
              className="leftSkills"
              variants={leftContainerStart}
              initial="hidden"
              animate={leftContainer}
            >
              <h2>Front End Developement</h2>
            </motion.div>
            <motion.div
              className="leftContainerDetails"
              initial="hidden"
              animate={leftDescription}
            >
              <ul className="skillList">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>SCSS</h5>
                <h5>Javascript</h5>
                <h5>React</h5>
                <h5>JSX</h5>
                <h5>Framer-Motion</h5>
              </ul>
            </motion.div>
          </div>

          <div className="backEnd">
            <motion.div
              className="rightContainerDetails"
              initial="hidden"
              animate={rightDescription}
            >
              <ul className="skillList">
                <h5>Express</h5>
                <h5>Node.js</h5>
                <h5>Javascript</h5>
                <h5>Restful API's</h5>
              </ul>
            </motion.div>
            <motion.div
              className="rightSkills"
              variants={rightContainerStart}
              initial="hidden"
              animate={rightContainer}
            >
              <h2 id="backEndText">Back End Developement</h2>
            </motion.div>
          </div>

          <div className="server">
            <motion.div
              className="leftSkills"
              variants={leftContainerStart}
              initial="hidden"
              animate={leftContainer}
            >
              <h2 id="databaseText">Databases</h2>
            </motion.div>
            <motion.div
              className="leftContainerDetails"
              initial="hidden"
              animate={leftDescription}
            >
              <ul className="skillList">
                <h5>SQL</h5>
                <h5>NoSQL</h5>
                <h5>MongoDB</h5>
                <h5>GraphQL</h5>
              </ul>
            </motion.div>
          </div>

          <div className="tools">
            <motion.div
              className="rightContainerDetails"
              initial="hidden"
              animate={rightDescription}
            >
              <ul className="skillList">
                <h5>Git</h5>
                <h5>GitHub</h5>
                <h5>VS Code</h5>
                <h5>Zsh/Bash</h5>
                <h5>Netlify</h5>
                <h5>Heroku</h5>
                <h5>Jest</h5>
                <h5>Webpack</h5>
              </ul>
            </motion.div>
            <motion.div
              className="rightSkills"
              variants={rightContainerStart}
              initial="hidden"
              animate={rightContainer}
            >
              <h2 id="toolsText">Tools</h2>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="skillMobileContainer">
        <div className="mobile-frontEnd">
          <motion.div
            className="left-Mobile-Skills"
            variants={leftContainerStart}
            initial="hidden"
            animate={leftMobileContainer}
          >
            <h2>Front End Developement</h2>
          </motion.div>
          <motion.div
            className="mobile-container-details"
            initial="hidden"
            animate={frontendMobileDescription}
          >
            <ul className="mobile-Skill-List">
              <p>HTML CSS SCSS/SASS Javascript React JSX Framer-Motion</p>
            </ul>
          </motion.div>
        </div>

        <div className="mobile-backEnd">
          <motion.div
            className="right-Mobile-Skills"
            variants={rightContainerStart}
            initial="hidden"
            animate={rightMobileContainer}
          >
            <h2>Back End Developement</h2>
          </motion.div>
          <motion.div
            className="mobile-container-details"
            initial="hidden"
            animate={backendMobileDescription}
          >
            <ul className="mobile-Skill-List">
              <p>Express Node.js Javascript Restful API's</p>
            </ul>
          </motion.div>
        </div>

        <div className="mobile-server">
          <motion.div
            className="left-Mobile-Skills"
            variants={leftContainerStart}
            initial="hidden"
            animate={leftMobileContainer}
          >
            <h2>Databases</h2>
          </motion.div>
          <motion.div
            className="mobile-container-details"
            initial="hidden"
            animate={serverMobileDescription}
          >
            <ul className="mobile-Skill-List">
              <p>SQL NoSQL MongoDB GraphQL</p>
            </ul>
          </motion.div>
        </div>

        <div className="mobile-tools">
          <motion.div
            className="right-Mobile-Skills"
            variants={rightContainerStart}
            initial="hidden"
            animate={rightMobileContainer}
          >
            <h2>Tools</h2>
          </motion.div>
          <motion.div
            className="mobile-container-details"
            initial="hidden"
            animate={toolsMobileDescription}
          >
            <ul className="mobile-Skill-List">
              <p>Git, GitHub, VS-Code, Zsh/Bash, Netlify, Heroku, Jest, Webpack, Comment-Anchor</p>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </section>
  );
}
