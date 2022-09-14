import React, { useEffect } from 'react';
import './skill.scss'
import { animationControls, motion } from 'framer-motion';

function Skills() {

    async function sequence(){
        await animationControls.start({ x: '-100vw'});
        await animationControls.start({ x: 0});
        await animationControls.start({x: '-50px'});
    }

    useEffect(() => {
        sequence();
      }, []);

    return (
        <section className="skillSection">
            <div className="skillContainer">
                <div className="parent">
                <h1 style={{textAlign: 'center'}}>Full Stack Developer</h1>
                    <div className="frontEnd">
                        <motion.div className="leftSkills" animate={animationControls} transition={{ duration:0.5, delay: .5}}>
                            <h2>Front End Developer</h2>
                        </motion.div>
                    </div>
                    <div className="backEnd">
                        <motion.div className="rightSkills" initial={{ x: '100vw'}} animate={{ x: 0}} transition={{duration:0.5, delay: .5}}>
                            <h2>Back End Developer</h2>
                        </motion.div>
                    </div>
                    <div className="server">
                        <motion.div className="leftSkills" initial={{ x: '-100vw'}} animate={{ x: 0}} transition={{duration:0.5, delay: .5}}>
                            <h2>Databases</h2>
                        </motion.div>
                    </div>
                    <div className="tools">
                        <motion.div className="rightSkills" initial={{ x: '100vw'}} animate={{ x: 0}} transition={{duration:0.5, delay: .5}}>
                            <h2>Tools</h2>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;