import React, { useEffect } from 'react';
import './skill.scss'
import { animationControls, motion } from 'framer-motion';

function Skills() {

    const fadeInVariants = {
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

    const leftContainerVariants = {
        hidden: {
            x: '100vw'
        },
        visible: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 20
            }
        }
    }

    const rightContainerVariants = {
        hidden: {
            x: '-100vw'
        },
        visible: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 20
            }
        }
    }

    const nextLeftVariants = {

    }

    const nextRightVariants = {
         
    }

    return (
        <section id="skillSection" className="skillSection">
            <div className="skillContainer">
                <div className="parent">
                    <motion.h1 style={{ textAlign: 'center' }} variants={fadeInVariants} initial="hidden" animate="visible">Full Stack Developer</motion.h1>
                    <div className="frontEnd">
                        <motion.div className="leftSkills" variants={leftContainerVariants} initial="hidden" animate="visible">
                            <h2>Front End Developer</h2>
                        </motion.div>
                    </div>
                    <div className="backEnd">
                        <motion.div className="rightSkills" variants={rightContainerVariants} initial="hidden" animate="visible">
                            <h2>Back End Developer</h2>
                        </motion.div>
                    </div>
                    <div className="server">
                        <motion.div className="leftSkills" variants={leftContainerVariants} initial="hidden" animate="visible">
                            <h2>Databases</h2>
                        </motion.div>
                    </div>
                    <div className="tools">
                        <motion.div className="rightSkills" variants={rightContainerVariants} initial="hidden" animate="visible">
                            <h2>Tools</h2>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;