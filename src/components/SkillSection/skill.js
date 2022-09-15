import React, { useEffect } from 'react';
import './skill.scss'
import { useAnimation, motion } from 'framer-motion';


export default function Skills() {

    const leftContainer = useAnimation();
    const rightContainer = useAnimation();

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
        await leftContainer.start({
            x: 410,
            transition: {
                type: 'spring',
                stiffness: 20
            }
        });
        await leftContainer.start({
            x: '-10vw',
            transition: {
                delay: 0.8,
                duration: 1.5
            }
        });
    }

    useEffect(() => {
        leftSequence();
    }, []);

    async function rightSequence() {
        await rightContainer.start({ x: '-100vw' });
        await rightContainer.start({
            x: -400,
            transition: {
                type: 'spring',
                stiffness: 20
            }
        });
        await rightContainer.start({
            x: '10vw',
            transition: {
                delay: 0.8,
                duration: 1.5
            }
        });
    }

    useEffect(() => {
        rightSequence();
    }, []);


    // All the mobile animation sequences

    async function leftMobileSequence() {
        await leftMobileContainer.start({ x: '-100vw', height: 110 });
        await leftMobileContainer.start({
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 20
            }
        });
        await leftMobileContainer.start({
            y: -30,
            height: 60, 
            transition: {
                delay: 0.8,
                duration: 1.5
            }
        });
    }

    useEffect(() => {
        leftMobileSequence();
    }, []);

    async function rightMobileSequence() {
        await rightMobileContainer.start({ x: '100vw', height: 110});
        await rightMobileContainer.start({
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 20
            }
        });
        await rightMobileContainer.start({
            y: -30,
            height: 80, 
            transition: {
                delay: 0.8,
                duration: 1.5
            }
        });
    }

    useEffect(() => {
        rightMobileSequence();
    }, []);

    //Fade in effect using variants so I can reuse them later
    const FadeInVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 2.3,
                duration: 1.5
            }
        }
    }

    // Children animation for each skill details 
    const nextLeftVariants = {
        hidden: {
            opacity: 0,
            x: '-40vw'
        },
        visible: {
            opacity: 1,
            x: '-5vw',
            transition: {
                delay: 4.2,
                duration: 2
            }
        }
    }

    const nextRightVariants = {
        hidden: {
            opacity: 0,
            x: '100 vw'
        },
        visible: {
            opacity: 1,
            x: '10vw',
            transition: {
                delay: 4.2,
                duration: 2
            }
        }
    }
    return (
        <section id="skillSection" className="skillSection">
            <div className="skillDesktopContainer">
                <div className="parent">
                    <motion.h1 style={{ textAlign: 'center' }} variants={FadeInVariants} initial="hidden" animate="visible">Full Stack Developer</motion.h1>

                    <div className="frontEnd">
                        <motion.div className="leftSkills" variants={leftContainerStart} initial="hidden" animate={leftContainer}>
                            <h2>Front End Developement</h2>
                        </motion.div>
                        <motion.div className="leftContainerDetails" variants={nextLeftVariants} initial="hidden" animate="visible">
                            <h3>HTML | CSS | SCSS | JavaScript | React | Framer-Motion | JSX</h3>
                        </motion.div>
                    </div>

                    <div className="backEnd">
                        <motion.div className="rightContainerDetails" variants={nextRightVariants} initial="hidden" animate="visible">
                            <h3> Express | Node.js | jQuery | JavaScript | Restful API's</h3>
                        </motion.div>
                        <motion.div className="rightSkills" variants={rightContainerStart} initial="hidden" animate={rightContainer}>
                            <h2>Back End Developement</h2>
                        </motion.div>
                    </div>

                    <div className="server">
                        <motion.div className="leftSkills" variants={leftContainerStart} initial="hidden" animate={leftContainer}>
                            <h2>Databases</h2>
                        </motion.div>
                        <motion.div className="leftContainerDetails" variants={nextLeftVariants} initial="hidden" animate="visible">
                            <h3>SQL | NoSQL | MongoDB | Mongoose | GraphQL </h3>
                        </motion.div>
                    </div>

                    <div className="tools">
                        <motion.div className="rightContainerDetails" variants={nextRightVariants} initial="hidden" animate="visible">
                            <h3> Git | GitHub | VS Code | Zsh/Bash | Netlify | Jest | Webpack | Heroku</h3>
                        </motion.div>
                        <motion.div className="rightSkills" variants={rightContainerStart} initial="hidden" animate={rightContainer}>
                            <h2>Tools</h2>
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
        </section>
    )
}