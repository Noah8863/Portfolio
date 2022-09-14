import React, { useEffect } from 'react';
import './skill.scss'
import { useAnimation, motion } from 'framer-motion';


export default function Skills() {

    const leftContainer = useAnimation();
    const rightContainer = useAnimation();

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

    // All the animation sequences after the initial position has been executed
    async function leftSequence() {
        await leftContainer.start({ x: '100vw', });
        await leftContainer.start({
            x: 0, transition: {
                type: 'spring',
                stiffness: 20
            }
        });
        await leftContainer.start({
            x: '-10vw', transition: {
                delay: 1.5,
                duration: 1.5
            }
        });
    }

    useEffect(() => {
        leftSequence();
    }, []);

    async function rightSequence() {
        await rightContainer.start({ x: '-100vw', });
        await rightContainer.start({
            x: 0, transition: {
                type: 'spring',
                stiffness: 20
            }
        });
        await rightContainer.start({
            x: '20vw', transition: {
                delay: 1.5,
                duration: 1.5
            }
        });
    }

    useEffect(() => {
        rightSequence();
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
            x: '-50vw'
        },
        visible: {
            opacity: 1,
            x: '-5vw',
            transition: {
                delay: 4.2,
                duration: 1.5
            }
        }
    }

    const nextRightVariants = {
        hidden: {
            opacity: 0,
            x: '100vw'
        },
        visible: {
            opacity: 1,
            x: '5vw',
            transition: {
                delay: 4.2,
                duration: 1.5
            }
        }
    }
    return (
        <section id="skillSection" className="skillSection">
            <div className="skillContainer">
                <div className="parent">
                    <motion.h1 style={{ textAlign: 'center' }} variants={FadeInVariants} initial="hidden" animate="visible">Full Stack Developer</motion.h1>
                    <div className="frontEnd">
                        <motion.div className="leftSkills" variants={leftContainerStart} initial="hidden" animate={leftContainer}>
                            <h2>Front End Developement</h2>
                        </motion.div>
                        <motion.div className="leftContainerDetails" variants={nextLeftVariants} initial="hidden" animate="visible">
                            <h3>HTML | CSS | SCSS | JavaScript | React | Framer-Motion</h3>
                        </motion.div>
                    </div>
                    <div className="backEnd">
                        <motion.div className="rightContainerDetails" variants={nextRightVariants} initial="hidden" animate="visible">
                            <h3>HTML | CSS | SCSS | JavaScript | React | Framer-Motion</h3>
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
                            <h3>SQL | NoSQL | MongoDB | Mongoose | Firebase </h3>
                        </motion.div>
                    </div>
                    <div className="tools">
                    <motion.div className="rightContainerDetails" variants={nextRightVariants} initial="hidden" animate="visible">
                            <h3>HTML | CSS | SCSS | JavaScript | React | Framer-Motion</h3>
                        </motion.div>
                        <motion.div className="rightSkills" variants={rightContainerStart} initial="hidden" animate={rightContainer}>
                            <h2>Tools</h2>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
