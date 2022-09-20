import React, { useEffect, useRef } from 'react';
import './skill.scss'
import { useAnimation, motion } from 'framer-motion';


export default function Skills() {
    const sectionRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            Fade();
            leftSequence();
            rightSequence();
            leftChildrenDescription();
            rightChildrenDescription();
            leftMobileSequence();
            rightMobileSequence();
        })
        observer.observe(sectionRef.current)
    })

    const FadeIn = useAnimation();

    const leftContainer = useAnimation();
    const rightContainer = useAnimation();
    const leftDescription = useAnimation();
    const rightDescription = useAnimation();

    const leftMobileContainer = useAnimation();
    const rightMobileContainer = useAnimation();

    //This is the initial position of each skill container
    const leftContainerStart = {
        hidden: {
            x: '100vw'
        }
    }

    const rightContainerStart = {
        hidden: {
            x: '-100vw'
        }
    }


    // All the desktop animation sequences after the initial position has been executed
    async function leftSequence() {
        await leftContainer.start({ x: '100vw', });
        await leftContainer.start({ x: 410, transition: { type: 'spring', stiffness: 20 } })
        await leftContainer.start({ x: '5vw', transition: { delay: 0.8, duration: 1.5 } })
    }

    useEffect(() => {
        leftSequence();
    }, []);

    async function rightSequence() {
        await rightContainer.start({ x: '-100vw' });
        await rightContainer.start({ x: -400, transition: { type: 'spring', stiffness: 20 } })
        await rightContainer.start({ x: '10vw', transition: { delay: 0.8, duration: 1.5 } })
    };

    useEffect(() => {
        rightSequence();
    }, []);


    // All the mobile animation sequences
    async function leftMobileSequence() {
        await leftMobileContainer.start({ x: '-100vw', height: 110 });
        await leftMobileContainer.start({ x: 0, transition: { type: 'spring', stiffness: 20 } })
        await leftMobileContainer.start({ y: -30, height: 60, transition: { delay: 0.8, duration: 1.5 } })
    };
    useEffect(() => {
        leftMobileSequence();
    }, []);

    async function rightMobileSequence() {
        await rightMobileContainer.start({ x: '100vw', height: 110 });
        await rightMobileContainer.start({ x: 0, transition: { type: 'spring', stiffness: 20 } });
        await rightMobileContainer.start({ y: -30, height: 60, transition: { delay: 0.8, duration: 1.5 } })
    };

    useEffect(() => {
        rightMobileSequence();
    }, []);



    //Fade in effect using variants so I can reuse them later
    async function Fade() {
        await FadeIn.start({ opacity: 0 });
        await FadeIn.start({ opacity: 1, transition: { delay: 2.3, duration: 1.5 } });
    }

    // Children animation for each skill details
    async function leftChildrenDescription() {
        await leftDescription.start({ opacity: 0, x: '-40vw' })
        await leftDescription.start({ opacity: 1, x: '-20vw', transition: { delay: 4.2, duration: 2 } })
    }

    async function rightChildrenDescription() {
        await rightDescription.start({ opacity: 0, x: '30vw' })
        await rightDescription.start({ opacity: 1, x: '20vw', transition: { delay: 4.2, duration: 1.8 } })
    }


    return (
        <motion.section id="skillSection" className="skillSection">
            <div ref={sectionRef} className="skillDesktopContainer">
                <div className="parent">
                    <motion.h1 style={{ textAlign: 'center' }} id="fullStack" initial="hidden" animate={FadeIn}>Full Stack Developer</motion.h1>
                    <div className="frontEnd">
                        <motion.div className="leftSkills" variants={leftContainerStart} initial="hidden" animate={leftContainer}>
                            <h1>Front End Developement</h1>
                        </motion.div>
                        <motion.div className="leftContainerDetails" initial="hidden" animate={leftDescription}>
                            <ul className="skillList">
                                <h4>HTML</h4>
                                <h4>CSS</h4>
                                <h4>SCSS</h4>
                                <h4>Javascript</h4>
                                <h4>React</h4>
                                <h4>JSX</h4>
                                <h4>Framer-Motion</h4>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="backEnd">
                        <motion.div className="rightContainerDetails" initial="hidden" animate={rightDescription}>
                            <ul className="skillList">
                                <h4>Express</h4>
                                <h4>Node.js</h4>
                                <h4>Javascript</h4>
                                <h4>Restful API's</h4>
                            </ul>
                        </motion.div>
                        <motion.div className="rightSkills" variants={rightContainerStart} initial="hidden" animate={rightContainer}>
                            <h1 id="backEndText">Back End Developement</h1>
                        </motion.div>
                    </div>

                    <div className="server">
                        <motion.div className="leftSkills" variants={leftContainerStart} initial="hidden" animate={leftContainer}>
                            <h1 id="databaseText">Databases</h1>
                        </motion.div>
                        <motion.div className="leftContainerDetails" initial="hidden" animate={leftDescription}>
                            <ul className="skillList">
                                <h4>SQL</h4>
                                <h4>NoSQL</h4>
                                <h4>MongoDB</h4>
                                <h4>GraphQL</h4>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="tools">
                        <motion.div className="rightContainerDetails" initial="hidden" animate={rightDescription}>
                            <ul className="skillList">
                                <h4>Git</h4>
                                <h4>GitHub</h4>
                                <h4>VS Code</h4>
                                <h4>Zsh/Bash</h4>
                                <h4>Netlify</h4>
                                <h4>Heroku</h4>
                                <h4>Jest</h4>
                                <h4>Webpack</h4>
                            </ul>
                        </motion.div>
                        <motion.div className="rightSkills" variants={rightContainerStart} initial="hidden" animate={rightContainer}>
                            <h1 id="toolsText">Tools</h1>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="skillMobileContainer">

                <div className="frontEnd">
                    <motion.div className="leftSkills" variants={leftContainerStart} initial="hidden" animate={leftMobileContainer}>
                        <h2>Front End Developement</h2>
                    </motion.div>
                </div>

                <div className="backEnd">
                    <motion.div className="rightSkills" variants={rightContainerStart} initial="hidden" animate={rightMobileContainer}>
                        <h2>Back End Developement</h2>
                    </motion.div>
                </div>

                <div className="server">
                    <motion.div className="leftSkills" variants={leftContainerStart} initial="hidden" animate={leftMobileContainer}>
                        <h2>Databases</h2>
                    </motion.div>
                </div>

                <div className="tools">

                    <motion.div className="rightSkills" variants={rightContainerStart} initial="hidden" animate={rightMobileContainer}>
                        <h2>Tools</h2>
                    </motion.div>
                </div>

            </div>
        </motion.section>
    )
}